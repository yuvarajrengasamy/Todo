const usercont = require('../controller/user.controller')
const express = require('express')

const router = express.Router()

router.post('/register', usercont.register);

module.exports = router;