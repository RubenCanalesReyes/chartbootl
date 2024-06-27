// const express = require('express');
// const bodyParser = require('body-parser');
// const chatbotRoutes = require('./routes/chatbotRoutes');
// const mysql2 = require('mysql2');

// require('dotenv').config();

// const app = express();


// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());

// app.use('/api', chatbotRoutes);

// // Serve static files from the public directory
// app.use(express.static('public'));

// const PORT = process.env.PORT || 3000;
// app.listen(PORT, () => {
//   console.log(`Servidor corriendo en el puerto ${PORT}`);
// });

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const chatbotRoutes = require('./routes/chatbotRoutes'); // Ruta correcta al archivo de rutas
const app = express();
const PORT = process.env.PORT || 3000; // Definición correcta del puerto

app.use(bodyParser.json());
app.use(cors());
app.use(express.static('public'));

app.use('/api', chatbotRoutes);

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
