const bcrypt = require('bcryptjs');
const { validationResult } = require('express-validator' );
const db = require('../database/models');


const controller = {
	login: (req, res) => {
		res.render('users/login');
	},
	userLogin: (req, res) => {
		db.User
			.findOne({
				where: {email: req.body.email}
			})
			.then(userToLogin => {
				if(userToLogin){
					let passwordOk = bcrypt.compareSync(req.body.password, userToLogin.password);
					if(passwordOk){
						console.log("Accediste");
						req.session.userLogged = userToLogin;
						if(req.body.rememberMe){ //si tengo tildado el recordar usuario creo la cookie sino no
							res.cookie('userEmail', req.body.email , { maxAge: (1000*60*5)})
						}
						return res.redirect('/users/user-profile'); //saludo
					}
				}
				return res.render('users/login', {
					errors: {
						email : {
							msg: "Las credenciales son inválidas"
						}
					}
				})
			})
	},
    register: (req, res) => {
		res.render('users/register');
	},
	newUser: (req, res) => {
		let errors = validationResult(req);
		// console.log(req.file);
		
		if(errors.isEmpty()){
			db.User
			.findOne({
				where: {email: req.body.email}
			})
			.then(userFound => {
				if(!userFound){
					let newUser={
						email: req.body.email,
						password: bcrypt.hashSync(req.body.password, 10),
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
						return res.redirect("/"); //redireccionar a vista de perfil con datos creados
					})
					.catch((error)=>{
						res.send(error);
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
		res.render ("users/user-profile")
	}
};

module.exports = controller;