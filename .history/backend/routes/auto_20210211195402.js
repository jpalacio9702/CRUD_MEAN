const express = require( 'express' );
const router  = express.Router();

const Auto = require( '../model/auto' );

router.get( '/lista')