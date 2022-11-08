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
    img:
        {
            type: Number,
            required: true
        
        },
    Price:
        {
            type: Number, 
            required: true
        }

        
     })

module.exports = model("Cart",CartSchema)