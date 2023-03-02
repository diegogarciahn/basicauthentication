const jwt = require('jsonwebtoken');

const generarJWT = (usuario = '', password = '') => {

    return new Promise((resolve, reject) => {

        const payload = { usuario, password };

        jwt.sign(payload, process.env.APIKEYPRUEBA, {
            expiresIn: '30000'
        }, (err, token) => {
            if (err) {
                console.log(err);
                reject('No se pudo generar el token')
            } else {
                resolve(token);
            }
        });


    })
}

module.exports = {
    generarJWT
}