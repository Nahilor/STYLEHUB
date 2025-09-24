const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController.js');

router.post('/auth/login', authController.loginController);
router.post('/auth/signup', authController.signupController);

module.exports = router;