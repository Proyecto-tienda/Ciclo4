const express = require('express');
const app = express();
const cors = require('cors')

//Save Variable to using port.
app.set('port', process.env.PORT || 4000 )

//midlewares
app.use(cors())
app.use(express.json())

//rotus


app.get('/',(req,res) =>
{
    res.send('Bienvenido a la api rest full!!')
})
module.exports = app