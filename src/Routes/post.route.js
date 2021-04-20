const express = require('express');
const PostController = require('../Controllers/PostController');
const router = express.Router();

router.get('/', PostController.index);

module.exports = router;