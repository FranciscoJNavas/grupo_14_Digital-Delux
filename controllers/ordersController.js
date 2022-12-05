const db = require('../database/models');
const { Op } = require("sequelize");

const ordersController = {
	order: (req, res) => {
		db.Order.findByPk(req.params.id,{
			include: ['orderItems']
		})
				.then((order) => {
					// console.log("Mostrando",order.dataValues.orderItems.length);
					return res.render('orders/order', { order });
				})
	}
};

module.exports = ordersController;