// Importa el módulo de express
import express from 'express';

// Crea una instancia de la aplicación Express
const app = express();

// Define el puerto
const PORT = 3000;

// Ruta GET que captura el parámetro de consulta 'edad'
// Solicitud: http://localhost:3000/profile?edad=30
app.get('/profile', (req, res) => {
  // Captura el parámetro de consulta 'edad'
  const edad = req.query.edad;

  // Muestra la edad en la consola
  console.log(`Edad recibida: ${edad}`);

  // Responde al cliente con el valor de la edad
  res.send(`Edad del perfil: ${edad}`);
});

// Inicia el servidor en el puerto 3000
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
