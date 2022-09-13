const fs = require('fs');
const { join } = require('path');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');
const productImagePath = path.join(__dirname, '../public/images');
let products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const controller = {
	cart: (req, res) => {
        // console.log("En cart");
		res.render('products/cart');
	},
	detail: (req, res) => {
		let products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
		const productFilter = products.find((p) => p.id == req.params.id);
		res.render('products/product-detail',{producto:products,productFilter:productFilter});
	},
	edit: (req, res) => {
		let products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
		const productToEdit = products.find((p) => p.id == req.params.id);
		res.render('products/edicion',{productToEdit:productToEdit});
	},
	upgrade: (req, res) => {
		let products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

		let productToUpgrade = products.find((p) => p.id == req.params.id);

		let index = products.indexOf(productToUpgrade);

		console.log(index);
		products[index].name = req.body.name;
		products[index].price = req.body.price;
		products[index].discount = req.body.discount;
		products[index].category = req.body.category;
		products[index].description = req.body.description;
		if(req.file){
			fs.unlinkSync(join(productImagePath, products[index].image));
			products[index].image = req.file.filename;
		}
		products[index].features = req.body.features;
		products[index].section = req.body.section;
		products[index].brand = req.body.brand;

		fs.writeFileSync(productsFilePath,JSON.stringify(products));
		res.redirect("/");
	},
	create: (req, res) => {
		let products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
		res.render('products/creacion');
	},
	newProduct: (req, res) => {
		let products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
		// console.log("en new");
		console.log(req.file);
		let newProduct={
			id: Date.now(),
  			name: req.body.name,
  			price: req.body.price,
  			discount: req.body.discount,
  			category: req.body.category,
  			description: req.body.description,
  			image: req.file.filename,
  			features:req.body.features,
  			vendor:"",
  			section: req.body.section,
  			brand: req.body.brand,
  			visited:""
		};
		products.push(newProduct);
		fs.writeFileSync(productsFilePath,JSON.stringify(products));
		res.redirect("/");
	},
	products: (req, res) => {
		let products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
		let productsToShow = products.filter((product) => product.section == req.query.section)

		res.render('index',{products: productsToShow, url:"navbar"});
	},
	delete: (req,res)=>{
		
		let productToDelete = products.find (p => p.id == req.params.id);
		
		const productResult = products.filter((p) => p.id != req.params.id);
		fs.writeFileSync(productsFilePath,JSON.stringify(productResult));
		
		products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
		//borrar foto
		fs.unlinkSync(join(productImagePath, productToDelete.image));

		res.redirect("/");
	} 
};

module.exports = controller;
