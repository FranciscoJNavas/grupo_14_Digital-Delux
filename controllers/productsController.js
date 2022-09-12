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
	},
	newProduct: (req, res) => {
		console.log("en new");
		console.log(req.body);
		let newProduct={
			id: 44,
  			name: req.body.name,
  			price: req.body.price,
  			discount: req.body.discount,
  			category: req.body.category,
  			description: req.body.description,
  			image: "img-cafetera-moulinex.jpg",
  			features:req.body.features,
  			vendor:"",
  			section: req.body.section,
  			brand: req.body.brand,
  			visited:""
		};
		products.push(newProduct);
		fs.writeFileSync(productsFilePath,JSON.stringify(products));
		res.redirect('/');
	},
	products: (req, res) => {
		let productsToShow = products.filter((product) => product.section == req.query.section)
		res.render('index',{products: productsToShow, url:"navbar"});
	}
};

module.exports = controller;
