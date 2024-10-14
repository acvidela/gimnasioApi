const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const classSchema = new Schema({
  nombre: { type: String, required: true },
  nivel: { type: String, enum: ['Principiante', 'Intermedio', 'Avanzado'], required: true },
  entrenador: { type: String, required: true },
  duracion: { type: Number, required: true }, // Duración en minutos
  horarios: [
    {
      dia: { type: String, required: true }, // Ejemplo: Lunes
      hora: { type: String, required: true }, // Ejemplo: "18:00"
    }
  ],
  miembros: [
    {
      type: Schema.Types.ObjectId, // Referencia a los miembros en la colección de miembros
      ref: 'Member'
    }
  ],
  cupos_disponibles: { type: Number, required: true },
  activa: { type: Boolean, default: true } // Clases activas o inactivas
});

// Creamos el modelo
const Class = mongoose.model('Class', classSchema);

module.exports = Class;
