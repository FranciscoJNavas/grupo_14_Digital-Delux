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
		res.render('products/product-detail',{products:products, productFilter:productFilter});
	},
	edit: (req, res) => {
		let products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
		const productToEdit = products.find((p) => p.id == req.params.id);
		res.render('products/edicion',{productToEdit:productToEdit});
	},
	upgrade: (req, res) => {
		let products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

		let productToUpgrade = products.find((p) => p.id == req.params.id);

		//let index = products.indexOf(productToUpgrade);

		//console.log(index);
		productToUpgrade.name = req.body.name;
		productToUpgrade.price = req.body.price;
		productToUpgrade.discount = req.body.discount;
		productToUpgrade.category = req.body.category;
		productToUpgrade.description = req.body.description;
		if(req.file){
			fs.unlinkSync(join(productImagePath, productToUpgrade.image));
			productToUpgrade.image = req.file.filename;
		}
		productToUpgrade.features = req.body.features;
		productToUpgrade.section = req.body.section;3,
		productToUpgrade.brand = req.body.brand;
		/*		console.log(index);
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
		products[index].brand = req.body.brand; */
/* 
let id = req.params.id;
		let productToEdit = products.find(product => product.id == id)
		let image
		if(req.file != undefined){
			image = req.file.filename
		} else {
			image = productToEdit.image
		}

		productToEdit = {
			id: productToEdit.id,
			...req.body,
			image: image,
		};
		
		let newProducts = products.map(product => {
			if (product.id == productToEdit.id) {
				return product = {...productToEdit};
			}
			return product;
		})
*/
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
  			//agregar imagen por defecto si no se carga una imagen
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
