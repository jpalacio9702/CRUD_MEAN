const cors     = require( 'cors' );
const express  = require( 'express' );
const mongoose = require( 'mongoose' );

const auo = require( './routes/auto' );

const app = express();
app.use( cors() );
app.use( express.json() );
app.use( '/api/auto', auto );

const port = process.env.PORT || 3000

app.listen( port, () => {
    console.log( "Ejecutando en el puerto", port );
})

mongoose.connect( "mongodb://localhost/autos", {
    
} )