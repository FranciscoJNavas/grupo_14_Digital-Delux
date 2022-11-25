const db = require('../../database/models');
const { Op } = require("sequelize");


const productsApiController = {
	productsList: (req, res) => {
		console.log("Estoy en productsList");
	}
};

module.exports = productsApiController;