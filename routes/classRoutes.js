const express = require('express');
const router = express.Router();
const classController = require('../controllers/classController');

// Crear una nueva clase
router.post('/', classController.createClass);

// Obtener todas las clases
router.get('/', classController.getAllClasses);

// Obtener una clase por ID
router.get('/:id', classController.getClassById);

// Actualizar una clase
router.put('/:id', classController.updateClass);

// Eliminar una clase
router.delete('/:id', classController.deleteClass);

module.exports = router;
