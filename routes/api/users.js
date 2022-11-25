const express = require('express');
const router = express.Router();
const usersApiController = require('../../controllers/api/usersApiController')

router.get('/', usersApiController.usersList);
router.get('/:id', usersApiController.oneUser);

module.exports = router;