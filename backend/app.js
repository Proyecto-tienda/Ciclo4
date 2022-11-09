const express=require("express");
const app = express();

app.use(express.json());

//Importar rutas
const productos=require("./routes/products")
const ventas=require("./routes/ventas")

app.use('/api',productos, ventas) //Sujeto a decision (ruta del navegador)

module.exports=app