const express = require('express');
const router = express.Router();
const usersApiController = require('../../controllers/api/usersApiController')

router.get('/', usersApiController.usersList);

module.exports = router;