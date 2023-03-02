const express = require('express');
const appRouter = express.Router()
const {getFunc,postFunc,putFunc,deleteFunc} = require('../controllers/app')

appRouter.get('/',getFunc)
appRouter.post('/',postFunc)
appRouter.put('/',putFunc)
appRouter.delete('/',deleteFunc)

module.exports = appRouter