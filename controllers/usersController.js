const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');
let products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const controller = {
	login: (req, res) => {
		res.render('users/login');
	},
    register: (req, res) => {
		res.render('users/register');
	}
};

module.exports = controller;