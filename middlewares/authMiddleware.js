function authMiddleware(req,res,next){
    if(!req.session.userLogged){
        return res.redirect('/users/login'); //a loguearse
    }
    next();
}

module.exports = authMiddleware;