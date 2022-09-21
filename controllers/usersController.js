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
		let errors = validationResult(req);
		console.log(errors.mapped());
		if(errors.isEmpty()){
			// lógica
			users.forEach( user => { 
				if (user.email === req.body.email){
					if (bcrypt.compareSync(req.body.password, user.password)){
						res.redirect('/'); //saludo
						console.log("Accediste");
					}
				}	
			});
			res.render('users/login',{errors: "El usuario y/o la contraseña no son válidas"});
			console.log("Accediste mal");

		} else {
			res.render('users/login',{errors:errors.mapped(), old: req.body});
			console.log("Accediste mal2");
		}
	},
    register: (req, res) => {
		res.render('users/register');
	},
	newUser: (req, res) => {
		// let users = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));
		// console.log("en new");
		// console.log(req.file);
		let errors = validationResult(req);
		if(errors.isEmpty()){
			let newUser={
				id: Date.now(),
				email: req.body.email,
				password: bcrypt.hashSync(req.body.password),
				first_name: req.body.first_name,
				last_name: req.body.last_name,
				image: req.file.filename,
				// cargar imagen por defecto
				dni: req.body.dni,
				date_birth: req.body.date_birth,
			};
			users.push(newUser);
			fs.writeFileSync(usersFilePath,JSON.stringify(users));
			res.redirect("/"); //redireccionar a vista de perfil con datos creados
		} else {
			res.render('users/register',{errors:errors.mapped(), old: req.body});
		}
		// revisar validator, está funcionando crear usuario, agregar funciones para validar los campos.
	}
};

module.exports = controller;