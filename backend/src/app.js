const cookieParser = require('cookie-parser')
const cors = require('cors')
const authRoutes = require('./routes/auth.routes')
const foodRoutes = require('./routes/food.routes')

//create server
const express = require("express");
const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(cors({
  origin: 'http://localhost:5173',
  credentials: true
}))


app.use('/api/auth', authRoutes)
app.use('/api/food', foodRoutes)

module.exports = app;
