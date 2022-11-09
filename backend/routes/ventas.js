const express=require("express")
const router=express.Router();

const {getSale, newSale} = require("../controllers/ventasController")


router.route('/venta/nuevo').post(newSale);//crear un producto
router.route('/ventas').get(getSale)//obtener todos los productos

module.exports=router;