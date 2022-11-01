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
const uploadFile = multer({ storage });
const fields = [
    { name: 'imageProduct', maxCount: 1 },
    { name: 'imagesMini', maxCount: 5 }
  ];

// ************ Controller Require ************
const productsController = require('../controllers/productsController');
const authMiddleware = require('../middlewares/authMiddleware')

router.get('/', productsController.products);

router.get('/cart', productsController.cart);

router.get('/detail/:id/', productsController.detail);

// Editar producto

router.get('/edit/:id/', authMiddleware, productsController.edit);
router.put('/edit/:id/', uploadFile.single('imageProduct'), productsController.upgrade);

// Crear producto
router.get('/create', productsController.create);
router.post('/create', uploadFile.fields(fields) , productsController.newProduct);

// Borrar producto
router.delete('/delete/:id', productsController.delete);

module.exports = router;