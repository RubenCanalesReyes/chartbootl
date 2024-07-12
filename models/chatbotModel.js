const sequelize = require('../config/database');
const { QueryTypes } = require('sequelize');
const getUniversityInfo = async () => {
    try {
        const info = await sequelize.query('SELECT * FROM informacion_universidad LIMIT 1', {
            type: QueryTypes.SELECT
        });
        return info[0];
    } catch (error) {
        console.error('Error al obtener la información de la universidad:', error);
        throw error;
    }
};
const getSalesInfo = async () => {
    try {
        const info = await sequelize.query('SELECT * FROM informacion_ventas LIMIT 1', {
            type: QueryTypes.SELECT
        });
        return info[0];
    } catch (error) {
        console.error('Error al obtener la información de ventas:', error);
        throw error;
    }
};
const getCareersInfo = async () => {
    try {
        console.log('Ejecutando consulta SQL para obtener información de carreras');
        const info = await sequelize.query('SELECT * FROM carreras', {
            type: QueryTypes.SELECT
        });
        console.log('Resultado de la consulta SQL:', info);
        return info;
    } catch (error) {
        console.error('Error al obtener las carreras:', error);
        throw error;
    }
};
module.exports = {
    getUniversityInfo,
    getSalesInfo,
    getCareersInfo
};
