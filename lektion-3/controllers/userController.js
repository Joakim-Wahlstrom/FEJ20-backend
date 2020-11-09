const router = require('express').Router()
const userModel = require('../models/user/userModel')

router.post('/register', userModel.registerUser)


module.exports = router;