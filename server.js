const express = require('express');
const mongoose = require('mongoose');
const app = express();

// Middleware para parsear JSON
app.use(express.json());

// Conectar a la base de datos
mongoose.connect('mongodb+srv://acvidela:tinchotecla@clustera.hys4b.mongodb.net/gimnasio?retryWrites=true&w=majority&appName=ClusterA', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('Error connecting to MongoDB:', err));

// Rutas (aquí más tarde agregarás tus rutas)
app.get('/', (req, res) => {
  res.send('API is running...');
});

// Escuchar en un puerto
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
