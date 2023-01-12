const express = require('express');
const app = express();
const dbconnect = require("./config/connection");
const bodyParser = require('body-parser');
const dotenv = require("dotenv");
const userRouter = require("./routes/userRouter")
const adminRouter = require("./routes/adminRouter")
const cors = require("cors");

dbconnect.dbconnect();
dotenv.config()


app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.use('/', userRouter);
app.use('/admin', adminRouter)


app.listen(process.env.PORTNO, () => {
    console.log("server started listening to port 5000");
});

