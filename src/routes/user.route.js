const express = require('express');

const { httpRegisterUser, httpGetUsers } = require('../controllers/user.controller');

// const jwtVerify = require('../middlewares/verifyJWT');
const verifyJWT = require('../middlewares/verifyJWT');

const userRouter = express.Router();

userRouter.post('/register', httpRegisterUser);

userRouter.get('/', verifyJWT, httpGetUsers);



module.exports = userRouter;