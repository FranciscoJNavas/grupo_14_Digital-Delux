const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const registerMiddleware = require('../middlewares/registerMiddleware');
const loginMiddleware = require('../middlewares/loginMiddleware');



const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        //luego crear una carpeta particular para los productos
        cb(null, './public/images/avatars');
    },
    // filename: function (req, file, cb) {
    //     cb(null, '${Date.now()}_img_${path.extname(file.originalname)}');
    // }
    filename: function (req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    }
})
const uploadFile = multer({ storage });
// ************ Controller Require ************
const usersController = require('../controllers/usersController');
const isLoguedMiddleware = require('../middlewares/isLoguedMiddleware')


// ************ LOGIN *************
router.get('/login', isLoguedMiddleware,  usersController.login);
router.post('/login', loginMiddleware ,usersController.userLogin);

// ************ LOGOUT *************
router.get('/logout', usersController.logout);


// ************ REGISTER *************
router.get('/register', isLoguedMiddleware,  usersController.register);

//****** CREAR USUARIO **********
router.post('/register', uploadFile.single('avatar'), registerMiddleware, usersController.newUser);

module.exports = router;