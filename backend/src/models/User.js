const {Schema, model} = require('mongoose')

const userSchema = new Schema({
    name: String ,
    apellido: String ,
    edad: Number,
    telefono: String,
    correo: String
},
{
    timestamps:true
})
modulo.exports = model('user',userSchema)