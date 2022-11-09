const mongoose = require("mongoose")

const ventaSchema = mongoose.Schema({

    productos: [
        {
            nombre: {
                type: String,
                required: [true, "Por favor registra el nombre del producto."],
                trim: true,
                maxLength: [120, "El nombre del producto no debe exceder los 120 caracteres."]
            },
            precio: {
                type: Number,
                required: [true, "Por favor registre el precio del producto."],
                maxLength: [8, "El precio del producto no puede estar por encima de 99'999.999"],
                default: 0.0
            },
            cantidad:{
                type: Number,
                required:[true,"Por favor registre la cantidad del producto."],
                maxLength:[8, "El precio del producto no puede estar por encima de 99'999.999"],
                default: 0.0
            }
        }
    ],

    totalPago: {
        type: Number,
        required: [true, "Suma total del pago."],
        default: 0.0
    },

    fechaCreacion: {
        type: Date,
        default: Date.now
    }
})

module.exports=mongoose.model("venta",ventaSchema)