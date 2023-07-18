import 'dotenv/config';
import pg from 'pg';
import express from 'express';
import ClientError from './client-error.js';
import errorMiddleware from './error-middleware.js';

const db = new pg.Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false,
  },
});

const app = express();

app.use(express.static('public'));
app.use(express.json());

app.get('/api/todos', async (req, res, next) => {
  try {
    const sql = `
      select *
        from "todos"
        order by "todoId"
    `;
    const result = await db.query(sql);
    res.json(result.rows);
  } catch (err) {
    next(err);
  }
});

app.post('/api/todos', async (req, res, next) => {
  try {
    const { task, isCompleted = false } = req.body;
    if (!task || typeof isCompleted !== 'boolean') {
      throw new ClientError(400, 'task and isCompleted are required');
    }
    const sql = `
      insert into "todos" ("task", "isCompleted")
        values ($1, $2)
        returning *
    `;
    const params = [task, isCompleted];
    const result = await db.query(sql, params);
    const [todo] = result.rows;
    res.status(201).json(todo);
  } catch (err) {
    next(err);
  }
});

app.patch('/api/todos/:todoId', async (req, res, next) => {
  try {
    const todoId = Number(req.params.todoId);
    if (!Number.isInteger(todoId) || todoId < 1) {
      throw new ClientError(400, 'todoId must be a positive integer');
    }
    const { isCompleted } = req.body;
    if (typeof isCompleted !== 'boolean') {
      throw new ClientError(400, 'isCompleted (boolean) is required');
    }
    const sql = `
      update "todos"
        set "updatedAt" = now(),
            "isCompleted" = $1
        where "todoId" = $2
        returning *
    `;
    const params = [isCompleted, todoId];
    const result = await db.query(sql, params);
    const [todo] = result.rows;
    if (!todo) {
      throw new ClientError(404, `cannot find todo with todoId ${todoId}`);
    }
    res.json(todo);
  } catch (err) {
    next(err);
  }
});

app.use(errorMiddleware);

app.listen(process.env.PORT, () => {
  console.log(`express server listening on port ${process.env.PORT}`);
});
