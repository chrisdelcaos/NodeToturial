'use strict';

const jwt = require('jwt-simple'); //jason web token
const moment = require('moment'); //libreria para manejar fechas ;)
const config = require('../config');

function createToken(user) {
    const payload = {
        sub: user._id,
        iat: moment().unix(), //tiempo en formato unix
        exp: moment().add(14, 'days').unix() 
    }

    return jwt.encode(payload, config.SECRET_TOKEN);
}

module.exports = createToken;