const express = require('express');
const adminController = express.Router()
const {getUsers,deleteUser} = require('../controllers/users')
const authentication = require('../middleware/authentication')
const authorization = require('../middleware/authorization')
adminController.get('/',authentication,authorization('VIEW_USERS'),getUsers)
adminController.delete('/:id',authentication,authorization('VIEW_USERS'),deleteUser)

module.exports = adminController