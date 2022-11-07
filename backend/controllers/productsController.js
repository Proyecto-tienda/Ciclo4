const producto=require("../models/productos")

//Ver la lista de productos
exports.getProducts= async (req,res,next) =>{
    const productos = await producto.find();
    res.status(200).json({
        sucess:true,
        cantidad: productos.length,
        productos
    })
}

//Ver un producto por ID
exports.getProductById= async (req, res, next)=>{
    const product= await producto.findById(req.params.id)
    
    if (!product){
            return res.status(404).json({
            success:false,
            message: 'No encontramos ese producto',
            error:true
        })
    }
    res.status(200).json({
        success:true,
        message:"Aqui debajo encuentras información sobre tu producto: ",
        product
    })
}

//Update un producto
exports.updateProduct = async (req, res, next) => {
    let product = await producto.findById(req.params.id)
    if (!product) {
        return res.status(404).json({
            success: false, message: 'No encontramos ese producto'
        })
    }
    product = await producto.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true
    });
    res.status(200).json({
        success: true,
        message: "Producto actualizado correctamente",
        product
    })
}
//Crear nuevo producto /api/productos
exports.newProduct=async(req,res,next)=>{
    const product= await producto.create(req.body);

    res.status(201).json({
        success:true,
        product
    })
}

//Eliminar producto
exports.deleteProduct= async (req,res,next) => {
    const product= await producto.findById(req.params.id)
    if (!product){
        return res.status(404).json({
        success:false,
        message: "No encontramos ese producto"
        })
}

    await product.remove();
    res.status(200).json({
        success:true,
        message:"Producto eliminado correctamente"
    })
}