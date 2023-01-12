const express = require('express');
const userRouter = express();
const userController = require('../controllers/userController');
const jwt = require("jsonwebtoken");
const passport = require("passport");


userRouter.post("/signup", userController.signup);
userRouter.post("/login", userController.login);


module.exports=userRouter;

