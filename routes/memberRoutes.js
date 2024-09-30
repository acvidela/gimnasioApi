const express = require('express');
const router = express.Router();
const memberController = require('../controllers/memberController');

// Crear un nuevo miembro
router.post('/', memberController.createMember);

// Obtener todos los miembros
router.get('/', memberController.getAllMembers);

// Obtener un miembro por ID
router.get('/:id', memberController.getMemberById);

// Actualizar un miembro
router.put('/:id', memberController.updateMember);

// Eliminar un miembro
router.delete('/:id', memberController.deleteMember);

module.exports = router;
