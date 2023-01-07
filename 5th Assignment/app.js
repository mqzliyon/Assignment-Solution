const express = require('express');
const app = express();
require('dotenv').config();
const mongoose = require('mongoose');
const {router} = require('./src/routes/api');

// Package Import
const helmet = require('helmet');
const mongooseSanitizer = require('mongoose-sanitizer');
const bodyParser = require('body-parser');

// Package Implement
app.use(helmet());
app.use(bodyParser.json());
app.use(mongooseSanitizer);


// rate limiter setup
const rateLimiter = require('express-rate-limit');
const limiter = rateLimiter({
    windowMs: 18 * 60 * 1000,
    max: 100,
    standardHeaders: true,
    legacyHeaders: false
});
app.use(limiter);

// Database connection
const Uri = process.env.DATABASE_URL;
const OPTION = {user: '',pass: '',autoIndex: true};
mongoose.connect(Uri,OPTION,(error)=>{
    if (error){
        console.log(error.message);
    }else {
        console.log('Database connection success');
    }
})

// Undefined route
app.use('*',(req,res)=>{
    res.status(404).json({status: '404',data: 'Page not found'});
})

app.use('/api/v1',router);

module.exports = {app};