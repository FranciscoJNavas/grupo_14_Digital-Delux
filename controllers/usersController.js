const bcrypt = require('bcryptjs');
const { validationResult } = require('express-validator');
const db = require('../database/models');
const { Op } = require("sequelize");
const fs = require('fs');
const { join } = require('path');
const path = require('path');


const userImagePath = path.join(__dirname, '../public/images/avatars');

const usersController = {
	login: (req, res) => {
		res.render('users/login');
	},
	userLogin: async (req, res) => {

		try {
			let userToLogin = await db.User.findOne({
				where: { email: req.body.email }
			});
			if (userToLogin) {
				let passwordOk = bcrypt.compareSync(req.body.password, userToLogin.password);
				if (passwordOk) {
					console.log("Accediste");
					req.session.userLogged = userToLogin;
					if (req.body.rememberMe) { //si tengo tildado el recordar usuario creo la cookie sino no
						res.cookie('userEmail', req.body.email, { maxAge: (1000 * 60 * 5) })
					}
					return res.redirect('/users/user-profile');
				} else {
				console.log("no accediste")
				return res.render('users/login', {
					errors: {
						email: {
							msg: "Las credenciales son inválidas"
						}
					}
				})
				}
			} else {
				console.log("no accediste")
				return res.render('users/login', {
					errors: {
						email: {
							msg: "Las credenciales son inválidas"
						}
					}
				})
			}
		} catch (error) {
			console.log(error);
		}
	},
	register: (req, res) => {
		res.render('users/register');
	},
	newUser: (req, res) => {
		let errors = validationResult(req);
		console.log(errors);

		if (errors.isEmpty()) {
			db.User.findOne({
				where: { email: req.body.email }
			})
			.then(userFound => {
				if (!userFound) {
					let newUser = {
						email: req.body.email,
						password: bcrypt.hashSync(req.body.repassword, 10),
						first_name: req.body.first_name,
						last_name: req.body.last_name,
						avatar: "default-user.jpg", // cargar imagen por defecto
						dni: req.body.dni,
						date_of_birth: req.body.date_birth,
						role: 1
					};
					if (req.file) {
						newUser.avatar = req.file.filename;
					}
					db.User.create(newUser)
					.then((userCreated) => {
						// return res.send(userCreated);
						req.session.userLogged = userCreated;
						return res.redirect('/users/user-profile');
					})
					.catch((errors) => {
						res.send(errors);
					});
				} else {
					return res.render('users/register', { errors: { email: { msg: "El usuario ya existe" } }, old: req.body });
				}
			})
		} else {
			return res.render('users/register', { errors: errors.mapped(), old: req.body });
		}
		// revisar validator, está funcionando crear usuario, agregar funciones para validar los campos.
	},
	logout: (req, res) => {
		res.clearCookie('userEmail'); //elimino cookie
		req.session.destroy(); // elimino sesión
		res.redirect('/');
	},

	userProfile: (req, res) => {
		db.Product.findAll({
			include: ['brand', 'category', 'section', 'users'],
			where: { "$users.id$": { [Op.like]: req.session.userLogged.id } }
		})
			.then((products) => {
				return res.render('users/user-profile', { products: products });
			})
	},

	userEdit: (req, res) => {
		res.render('users/edit');
	},

	userUpdate: (req, res) => {
		let errors = validationResult(req);
		// console.log(req.session.userLogged);
		let userId = req.session.userLogged.id;

		if (errors.isEmpty()) {
			let userToUpdate = {
				first_name: req.body.first_name,
				last_name: req.body.last_name,
				dni: req.body.dni,
				date_of_birth: req.body.date_birth
			};
			if (req.file) {
				userToUpdate.avatar = req.file.filename;
				// borrar avatar anterior si no era la imagen por defecto
				if(!(req.session.userLogged.avatar == "default-user.jpg")){
					fs.unlinkSync(join(userImagePath, req.session.userLogged.avatar));
				}
			}
			db.User.update(userToUpdate, 
				{
					where: { id: userId },
			})
			.then( () => {
				db.User.findByPk(userId)
				.then((userEdited) => {
					// console.log(userEdited.dataValues);
					req.session.userLogged = userEdited.dataValues;
					return res.redirect('/users/user-profile');
				})
			})
			.catch((errors) => {
				res.send("No se pudo editar el usuario");
			});
		} else {
			return res.render('users/edit', { errors: errors.mapped(), old: req.body });
		}
	}
};

module.exports = usersController;