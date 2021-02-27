// importar mongoose
const mongoose    = require( 'mongoose' );

const cors     = require( 'cors' );
const express  = require( 'express' );

const esquemaAuto = new mongoose.Schema({
    marca: String,
    modelo: Number,
    color: String,
    precio: Number,
    fechaRegistro: {
        type: Date,
        default: Date.now
    }
})

// creamos el exports
const Auto = mongoose.model( 'auto', esquemaAuto );
module.exports = Auto;