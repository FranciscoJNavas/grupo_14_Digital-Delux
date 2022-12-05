const express = require('express');
const router = express.Router();
const registerMiddleware = require('../middlewares/registerMiddleware');
const loginMiddleware = require('../middlewares/loginMiddleware');



// ************ Controller Require ************
const ordersController = require('../controllers/ordersController');
const isLoguedMiddleware = require('../middlewares/isLoguedMiddleware');
const authMiddleware = require('../middlewares/authMiddleware');


// ************ ORDER *************
router.get('/:id', ordersController.order);



module.exports = router;