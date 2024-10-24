// Importa el módulo de express
import express from 'express';

// Crea una instancia de la aplicación Express
const app = express();

// Define el puerto
const PORT = 3000;

// Ruta GET que captura el parámetro de la URL
// Solicitud: http://localhost:3000/user/123
app.get('/user/:id', (req, res) => {
  // Captura el parámetro 'id' de la solicitud
  const userId = req.params.id;

  // Muestra el ID en la consola
  console.log(`ID del usuario recibido: ${userId}`);

  // Responde al cliente con un mensaje
  res.send(`Perfil del usuario con ID: ${userId}`);
});

// Inicia el servidor en el puerto 3000
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
