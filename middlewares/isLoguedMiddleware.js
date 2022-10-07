function isLoguedMiddleware(req,res,next){
    if(req.session.userLogged){
        return res.redirect('/users/user-profile'); //deberia ir a la pagina del perfil
    }
    next();
}

module.exports = isLoguedMiddleware;