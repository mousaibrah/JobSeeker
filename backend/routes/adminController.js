const express = require('express');
const adminController = express.Router()
const {getUsers} = require('../controllers/app')
adminController.get('/',getUsers)

module.exports = adminController