const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');
let products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const controller = {
	index: (req, res) => {
		res.render('index',{products:products, url:"inicio"});
	},
	search: (req, res) => {
		
	},
};

module.exports = controller;