const db = require('../../database/models');
const { Op } = require("sequelize");


const usersApiController = {
	usersList: (req, res) => {
        db.User.findAll()
        .then(users => {
			let usersInfo=[];
			users.forEach(user => {
				usersInfo.push({
					id: user.id,
					name: user.first_name +" "+ user.last_name,
					email: user.email,
					detail: 'http://localhost:3000/api/users/' + user.id
				})
			});
            let respuesta = {
                count: users.length,
                data: usersInfo
            }
                res.json(respuesta);
            })
    },
	oneUser: (req, res) => {
        db.User.findByPk(req.params.id)
            .then(user => {
				// console.log(user);
				let userInfo= {
					id: user.id,
					name: user.first_name +" "+ user.last_name,
					email: user.email,
					avatar: user.avatar,
					date_of_birth: user.date_of_birth
				};
                let respuesta = {
                    data: userInfo
                }
                res.json(respuesta);
            });
    },
};

module.exports = usersApiController;