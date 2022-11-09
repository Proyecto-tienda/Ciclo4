const venta=require("../models/venta")


//Crear nuevo producto /api/productos
exports.newSale=async(req,res,next)=>{
    const sale= await venta.create(req.body);

    res.status(201).json({
        success:true,
        sale
    })
}

//Ver la lista de ventas
exports.getSale= async (req,res,next) =>{
    const sales = await venta.find();
    res.status(200).json({
        sucess:true,
        cantidad: sales.length,
        sales
    })
}