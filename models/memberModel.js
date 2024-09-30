const mongoose = require('mongoose');

const memberSchema = new mongoose.Schema({
  nombre: {
    type: String,
    required: true,
  },
  apellido: {
    type: String,
    required: true,
  },
  fecha_nacimiento: {
    type: Date,  
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  membresia: {
    tipo: {
        type: String
    },
    fecha_inicio: {
        type: Date
    },
    fecha_fin: {
        type: Date
    },
    estado: {
        type: String,
        required: true
    }
  },
  rutinas: [
    {
      nombre: {
        type: String,
        required: true,
      },
      ejercicios: [
        {
          nombre: String,
          series: Number,
          repeticiones: Number,
          peso: Number,
        },
      ],
    },
  ],
  createdAt: {
    type: Date,
    default: Date.now,
}
});

const Member = mongoose.model('member', memberSchema);
module.exports = Member;
