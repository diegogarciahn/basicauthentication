'Ruta: /api/auth';
const { Router } = require('express');
const {login, validar} = require('../controllers/auth.controller');
const { validarJWT } = require('../middlewares/validarjwt.middleware');

const router = Router();

router.post('/', login);
router.get('/', validarJWT, validar);

module.exports = router;