const { request, response } = require('express');
const { generarJWT } = require('../helpers/generarjwt.helper');

var base64 = require('base-64');

const login = async (req = request, res = response) => {
    console.log(req.headers)
    try {

        var decode = base64.decode(req.headers.authorization.split(' ')[1]);
        const usuario = decode.split(':')[0];
        const password = decode.split(':')[1];

        const usuarioReal = "usuario";
        const passwordReal = "password";

        if (usuario !== usuarioReal || password !== passwordReal) {
            return res.status(401).json({
                msg: 'Credenciales incorrectas.'
            });
        }

        const token = await generarJWT(usuario, password);


        return res.status(200).json({
            token
        });

    } catch (error) {
        console.log(error);
        return res.status(500).json({
            msg: 'Ocurrió un error interno en el servidor'
        });
    }
}


const validar = async (req = request, res = response) => {
    return res.status(200).json({ msg: 'ok' })

}

module.exports = { login, validar };