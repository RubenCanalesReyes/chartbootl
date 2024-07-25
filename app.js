const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const chatbotRoutes = require('./routes/chatbotRoutes'); // Archivo de rutas
const app = express();
const PORT = process.env.PORT || 3000; // Puerto
app.use(bodyParser.json());
app.use(cors());
app.use(express.static('public'));
app.use('/api', chatbotRoutes);
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
