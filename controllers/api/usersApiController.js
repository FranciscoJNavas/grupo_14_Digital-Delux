const db = require('../../database/models');
const { Op } = require("sequelize");


const usersApiController = {
	usersList: (req, res) => {
		console.log("Estoy en usersList");
	}
};

module.exports = usersApiController;