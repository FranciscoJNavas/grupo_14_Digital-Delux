function isLoguedMiddleware(req,res,next){
    if(req.session.userLogged){
        return res.redirect('/'); //deberia ir a la pagina del perfil
    }
    next();
}

module.exports = isLoguedMiddleware;