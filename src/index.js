//index

const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv')
const app = express()
const PORT = 8080
const NOMBRE = 'David'

dotenv.config()
app.use(cors())





app.get('/', (req,res)=>{
    res.status(200).json({
        error:false,
        mensaje: 'Estas en la api de ' + nombre
    })
})


app.listen(process.env.PORT, ()=>{
    console.log('Servidor escuchando en puerto ' + 
    PORT + ' del ordenador de ' + NOMBRE);
})