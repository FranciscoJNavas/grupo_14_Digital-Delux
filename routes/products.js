const express = require('express');
const router = express.Router();

// ************ Controller Require ************
const productsController = require('../controllers/productsController');

router.get('/cart', productsController.cart);
router.get('/detail/:id/', productsController.detail);
router.get('/edit', productsController.edit);
router.get('/create', productsController.create);


module.exports = router;