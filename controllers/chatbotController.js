const { getUniversityInfo, getSalesInfo, getCareersInfo } = require('../models/chatbotModel');

const getUniversityInfoController = async (req, res) => {
    try {
        const info = await getUniversityInfo();
        res.json(info);
    } catch (error) {
        console.error('Error al obtener la información de la universidad:', error);
        res.status(500).json({ error: 'Error al obtener la información de la universidad' });
    }
};

const getSalesInfoController = async (req, res) => {
    try {
        const info = await getSalesInfo();
        res.json(info);
    } catch (error) {
        console.error('Error al obtener la información de ventas:', error);
        res.status(500).json({ error: 'Error al obtener la información de ventas' });
    }
};

const getCareersInfoController = async (req, res) => {
    try {
        console.log('Obteniendo información de carreras');
        const info = await getCareersInfo();
        console.log('Información de carreras obtenida:', info);
        res.json(info);
    } catch (error) {
        console.error('Error al obtener las carreras:', error);
        res.status(500).json({ error: 'Error al obtener las carreras' });
    }
};

module.exports = {
    getUniversityInfoController,
    getSalesInfoController,
    getCareersInfoController
};
