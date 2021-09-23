/**
 * Rutas de usuarios 
 * host + /api/colaboradores
 */
const { Router } = require('express');
const { getColaboradores } = require('../controllers/colaboradores');
const router = Router();

router.get('/', getColaboradores)


module.exports = router;