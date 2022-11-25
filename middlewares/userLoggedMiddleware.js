const fs = require('fs');
const path = require('path');
const usersFilePath = path.join(__dirname, '../data/usersDataBase.json');

let users = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));

function userLoggedMiddleware (req, res, next){
    res.locals.isLogged = false;

    let emailInCookie = req.cookies.userEmail; //guardo el dato almacenado en la cookie
    let userFromCookie = users.find( user => user.email === emailInCookie); // busco el usuario por mail

    if(userFromCookie){ // si find devolvio un usuario valido lo guardo en sesión
        req.session.userLogged = userFromCookie; 
    }

    if (req.session.userLogged) {
        res.locals.isLogged = true;
        res.locals.userLogged = req.session.userLogged;
    }
    console.log(res.locals.userLogged,"aaa")
    next();
}


module.exports = userLoggedMiddleware;