const { getUniversityInfo, getSalesInfo, getCareersInfo } = require('../models/chatbotModel');

const chatbotController = async (req, res) => {
    const { message } = req.body;

    let response;

    if (message === '1' || message.toLowerCase() === 'información') {
        const info = await getUniversityInfo();
        response = `
            <strong>Ubicación:</strong> ${info.ubicacion}<br>
            <strong>Historia:</strong> ${info.historia}<br>
            <strong>Costos:</strong> ${info.costos}<br>
            <strong>Plan de estudios:</strong> ${info.plan_estudios}<br>
            <strong>Galería de fotos:</strong> <a href="${info.galeria_fotos}" target="_blank">${info.galeria_fotos}</a><br>
            <strong>Duración:</strong> ${info.duracion}<br>
            <strong>Foros:</strong> <a href="${info.foros}" target="_blank">${info.foros}</a><br>
            <strong>Actividades extracurriculares:</strong> <a href="${info.actividades_extracurriculares}" target="_blank">${info.actividades_extracurriculares}</a><br>
            <strong>Aulas seguras:</strong> ${info.aulas_seguras}
        `;
    } else if (message === '2' || message.toLowerCase() === 'hablar con ventas') {
        const info = await getSalesInfo();
        response = `<strong>Número de teléfono de la universidad:</strong><a href="${info.telefono}" target="_blank"> ${info.telefono}</a>`;
    } else if (message === '3' || message.toLowerCase() === 'ver carreras') {
        const carreras = await getCareersInfo();
        response = '<strong>Carreras que ofrece la universidad:</strong><br>';
        carreras.forEach(carrera => {
            response += `
                <strong>${carrera.nombre}</strong><br>
                <strong>Descripción:</strong> ${carrera.descripcion}<br>
                <strong>Plan de estudios:</strong> <a href="${carrera.plan_estudios}" target="_blank">${carrera.plan_estudios}</a><br>
                <strong>Costos:</strong> ${carrera.costos}<br>
                <strong>Galería de fotos:</strong> <a href="${carrera.galeria_fotos}" target="_blank">${carrera.galeria_fotos}</a><br>
                <br> <!-- Salto de línea entre cada carrera -->
            `;
        });
    } else {
        response = '<p>Lo siento, no entiendo tu solicitud. Por favor, intenta elegir una de las opciones: "1", "2" o "3"</p>';
    }

    // Configura la cabecera de la respuesta para enviar HTML
    res.setHeader('Content-Type', 'text/html');
    res.send(response);
};

module.exports = {
    chatbotController
};





