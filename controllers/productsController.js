const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');
let products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const controller = {
	cart: (req, res) => {
        console.log("En cart");
		res.render('products/cart');
	},
	detail: (req, res) => {
		res.render('products/product-detail',{products:products});
	},
	edit: (req, res) => {
		res.render('products/edicion');
	},
	create: (req, res) => {
		res.render('products/creacion');
	}
};

module.exports = controller;
