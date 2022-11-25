const bcrypt = require('bcryptjs');
const { validationResult } = require('express-validator' );
const db = require('../database/models');
const { Op } = require("sequelize");


const usersController = {
	login: (req, res) => {
		res.render('users/login');
	},
	userLogin: async (req, res) => {

		try {
			let productList = db.Product.findAll({
				include:  ['brand', 'category', 'section', 'users']
			});
			let foundUser = db.User.findOne({
				where: {email: req.body.email}
			});
			let [userToLogin, productListP] = await Promise.all([foundUser, productList])
				if(userToLogin){
					let passwordOk = bcrypt.compareSync(req.body.password, userToLogin.password);
					if(passwordOk){
						console.log("Accediste");
						req.session.userLogged = userToLogin;
						if(req.body.rememberMe){ //si tengo tildado el recordar usuario creo la cookie sino no
							res.cookie('userEmail', req.body.email , { maxAge: (1000*60*5)})
						}
						let products = productListP.filter(product=>product.users[0].id == userToLogin.id)
						// return res.render('users/user-profile',{products:products});
						return res.redirect('/users/user-profile');
					}
				} else {
					return res.render('users/login', {
						errors: {
							email : {
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
		
		if(errors.isEmpty()){
			db.User
			.findOne({
				where: {email: req.body.email}
			})
			.then(userFound => {
				if(!userFound){
					let newUser={
						email: req.body.email,
						password: bcrypt.hashSync(req.body.repassword, 10),
						first_name: req.body.first_name,
						last_name: req.body.last_name,
						avatar: "default-user.jpg", // cargar imagen por defecto
						dni: req.body.dni,
						date_of_birth: req.body.date_birth,
						role: 1
					};
					if(req.file){
						newUser.avatar = req.file.filename;
					}
					db.User.create(newUser)
					.then((userCreated)=>{
						// return res.send(userCreated);
						req.session.userLogged = userCreated;
						return res.redirect('/users/user-profile');
					})
					.catch((errors)=>{
						res.send(errors);
					});
				}else {
					return res.render('users/register',{errors:{email: {msg: "El usuario ya existe"}}, old: req.body});
				}
			})
		} else {
			return res.render('users/register',{errors:errors.mapped(), old: req.body});
		}
		// revisar validator, está funcionando crear usuario, agregar funciones para validar los campos.
	},
	logout: (req, res) => {
		res.clearCookie('userEmail'); //elimino cookie
		req.session.destroy(); // elimino sesión
		res.redirect('/');
	},

	userProfile:(req,res)=>{
		db.Product.findAll({
			include:  ['brand', 'category', 'section', 'users'],
			where: {"$users.id$": {[Op.like]: req.session.userLogged.id}}
		})
		.then((products)=>{
			return res.render('users/user-profile',{ products:products});
		})
	},

	userEdit: (req, res) => {
		res.render('users/edit');
	},

	userUpdate: (req, res) => {
		//hacer lógica de actualizacion de datos del perfil en BD, luego redireccionar a la vista perfil
		res.send('Hola estoy editando');
	}
};

module.exports = usersController;