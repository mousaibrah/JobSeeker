const express = require("express");
const emailRouter = express.Router();
const { emailForCompany, reply } = require("../controllers/email");

emailRouter.post("/", emailForCompany);
emailRouter.post("/reply", reply);

module.exports = emailRouter;
