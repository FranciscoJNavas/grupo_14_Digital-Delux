const db = require('../../database/models');
const { Op } = require("sequelize");


const productsApiController = {
	productsList: (req, res) => {
		console.log(req.query.limit,req.query.offset);
		let limit = (req.query.limit==undefined) ? 200 : Number(req.query.limit);
		let offset = (req.query.offset==undefined) ? 0 : Number(req.query.offset);
		let countByCategory = {};
		let totalCategories = 0;
		db.Category.findAll()
			.then(categories => {
				totalCategories = categories.length;
				categories.forEach(category => {
					countByCategory[category.dataValues.name] = 0;
				});
			})

		db.Product.findAll({
			include: ['brand', 'category', 'section', 'users'],
			limit: limit,
			offset: offset
		})
			.then(products => {
				products.forEach(product => {
					for (const key in countByCategory) {
						if (product.category.name == key) {
							countByCategory[key] += 1;
						}
					}
				})
				let respuesta = {
					meta: {
						status: 200,
						total: products.length,
						totalCategories: totalCategories,
						countByCategory: countByCategory,
						url: '/api/products'
					},
					data: products
				}
				res.json(respuesta);
			});
	},
	oneProduct: (req, res) => {
		db.Product.findByPk(req.params.id, {
			include: ['brand', 'category', 'section', 'users']
		})
			.then(product => {
				let respuesta = {
					data: product
				}
				res.json(respuesta);
			});
	}
};

module.exports = productsApiController;