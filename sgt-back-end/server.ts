import express from 'express';
import pg from 'pg';
import errorMiddleware from './error-middleware.js';
import ClientError from './client-error.js';

const app = express();

app.use(express.json());
// only create ONE pool for your whole server
const db = new pg.Pool({
  connectionString: 'postgres://dev:dev@localhost/studentGradeTable',
  ssl: {
    // Allow non-SSL traffic to localhost
    rejectUnauthorized: false,
  },
});

app.get('/api/grades', async (req, res, next) => {
  try {
    const sql = `
      select *
        from "grades"
    `;
    const result = await db.query(sql);
    res.status(200).json(result.rows);
  } catch (err) {
    next(err);
  }
});

app.get('/api/grades/:gradeId', async (req, res, next) => {
  try {
    const requestId = Number(req.params.gradeId);
    if (!Number.isInteger(requestId) || requestId <= 0) {
      throw new ClientError(400, 'ID must be a positive integer');
    }
    const sql = `
      select *
        from "grades"
        where 'gradeId' = $1;
    `;
    const params = [requestId];
    const result = await db.query(sql, params);
    const grade = result.rows[0];
    if (grade) {
      res.status(200).json(grade);
    } else {
      throw new ClientError(
        404,
        `Cannot find grade with 'gradeId' ${requestId}`
      );
    }
  } catch (err) {
    next(err);
  }
});

app.post('/api/grades', async (req, res, next) => {
  try {
    let { name, course, score } = req.body;
    score = Number(score);
    if (!name) {
      throw new ClientError(400, 'Name is a required field');
    }
    if (!course) {
      throw new ClientError(400, 'Course is a required field');
    }
    if (isNaN(score) || !score || score < 0 || score > 100) {
      throw new ClientError(
        400,
        'Score must be a number between 0 - 100 and is a required field'
      );
    }
    const sql = `
          insert into "grades" ("name", "course", "score")
            values($1, $2, $3)
            returning *;
        `;
    const params = [name, course, score];
    const result = await db.query(sql, params);
    const grade = result.rows[0];
    res.status(201).json(grade);
  } catch (err) {
    next(err);
  }
});

app.delete('/api/grades/:gradeId', async (req, res, next) => {
  try {
    const deleteId = Number(req.params.gradeId);
    if (!Number.isInteger(deleteId) || deleteId < 0) {
      throw new ClientError(400, 'id must be a positive integer');
    }
    const sql = `
            delete
              from "grades"
              where "gradeId" = $1
              returning *;
          `;
    const params = [deleteId];
    const result = await db.query(sql, params);
    const grade = result.rows[0];
    if (grade) {
      res.sendStatus(204);
    } else {
      throw new ClientError(
        404,
        `Cannot find grade with 'gradeId' ${deleteId}`
      );
    }
  } catch (err) {
    next(err);
  }
});

app.put('/api/grades/:gradeId', async (req, res, next) => {
  try {
    const updateId = Number(req.params.gradeId);
    let { name, course, score } = req.body;
    score = Number(score);
    if (!Number.isInteger(updateId) || updateId < 0) {
      throw new ClientError(400, 'ID must be a positive integer');
    }
    if (!name) {
      throw new ClientError(400, 'Name is a required field');
    }
    if (!course) {
      throw new ClientError(400, 'Course is a required field');
    }
    if (isNaN(score) || !score || score < 0 || score > 100) {
      throw new ClientError(
        400,
        'Score must be a number between 0 - 100 and is a required field'
      );
    }
    const sql = `
            update "grades"
              set  "name" = $1,
                  "course" = $2,
                  "score" = $3
              where "gradeId" = $4
              returning *;
          `;
    const params = [name, course, score, updateId];
    const result = await db.query(sql, params);
    const grade = result.rows[0];
    if (grade) {
      res.status(200).json(grade);
    } else {
      throw new ClientError(
        404,
        `Cannot find grade with 'gradeId' ${updateId}`
      );
    }
  } catch (err) {
    next(err);
  }
});

app.use(errorMiddleware);

app.listen(8080, () => console.log('Listening on port 8080!'));
