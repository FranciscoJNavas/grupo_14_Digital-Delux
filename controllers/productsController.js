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
		const productFilter = products.find((p) => p.id == req.params.id);
		res.render('products/product-detail',{products:products,productFilter:productFilter});
	},
	edit: (req, res) => {
		const productToEdit = products.find((p) => p.id == req.params.id);
		res.render('products/edicion',{productToEdit:productToEdit});
	},
	upgrade: (req, res) => {
		// hacer la magia
	},
	create: (req, res) => {
		res.render('products/creacion');
	}
};

module.exports = controller;
