// importar mongoose
const mongoose = require( 'mongoose' );
const esquemaAuto = new mongoose.Schema({
    marca: String,
    modelo: Number,
    color: String,
    precio: Number,
    fechaRegistro: {
        
    }
})