//Application configuration
const express = require('express');
const app = new express();
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const multer = require('multer');
const mysql  = require('mysql');
const mongoose = require('mongoose');
const  cors = require('cors');
const mongoSanitize = require('express-mongo-sanitize');
const hpp = require('hpp');
const validator = require('validator');
const ratelimit = require('express-rate-limit');
const helmet = require('helmet');
app.use(bodyParser.json());
app.use(cookieParser());

const limiter =ratelimit({windowMs:15 * 60 * 1000,max: 100});

const router = require('./src/Routes/api');



//Application Routes
app.use('/api/v1',router);
//Undefined routes
app.use('*',(req,res)=>{
    res.status(404).json({
        status:"Fail",
        data:"Not Found"
    })
})

module.exports=app;