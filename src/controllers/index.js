const express = require('express');
const router = express.Router();

const home = require('./home');
const blog = require('./blog');
const error = require('./error');
const login = require('./login');

router.get('/', home);
router.get('/blog', blog);
router.get('/login', login);
router.use(error.client);
router.use(error.server);

module.exports = router;
