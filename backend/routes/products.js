const express=require("express")
const router=express.Router();

const {getProducts, newProduct, getProductById} = require("../controllers/productsController")

router.route('/productos').get(getProducts)//obtener todos los productos
router.route('/producto/nuevo').post(newProduct);//crear un producto
router.route('/producto/:id').get(getProductById); //Consultar un producto por id
router.route('/producto/:id').put(updateProduct);//actualizar un producto por id
router.route('/producto/:id').delete(deleteProduct);//Eliminar un producto por id

module.exports=router;


