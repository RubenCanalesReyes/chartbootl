// const express = require('express');
// const router = express.Router();
// const {getUniversityInfo, getCareersInfo, getSalesInfo} = require('../controllers/chatbotController');


// router.get('/university', getUniversityInfo);
// router.get('/careers', getCareersInfo);
// router.get('/sales', getSalesInfo);
// module.exports = router;


const express = require('express');
const router = express.Router();
const {
    getUniversityInfoController,
    getSalesInfoController,
    getCareersInfoController
} = require('../controllers/chatbotController');

// Rutas correctamente definidas
router.get('/informacion', getUniversityInfoController);
router.get('/ventas', getSalesInfoController);
router.get('/carreras', getCareersInfoController);

router.post('/chatbot', async (req, res) => {
    const { message } = req.body;

    try {
        if (message.toLowerCase().includes('información')) {
            const info = await getUniversityInfoController(req, res);
            res.json({ response: 'Aquí está la información de la universidad: ' + JSON.stringify(info) });
        } else if (message.toLowerCase().includes('ventas')) {
            const info = await getSalesInfoController(req, res);
            res.json({ response: 'Aquí está la información de ventas: ' + JSON.stringify(info) });
        } else if (message.toLowerCase().includes('carreras')) {
            const info = await getCareersInfoController(req, res);
            res.json({ response: 'Aquí están las carreras disponibles: ' + JSON.stringify(info) });
        } else {
            res.json({ response: 'Lo siento, no entendí tu mensaje.' });
        }
    } catch (error) {
        console.error('Error al manejar el mensaje del chatbot:', error);
        res.status(500).json({ response: 'Error al manejar tu mensaje.' });
    }
});

module.exports = router;
