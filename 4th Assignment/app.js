const express = require('express');
const bodyParser = require('body-parser')
const {router} = require('./src/routes/api');
const app = express();
app.use(bodyParser.json());

// Route Setup
app.use('/api/v1',router);

// Undefined Route
app.use("*",(req,res)=>{
    res.status(404).json({status:'Error',message:'Page not found'})
})
module.exports = {app};