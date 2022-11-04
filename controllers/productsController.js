const fs = require('fs');
const { join } = require('path');
const path = require('path');
const db = require('../database/models');
const { Op } = require("sequelize");
const moment = require('moment');

const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');
const productImagePath = path.join(__dirname, '../public/images');
let products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const controller = {
	cart: (req, res) => {
        // console.log("En cart");
		res.render('products/cart');
	},
	detail: (req, res) => {

		let promProducts = db.Product.findAll({
			include: ['brand', 'category', 'section', 'users']
		});
		let promProductFilter = db.Product.findByPk(req.params.id, {
			include: ['brand', 'category', 'section', 'users']
		});
		Promise.all([promProducts, promProductFilter])
		.then(([products, productFilter]) => {
			// return res.send(productFilter.users[0]);
			return res.render('products/product-detail',{products:products, productFilter:productFilter});
		})
		.catch((error)=>{
			res.send(error);
		});
	},
	edit: (req, res) => {
		let promProductToEdit = db.Product.findByPk(req.params.id, {
			include: ['brand', 'category', 'section', 'users']
		})
		let promBrands = db.Brand.findAll();
		let promCategory = db.Category.findAll();
		let promSection = db.Section.findAll();
		Promise.all([promProductToEdit, promBrands, promCategory, promSection])
		.then(([productToEdit, brands, categories, sections])=>{
			//return res.send(brands);
			return res.render('products/edicion',{productToEdit:productToEdit, brands, categories, sections});
		})

	},
	upgrade: (req, res) => {
		let productId = req.params.id;

		let productToUpgrade = {
			name: req.body.name,
			price: req.body.price,
			discount: req.body.discount,
			category_id: req.body.category,
			description: req.body.description,
			//agregar imagen por defecto si no se carga una imagen
		  	image: req.file.filename,
			features: req.body.features,
			section_of_site_id: req.body.section,
			brand_id: req.body.brand
	  	};
		// if(req.file){
		// 	fs.unlinkSync(join(productImagePath, productToUpgrade.image));
		// 	productToUpgrade.image = req.file.filename;
		// }

		db.Product.update(productToUpgrade, 
			{
				where: {id: productId}
			})
		.then((showProduct)=>{
			return res.send(showProduct);
		})
		.catch((error)=>{
			res.send(error);
		});
				
		
	},
	create: (req, res) => {
		let promBrands = db.Brand.findAll();
		let promCategory = db.Category.findAll();
		let promSection = db.Section.findAll();
		Promise.all([promBrands, promCategory, promSection])
		.then(([brands, categories, sections])=>{
			//return res.send(brands);
			res.render('products/creacion', {brands, categories, sections});
		})
	},
	newProduct: (req, res) => {
		// let imagesNameArray = [];
		// req.files['imagesMini'].forEach( image => {
		// 	imagesNameArray.push(image.filename)
		// });
		let newProduct={
  			name: req.body.name,
  			price: req.body.price,
  			discount: req.body.discount,
  			category_id: req.body.category,
  			description: req.body.description,
  			//agregar imagen por defecto si no se carga una imagen
			image: req.files['imageProduct'][0].filename,
  			features: req.body.features,
  			section_of_site_id: req.body.section,
  			brand_id: req.body.brand
		};
		db.Product.create(newProduct)
			.then((product)=>{
				db.UserProduct.create({
					user_id: req.session.userLogged.id,
					product_id: product.dataValues.id
				}) // se crea la relación entre usuario y producto
				return product;
			})
			.then((showProduct)=>{
				return res.send(showProduct);
			})
			.catch((error)=>{
				res.send(error);
			});
	},
	products: (req, res) => {
		//let products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
		//let productsToShow = products.filter((product) => product.section == req.query.section)
		db.Product.findAll({
			include: ['brand', 'category', 'section', 'users'],
			where: { 
				//id : 1
				"$category.name$": {[Op.like]: '%'+req.query.section+'%'}
				//category: {}
				// category: {[Op.like]: '%'+req.query.section+'%'}
			 }
		})
		.then(productsToShow => {
			//return res.send(product);
			res.render('index',{products: productsToShow, url:"navbar"});

		})
	},
	delete: (req,res)=>{
		
		let productId = req.params.id;
		
		db.UserProduct.destroy({
			where: {product_id: productId} // Se elimina primero la relación con tabla pivot.
		})
		.then(()=>{
			db.Product.destroy({
				where: {id: productId} // Elimino el producto
			})

		})
		.then(()=>{
			res.redirect("/");

		})
		.catch((error)=>{
			res.send(error);
		});

	} 
};

module.exports = controller;
