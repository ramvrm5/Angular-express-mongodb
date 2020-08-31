const express = require('express');
const Router = express.Router();
const authController = require('./controllers/authController');
const bookAppointment = require('./controllers/book-appointment')
const isAuth = require('./middleware/isauth')

Router.post('/signup', authController.postSignup );

Router.post('/signin', authController.postSignin );

Router.post('/bookAppointment', isAuth,  bookAppointment.bookAppointent );


module.exports = Router;