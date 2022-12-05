const express = require('express');
const router = express.Router();
const ordersApiController = require('../../controllers/api/ordersApiController')

router.get('/', ordersApiController.ordersList);
router.get('/:id', ordersApiController.orderByuser);
router.post('/checkout', ordersApiController.orderLoad);

module.exports = router;