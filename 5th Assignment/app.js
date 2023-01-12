// Basic Lib Import
const express = require('express');
const app = express();
require('dotenv').config();
const {router} = require('./src/routes/api');

// Security Lib Import
const helmet = require('helmet');
const mongooseSanitizer = require('express-mongo-sanitize');
const bodyParser = require('body-parser');
const hpp = require('hpp');
const xss = require('xss-clean')

// Security Lib Implement
app.use(helmet());
app.use(bodyParser.json());
app.use(hpp());
app.use(xss());
app.use(mongooseSanitizer());

// Database Lib Import
const mongoose = require('mongoose');

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


app.use('/api/v1',router);


// Undefined route
app.use('*',(req,res)=>{
    res.status(404).json({status: '404',data: 'Page not found'});
})

module.exports = {app};