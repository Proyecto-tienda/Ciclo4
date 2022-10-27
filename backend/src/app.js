const express = require('express');
const app = express();
const cors = require('cors')

//Save Variable to using port.
app.set('port', process.env.PORT || 4000 )


module.exports = app