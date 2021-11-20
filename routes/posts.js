var express = require('express');
var router = express.Router();
const controller = require('../controllers/posts');
const jwt = require('express-jwt');



router.get('/', controller.all)
      .get('/users/:id', controller.getByUser)
      .post('/', jwt({ secret: process.env.AUTH_SECRET, algorithms: ['HS256']}), controller.create);
      

module.exports = router;