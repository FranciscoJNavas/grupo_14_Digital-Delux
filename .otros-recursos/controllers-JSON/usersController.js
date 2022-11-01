const fs = require('fs');
const path = require('path');
const bcrypt = require('bcryptjs');
const { validationResult } = require('express-validator' );

const usersFilePath = path.join(__dirname, '../data/usersDataBase.json');
let users = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));

const controller = {
	login: (req, res) => {
		res.render('users/login');
	},
	userLogin: (req, res) => {
		let userToLogin = users.find( user => user.email === req.body.email);
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
	},
    register: (req, res) => {
		res.render('users/register');
	},
	newUser: (req, res) => {
		let errors = validationResult(req);
		console.log(req.file);
		
		if(errors.isEmpty()){
			let userFound = users.find( user => user.email === req.body.email);
			if(!userFound){
				let newUser={
					id: Date.now(),
					email: req.body.email,
					password: bcrypt.hashSync(req.body.password, 10),
					first_name: req.body.first_name,
					last_name: req.body.last_name,
					image: "default-user.jpg", // cargar imagen por defecto
					dni: req.body.dni,
					date_birth: req.body.date_birth,
				};
				if(req.file){
					newUser.image = req.file.filename;
				}
				users.push(newUser);
				fs.writeFileSync(usersFilePath,JSON.stringify(users, null, ' '));
				return res.redirect("/"); //redireccionar a vista de perfil con datos creados
			}else {
				return res.render('users/register',{errors:{email: {msg: "El usuario ya existe"}}, old: req.body});
			}
			
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