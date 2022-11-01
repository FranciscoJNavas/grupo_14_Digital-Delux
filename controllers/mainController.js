const fs = require('fs');
const path = require('path');
const db = require('../database/models');
const sequelize = db.sequelize;
const { Op } = require("sequelize");
const moment = require('moment');


const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');
let products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const controller = {
	index: (req, res) => {
		let promProducts = db.Product.findAll({
			include:  ['brand', 'category', 'section', 'users']
		});
		Promise.all([promProducts])
		.then(products =>{
			//return res.send(products[0]);
			res.render('index',{ products :products[0], url:"inicio" });
		})
		// products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
	},
	search: (req, res) => {
		
	},
	list: (req, res) => {
		db.Product.findAll({
			include:  ['brand', 'category', 'section', 'users']
		})
		.then((products)=>{
			return res.render('index',{ products :products, url:"list" });
			// res.send(response);
		})
	}
};

module.exports = controller;