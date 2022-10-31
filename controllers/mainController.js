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
		products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
		res.render('index',{ products :products, url:"inicio" });
	},
	search: (req, res) => {
		
	},
	list: (req, res) => {
		db.User.findByPk(1, {
			include: ['products']
		})
		.then((response)=>{
			res.send(response);
		})
	}
};

module.exports = controller;