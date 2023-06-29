const usercont = require('../controller/user.controller')
const express = require('express')

const router = express.Router()

router.post('/register', usercont.register);
router.post('/login', usercont.login);
module.exports = router;