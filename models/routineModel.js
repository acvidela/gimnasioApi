const mongoose = require('mongoose');

const routineSchema = new mongoose.Schema({
    nombre: { 
      type: String,
      required: true 
    },
    descripcion: {
      type: String,
    },
    duracion: {
      type: Number
    },
    nivel: {
      type: String
    },
    ejercicios: [{
        nombre: String,
        series: Number,
        repeticiones: Number,
        peso: Number
    }],
    createdAt: {
      type: Date,
      default: Date.now,
  }
});
      
const Routine = mongoose.model('routine', routineSchema, 'workoutRoutines');
module.exports = Routine;
