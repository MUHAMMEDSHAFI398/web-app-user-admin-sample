const jwt = require("jsonwebtoken");
const validateLoginInput = require('../validation/login');
const User = require("../model/userModal")
const dotenv = require("dotenv");
dotenv.config();


module.exports = {
    login: (req, res) => {
        const { errors, isValid } = validateLoginInput(req.body);
        if (!isValid) {
            return res.status(400).json(errors);
        }
        const email = req.body.email;
        const password = req.body.password;
        if (process.env.AdminEmail === email && process.env.AdminPassword === password) {
            const payload = {
                email: email,
            };
            jwt.sign(
                payload,
                "secret",
                {
                    expiresIn: 3600,
                },
                (err, token) => {
                    if (err) console.error("There is some error in token", err);
                    else {
                        res.json({
                            success: true,
                            email: email,
                            token: `Bearer ${token}`,
                        });
                    }
                }
            );
        } else {
            errors = "Incorrect email or password";
            return res.status(400).json(errors);
        }
    },
    getUsers:(req,res)=>{
        User.find().then((allUsers)=>{
            res.json({
                status:true,
                Users:allUsers
            });
        })
    },
    deleteUser:(req,res)=>{
        const userId=req.params.id
        console.log(userId+  "hi")
        User.deleteOne({_id:userId}).then(()=>{
            res.json({
              status:true,
            });
        })
    },
    editUser: (req, res) => {
        console.log(req.params.id);
        User.findOne({ _id: req.params.id }).then((user) => {
            console.log(user)
            console.log('mannnnnn')

          res.json({ user });
        });
      },
}