const { request, response } = require('express');
const jwt = require('jsonwebtoken');

const validarJWT = (req = request, res = response, next) => {

    const token = req.headers.authorization.split(' ')[1];

    console.log(token);

    if (!token) {
        return res.status(401).json({
            msg: "No hay token en la petición"
        })
    }

    try {
        const { IdUsuario } = jwt.verify(token, process.env.APIKEYPRUEBA);
        req.idusuario = IdUsuario;
        next();
    } catch (error) {
        // console.log(error);
        res.status(401).json({
            msg: 'Token no válido'
        })
    }


}

module.exports = {
    validarJWT
}