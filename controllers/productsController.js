const fs = require('fs');
const { join } = require('path');
const path = require('path');
const db = require('../database/models');
const { Op } = require("sequelize");
const moment = require('moment');
const { validationResult } = require('express-validator' );
const { URLSearchParams } = require('url');;


const userImagePath = path.join(__dirname, '../public/images/avatars');

const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');
const productImagePath = path.join(__dirname, '../public/images/products');
let products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const productsController = {
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
		let errors = validationResult(req);
		let imageToUpgrade = "";

		db.Product.findByPk(productId)
		.then((productToEdit)=>{
			console.log(productToEdit);
			imageToUpgrade = productToEdit.dataValues.image;
	
			if(errors.isEmpty()){
	
				let productToUpgrade = {
					name: req.body.name,
					price: req.body.price,
					discount: req.body.discount,
					category_id: req.body.category,
					description: req.body.description,
					features: req.body.features,
					section_of_site_id: req.body.section,
					brand_id: req.body.brand
				  };
				if(req.file){
					fs.unlinkSync(join(productImagePath, imageToUpgrade));
					productToUpgrade.image = req.file.filename;
				}
				db.Product.update(productToUpgrade, 
					{	
						where: {id: productId},
				})
				.then(()=>{
	
					let promProducts = db.Product.findAll({
						include: ['brand', 'category', 'section', 'users']
					});
		
					let promProductFilter = db.Product.findByPk(productId, {
						include: ['brand', 'category', 'section', 'users']
					});
					Promise.all([promProducts, promProductFilter])
					.then(([products, productFilter]) => {
						
						// return res.send(productFilter.users[0]);
						return res.render('products/product-detail',{products:products, productFilter:productFilter});
					})
				})
				.catch((error)=>{
					res.send(error);
				});
			} else {
				let promProductToEdit = db.Product.findByPk(req.params.id, {
					include: ['brand', 'category', 'section', 'users']
				})
				let promBrands = db.Brand.findAll();
				let promCategory = db.Category.findAll();
				let promSection = db.Section.findAll();
				Promise.all([promProductToEdit, promBrands, promCategory, promSection])
				.then(([productToEdit, brands, categories, sections])=>{
					//return res.send(brands);
					return res.render('products/edicion',{productToEdit:productToEdit, brands, categories, sections, errors:errors.mapped(), old: req.body});
				})
			}		
		})

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

		let errors = validationResult(req);
		
		if(errors.isEmpty()){

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
  			//agregar imagen por defecto
			image: "default-product-image.png",
  			features: req.body.features,
  			section_of_site_id: req.body.section,
  			brand_id: req.body.brand
		};
		if(req.file){
			// si existe un archivo de imagen, cargarlo al nuevo producto
			newProduct.image = req.files['imageProduct'][0].filename;
		}

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
		} else {
			let promBrands = db.Brand.findAll();
			let promCategory = db.Category.findAll();
			let promSection = db.Section.findAll();
			Promise.all([promBrands, promCategory, promSection])
			.then(([brands, categories, sections])=>{
				res.render('products/creacion', {brands, categories, sections, errors:errors.mapped(), old: req.body});
			})
	
		}
	},
	products: (req, res) => {

		let querySearch;
		let toSearch;
		if(req.body.q){
			querySearch = "name";
			toSearch = req.body.q;
		} else if (req.query.section){
			querySearch = "$category.name$";
			toSearch = req.query.section;
		}
		
		db.Product.findAll({
			include: ['brand', 'category', 'section', 'users'],
			where: { 
				[querySearch]: {[Op.like]: '%'+toSearch+'%'}
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
			let promProducts = db.Product.findAll({
				include:  ['brand', 'category', 'section', 'users']
			});
			Promise.all([promProducts])
			.then(products =>{
				//return res.send(products[0]);
				res.render('index',{ products :products[0], url:"inicio" });
			})

		})
		.catch((error)=>{
			res.send(error);
		});

	} 
};

module.exports = productsController;
