const express = require('express');
const router = express.Router();

// ************ Controller Require ************
const productsController = require('../controllers/productsController');

router.get('/', productsController.products);

router.get('/cart', productsController.cart);

router.get('/detail/:id/', productsController.detail);

router.get('/edit/:id/', productsController.edit);
router.put('/edit/:id/', productsController.upgrade);

router.get('/create', productsController.create);
router.post('/create', productsController.newProduct);

module.exports = router;