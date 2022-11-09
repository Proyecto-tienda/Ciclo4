const express=require("express")
const router=express.Router()

const { getCart, AddProductToCart, deleteProduct } = require("../controllers/cartController")

router.route('/cart').get(getCart)//Obtener el carrito.
router.route('/cart/NewProduct').post(AddProductToCart);//Añadir un producto al carrito.
router.route('/cart/DeleteProduct/:name').delete(deleteProduct);//Eliminar un producto del carrito atravez del nombre

module.exports=router;