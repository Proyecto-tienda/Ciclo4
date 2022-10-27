require('dotenv').config()

const app = require('./app')
require('./database')

//Ejecuta el servidor para iniciarlo en el puerto 3000.
async function main(){
   await app.listen(app.get('port'))
   console.log("el servidor se esta ejecutando en el puerto",app.get('port'))
}

main()
