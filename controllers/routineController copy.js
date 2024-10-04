const Member = require('../models/routineModel.js');

// Crear una nueva rutina
exports.createRoutine = async (req, res) => {
    try {
        const newRoutiner = new Routine(req.body);
        await newRoutine.save();
        res.status(201).json(newMRoutine);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Obtener todas las rutinas
exports.getAllRoutines = async (req, res) => {
    try {
        const routines = await Routine.find();
        res.json(routines);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Obtener una rutina por ID
exports.getRoutineById = async (req, res) => {
    try {
        const routine = await Routine.findById(req.params.id);
        if (!routine) return res.status(404).json({ message: 'Rutina no encontrada' });
        res.json(routine);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Actualizar una rutina
exports.updateRoutine = async (req, res) => {
    try {
        const updatedRoutine = await Routine.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedRoutine) return res.status(404).json({ message: 'Rutina no encontrada' });
        res.json(updatedRoutine);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Eliminar una rutina
exports.deleteRoutine = async (req, res) => {
    try {
        const deletedRoutine = await Routine.findByIdAndDelete(req.params.id);
        if (!deletedRoutine) return res.status(404).json({ message: 'Rutina no encontrada' });
        res.json({ message: 'Rutina eliminada' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
