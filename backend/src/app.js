const cookieParser = require('cookie-parser')
const authRoutes = require('./routes/auth.routes')

//create server
const express = require("express");
const app = express();
app.use(express.json());
app.use(cookieParser());


app.use('/api/auth', authRoutes)

module.exports = app;
