const { json } = require("express")
const { model , Schema, default: mongoose }= require("mongoose")

const CartSchema = new Schema({
    name: 
        {   type: String, 
            required : true,
            unique : true 
        },
    amount: 
        {
            type : Number, 
            required : true
        },
    imagen:[
            {
                public_id:{
                    type:String,
                    required:true
                },
                url:{
                    type:String,
                    required:true
                }
            }
    ],
    price:
        {
            type: Number, 
            required: true
        },
    id_producto : {
        type: mongoose.Schema.Types.ObjectId,
        required : true
    }

        
     })

module.exports = model("Cart",CartSchema)