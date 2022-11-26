const db = require('../../database/models');
const { Op } = require("sequelize");


const productsApiController = {
	productsList: (req, res) => {
		db.Product.findAll({
			include: ['brand', 'category', 'section', 'users']
		})
			.then(products => {
				let respuesta = {
					meta: {
						status: 200,
						total: products.length,
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