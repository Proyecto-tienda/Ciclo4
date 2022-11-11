const express=require("express");
const app = express();

app.use(express.json());

//Importar rutas
const productos=require("./routes/products")

const cart = require('./routes/carts')

app.use('/api',productos) //Sujeto a decision (ruta del navegador)
app.use('/c',cart)
module.exports=app
