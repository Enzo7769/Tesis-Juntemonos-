const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Sirve los archivos estáticos de la aplicación React desde el directorio 'public'
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.send('¡Hola, mundo!');
});

// Añadir otras rutas aquí

app.listen(PORT, () => {
  console.log(`Servidor está corriendo en el puerto ${PORT}`);
});