const express = require('express');

const usersControllers = require('../controllers/users-controllers');
const { check } = require('express-validator');

const router = express.Router();

router.get('/',usersControllers.getUsers);

router.post(
    '/signup', 
    [
    check('name')
    .not()
    .isEmpty(),
    check('email')
    .normalizeEmail() //test@test.com => test@test.com
    .isEmail(),
    check('password').isLength({min: 6})
],
 usersControllers.signup);

router.post('/login', usersControllers.login);

module.exports = router;
