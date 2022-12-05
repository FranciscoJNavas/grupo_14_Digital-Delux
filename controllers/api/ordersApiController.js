const db = require('../../database/models');
const { Op } = require("sequelize");


const ordersApiController = {
	ordersList: (req, res) => {
		db.Order.findAll({
			include: ['orderItems', 'user']
		})
			.then(orders => {
				let respuesta = {
					meta: {
						status: 200,
						totalOrders: orders.length,
						url: '/api/orders'
					},
					data: orders
				}
				res.json(respuesta);
			});
	},
	orderByuser: (req, res) => {
		db.Order.findAll({
			include: ['orderItems', 'user'],
			where: { "$userId$": { [Op.like]: req.params.id } }
		})
			.then(orders => {
				let respuesta = {
					meta: {
						status: 200,
						totalOrders: orders.length,
						url: '/api/orders/userId'
					},
					data: orders
				}
				res.json(respuesta);
			})
	},
	orderLoad: async (req, res) => {
		// res.json({order:req.body});
		let order = await db.Order.create(
			{ ... req.body, userId: req.session.userLogged.id },
			{ include: ['orderItems'] }
		);
		res.json({ok:true, status: 200, order:order});
	}
};

module.exports = ordersApiController;