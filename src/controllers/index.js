const express = require('express');
const path = require('path'); // do I need this?
const router = express.Router();

const home = require('./home');
const blog = require('./blog');

router.get('/', home);
router.get('/blog', blog);

router.use(error.client);
router.use(error.server);

module.exports = router;
