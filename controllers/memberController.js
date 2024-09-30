const Member = require('../models/memberModel.js');

// Crear un nuevo miembro
exports.createMember = async (req, res) => {
    try {
        const newMember = new Member(req.body);
        await newMember.save();
        res.status(201).json(newMember);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Obtener todos los miembros
exports.getAllMembers = async (req, res) => {
    try {
        const members = await Member.find();
        res.json(members);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Obtener un miembro por ID
exports.getMemberById = async (req, res) => {
    try {
        const member = await Member.findById(req.params.id);
        if (!member) return res.status(404).json({ message: 'Miembro no encontrado' });
        res.json(member);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Actualizar un miembro
exports.updateMember = async (req, res) => {
    try {
        const updatedMember = await Member.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedMember) return res.status(404).json({ message: 'Miembro no encontrado' });
        res.json(updatedMember);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Eliminar un miembro
exports.deleteMember = async (req, res) => {
    try {
        const deletedMember = await Member.findByIdAndDelete(req.params.id);
        if (!deletedMember) return res.status(404).json({ message: 'Miembro no encontrado' });
        res.json({ message: 'Miembro eliminado' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
