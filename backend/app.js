const express=require("express");
const app = express();

app.use(express.json());

//Importar rutas
const productos=require("./routes/products")
const cart = require('./routes/carts')
const ordenes=require("./routes/orders")
const usuarios = require("./routes/auth")

app.use('/api',productos) //Sujeto a decision (ruta del navegador)
app.use('/c',cart)
app.use('/api', ordenes)
app.use('/api',usuarios)

module.exports=app
