const Class = require('../models/classModel.js');

// Crear una nueva clase
exports.createClass = async (req, res) => {
    try {
        const newClass = new Class(req.body);
        await newClass.save();
        res.status(201).json(newClass);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Obtener todas las clases
exports.getAllClasses = async (req, res) => {
    try {
        const classes = await Class.find();
        res.json(classes);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Obtener una clase por ID
exports.getClassById = async (req, res) => {
    try {
        const classOne = await Class.findById(req.params.id);
        if (!classOne) return res.status(404).json({ message: 'Clase no encontrada' });
        res.json(classOne);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Actualizar una clase
exports.updateClass = async (req, res) => {
    try {
        const updatedClass = await Class.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedClass) return res.status(404).json({ message: 'Clase no encontrada' });
        res.json(updatedClass);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Eliminar una clase
exports.deleteClass = async (req, res) => {
    try {
        const deletedClass = await Class.findByIdAndDelete(req.params.id);
        if (!deletedClass) return res.status(404).json({ message: 'Clase no encontrada' });
        res.json({ message: 'Clase eliminada' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
