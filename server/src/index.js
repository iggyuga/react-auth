// Entry point to Application

//ES6
import express from 'express';
import http from 'http';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import mongoose from 'mongoose';
import cors from 'cors';
const app = express();
const router = require('../router');

// ES5
// const express = require('express');
// const http = require('http');
// const bodyParser = require('body-parser');
// const morgan = require('morgan');
// const app = express();

//DB setup
const options = {
    useNewUrlParser: true,
}
mongoose.connect('mongodb://localhost:auth/auth', options);

// App
app.use(morgan('combined'));
app.use(cors());
app.use(bodyParser.json({ type: '*/*' }));  
router(app);

// Server
const port = process.env.PORT || 3090;
const server = http.createServer(app);
server.listen(port);
console.log('Server listening on port ', port);