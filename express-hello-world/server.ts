import express from "express"

const app = express();

/* binds the middleware function to the app object with use()
   no mount path is provided, so the funciton will execute every time the app receives a request*/
app.use(function (req, res){
  console.log(req.method)
  res.send('This is trippy')});

app.listen(8080, () => console.log('Now listening on port 8080'))
