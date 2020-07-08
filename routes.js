const express = require('express');
const Router = express.Router();
const authController = require('./controllers/authController');


Router.post('/signup', authController.postSignup );

module.exports = Router;