const express = require('express');
const router = express.Router();
const memberController = require('../controllers/routineController');

// Crear una nueva rutina
router.post('/', routineController.createRoutine);

// Obtener todas las rutinas
router.get('/', routineController.getAllRoutines);

// Obtener una rutina por ID
router.get('/:id', routineController.getRoutineById);

// Actualizar una rutina
router.put('/:id', routineController.updateRoutine);

// Eliminar una rutina
router.delete('/:id', routineController.deleteRoutine);

module.exports = router;
