const express = require('express');
const router = express.Router();
const productsApiController = require('../../controllers/api/productsApiController')

router.get('/', productsApiController.productsList);

module.exports = router;