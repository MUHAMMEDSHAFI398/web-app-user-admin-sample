const express = require('express');
const adminRouter = express();
const adminController = require('../controllers/adminController');




adminRouter.post("/", adminController.login);
adminRouter.get("/getUsers", adminController.getUsers);
adminRouter.get("/deleteUser/:id", adminController.deleteUser);
adminRouter.get('/editUser/:id',adminController.editUser);

module.exports=adminRouter;
