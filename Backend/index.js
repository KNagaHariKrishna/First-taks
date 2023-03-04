const express = require('express')
const mongoose = require('mongoose');
const app = express()
const Reguser=require('./models/Regschema')
const bodyParser=require("body-parser")
const cors = require("cors")
const jwt = require("jsonwebtoken")
const fileUpload = require("express-fileupload")
const secret="hari"
const bcrypt = require('bcrypt');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors())
app.use(fileUpload())
app.use(bodyParser.json());

mongoose.connect('mongodb://127.0.0.1:27017/test')
    .then(() => console.log('DB Connected!'));


app.post("/register",async (req,res)=>{
    console.log(req.body);
    const { username, age, mobnum, password }=req.body

    const user = await Reguser.findOne({ username });
    if (user) {
        return res.status(409).json({
            status: "Failed",
            message: "User already exists"
        });
    }

//     if (true)
// {        const user = await Reguser.create({
//             username: username,
//             age: age,
//             mobnum: mobnum,
//             password: password,
//         })
//         console.log(user);
//         return res.status(201).json({
//             status: "success",
//             user

//         });
//  }
    bcrypt.hash(password, 10, async function (err, hash) {
        // Store hash in your password DB.
        if (err) {
            return res.status(500).json({
                status: "Failed",
                message: err.message
            })
        }
        const data = await Reguser.create({
            username,
            age,
            mobnum,
            password: hash
        });
        return res.status(200).json({
            status: "Success",
            message: "User successfuully registerd",
            data
        })
    });
})

app.post("/login",async (req,res)=>{
    console.log(req.body);
    const { username, password } = req.body
    const user = await Reguser.findOne({ username });
    if (!user) {
        return res.status(400).json({
            status: "Failed",
            message: "Unnown user/ User is not registered"
        })
    }
    bcrypt.compare(password, user.password, function (err, result) {
        // result == true
        if (err) {
            return res.status(500).json({
                status: "Failed",
                message: err.message
            })
        }
        if (result) {
            const { username, age, mobnum } = user
            const token = jwt.sign({
                exp: Math.floor(Date.now() / 1000) + (60 * 60),
                data: user._id
            }, secret);

            return res.status(200).json({
                status: "Succces",
                message: "Login successful",
                token,
                user:{username,age,mobnum}
            })
        } else {
            return res.status(400).json({
                status: "Failed",
                message: "Invalid credentails"
            })
        }
    });
})
// app.get("/userdetails", async (req, res) => {
//     const param1 = req.query.username;
//     console.log(param1);
//     try {
//         const details = await Reguser.findOne({ username: req.query.username })
//         res.send(details)
//     } catch (e) {
//         res.status(400).json({
//             status: "Failed",
//             msg: "Data Not Found",
//             message: e.message,
//         });
//     }

// })
app.listen(5000, () => { console.log("serveris started at 5000 port"); })