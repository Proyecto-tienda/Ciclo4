const cartSchema = require("../models/cart")
const product = require("../models/productos")
//View products in cart.
exports.getCart = async (res,next) => {
    const cart =  await cartSchema.find()
    if (!cart){
        return res.status(200).json({
        success:true,
        message: 'No hay productos agregado al carrito',
    })
}
    res.status(200).json({
        sucess:true,
        cart
    })
}

//Add products to cart.

exports.AddProductToCart = async(req,res) => {
    const {name, img, price} = req.body;

    //Does this product exist?
    const IsProduct = await product.findOne({ name });

    //Values to cart not empy.
    const notEmpy = (name !== "" && img !== "" && price !== "");

    //Is Product in the cart?
    const IsInTheCart = await cartSchema.findOne({ name });


    //If product doesn´t exist
    if(!IsProduct){
        res.status(400).json({
            mensaje:'El producto no existe o no esta disponible'
        });
    }
    else if(notEmpy && !IsInTheCart){
        const newProductInCart = new cartSchema({name, img, price, amount : 1});     
        newProductInCart.save()
        res.status(200).json({
            mensaje : 'Producto agregado al carrito'
        })
    }
    else if(IsInTheCart){
        ProductCart = await cartSchema.findOneAndUpdate({ name },{ $inc :{amount : 1 }}, { new:true })
        res.status(200).json({
            mensaje: "se añadio otro elemento del producto"
        });
    }

}

//Delete product to Cart.
exports.deleteProduct= async (req,res) => {
    const { name } = req.params.name
    //search product in the cart.
    const IsProCart =  await cartSchema.findOne({ name })
    if (!IsProCart){
        res.status(404).json({
            mensaje : 'El producto no fue encontrado'
        })
    }
    else{
        const DeleteCart = await cartSchema.deleteOne({ name })
        if(!DeleteCart){
            res.status(500).json({
                mesaje : 'Hubo un error, no se pudo eliminar del carrito'
            })
        }else{
            res.status(200).json({
                mesaje : 'Se elimino del carrito el producto'
            })

        }
    }



    
}