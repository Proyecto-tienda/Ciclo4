const userCtrl = {}
const User = require('../models/User')

usuarioCtrl.getUsu = async(req,res) => {
    const user = await User.find()
    res.json(user)

}

usuarioCtrl.creataUsu = async(req,res) => {
    const {nombre ,apellido , correo, telefono, edad} = req.body;
    const newUser = new User({
        nombre:nombre,
        apellido: apellido,
        correo: correo,
        telefono : telefono,
        edad : edad

    })
    await newUser.save({message:'El usuario ha sido creado!'});
    res.json()

}

