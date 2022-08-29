const express = require('express');
const router = express.Router();

// ************ Controller Require ************
const productsController = require('../controllers/productsController');

router.get('/cart', productsController.cart);
router.get('/detail/:id/', productsController.detail);


module.exports = router;