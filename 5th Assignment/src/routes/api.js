const express = require('express');
const {CreateAccount, ProfileSelect} = require("../Controller/ProfileController");
const {Logging} = require("../Controller/LoggingController");
const {AuthVerifyMiddleware} = require("../Middleware/AuthVerifyMiddleware");
const router = express.Router();

router.get('/CreateAccount',CreateAccount)
router.post('/Logging',Logging);
router.get('/ProfileSelect',AuthVerifyMiddleware,ProfileSelect);
module.exports = {router};