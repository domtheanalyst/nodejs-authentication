const express = require('express');

const authRouter = require('./routes/auth.route');

const userRouter = require('./routes/user.route');

console.log(process.env.MONGO_URI)
const app = express()

app.use(express.json())

app.use('/user', userRouter);

app.use('/auth', authRouter);

module.exports = app;