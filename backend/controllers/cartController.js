const cartSchema = require("../models/cart")
const product = require("../models/productos")

//View products in cart.
exports.getCart = async (req, res, next) => {
    const carts = await cartSchema.find()
    res.status(200).json({
        sucess: true,
        carts
    })
}

//Add products to cart.
exports.AddProductToCart = async (req, res) => {

    const {id} = req.body;

    //Does this product exist?
    const IsProduct = await product.findById(id);
    //Is Product in the cart?
    const IsInTheCart = await cartSchema.findOne({id_producto: id});

    if (IsProduct) {
        if (!IsInTheCart) {
            const {_id, nombre, imagen, precio} = IsProduct
            const newProductInCart = await cartSchema.create({
                name: nombre,
                imagen: imagen,
                price: precio,
                id_producto: _id,
                amount: 1
            })
            res.status(200).json({
                mensaje: 'Producto agregado al carrito',
                newProductInCart
            })
        } else {
            let productCart = await cartSchema.findOneAndUpdate({id_producto: id}, {$inc: {amount: 1}})
            res.status(200).json({
                mensaje: "Se añadio otro elemento del producto",
                productCart
            });
        }
    } else {
        res.status(404).json({
            mensaje: 'El producto no fue encontrado'
        })
    }

}

//Delete product to Cart.
exports.deleteProduct = async (req, res) => {
    const {name} = req.params.name
    //search product in the cart.
    const IsProCart = await cartSchema.findOne({name})
    if (!IsProCart) {
        res.status(404).json({
            mensaje: 'El producto no fue encontrado'
        })
    } else {
        const DeleteCart = await cartSchema.deleteOne({name})
        if (!DeleteCart) {
            res.status(500).json({
                mesaje: 'Hubo un error, no se pudo eliminar del carrito'
            })
        } else {
            res.status(200).json({
                mesaje: 'Se elimino del carrito el producto'
            })

        }
    }
}

//Confirmar compra
exports.confirm = async (req, res) => {
    const carts = await cartSchema.find()
    let total = 0;
    let price = 0;
    for (cart of carts) {
        price = cart.amount * cart.price
        total = total + price
    }
    res.status(200).json({
        sucess: true,
        mensaje: "Desea confirmar su compra por un valor de $" + total + "?"
    })
}

//Restar existencias
exports.compraRealizada = async (req, res) => {
    const carts = await cartSchema.find()
    for (cart of carts) {
        let producto = await product.findByIdAndUpdate(cart.id_producto, {$inc: {inventario: -cart.amount}});
    }
    const productos = await product.find({inventario: {$ne: 0}});
    res.status(200).json({
        sucess: true,
        mensaje: "Compra realizada exitosamente",
        productos
    })
    //const DeleteCart = await cartSchema.deleteMany();
}