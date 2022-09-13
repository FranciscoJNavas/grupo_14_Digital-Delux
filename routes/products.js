const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        //luego crear una carpeta particular para los productos
        cb(null, './public/images');
    },
    // filename: function (req, file, cb) {
    //     cb(null, '${Date.now()}_img_${path.extname(file.originalname)}');
    // }
    filename: function (req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    }
})

// ************ Controller Require ************
const productsController = require('../controllers/productsController');

router.get('/', productsController.products);

router.get('/cart', productsController.cart);

router.get('/detail/:id/', productsController.detail);

// Editar producto

router.get('/edit/:id/', productsController.edit);
router.put('/edit/:id/', productsController.upgrade);

// Crear producto
const uploadFile = multer({ storage });
router.get('/create', productsController.create);
router.post('/create', uploadFile.single('imageProduct') ,productsController.newProduct);

// Borrar producto
router.delete('/delete/:id', productsController.delete);


module.exports = router;