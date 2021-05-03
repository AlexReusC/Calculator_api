const cors = require('cors');
const express = require('express');

const app = express();
app.use(cors());
app.options('*', cors());

const port = 8087;

app.get('/', (req, res) => {
  res.send("api working")
})

app.get('/suma', (req, res) => {
  let a = parseInt(req.query.a);
  let b = parseInt(req.query.b);
  let suma = a + b;
  res.send({res: suma});
})

app.get('/resta', (req, res) => {
  let a = parseInt(req.query.a);
  let b = parseInt(req.query.b);
  let resta = a - b;
  res.send({res: resta});
})

app.get('/multiplicacion', (req, res) => {
  let a = parseInt(req.query.a);
  let b = parseInt(req.query.b);
  let multiplicacion = a * b;
  res.send({res: multiplicacion});
})

app.get('/division', (req, res) => {
  let a = parseFloat(req.query.a);
  let b = parseFloat(req.query.b);
  let division = a / b;
  res.send({res: division});
})

app.get('/raiz', (req, res) => {
  let a = parseFloat(req.query.a);
  let raiz = a ** 0.5;
  res.send({res: raiz});
})

app.get('/potencia', (req, res) => {
  let a = parseFloat(req.query.a);
  let potencia = a * a;
  res.send({res: potencia});
})



app.listen(port, () =>
  console.log("listening at port 8087")
)
