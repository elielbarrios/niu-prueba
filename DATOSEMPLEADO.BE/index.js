const express = require('express');
const cors = require('cors')
require('dotenv').config();

// Crea el servidor de express
const app = express();

//CORS
app.use(cors());

// Lectura y parseo del body
app.use( express.json() )

//rutas
app.use('/api/colaboradores', require('./routes/colaboradores'));


//Escuchar peticiones
app.listen(process.env.PORT, ()=>{
    console.log(`Server in port ${process.env.PORT}` );
})



