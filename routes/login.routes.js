const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const User = require("../model/user.model");
const { JsonWebTokenError } = require("jsonwebtoken");

router.route("/").post(async (req, res) => {
    console.log("Login hit", req.body);

    try {
        const result = await User.findOne({ mobileNo: req.body.mobileNo });

        if (result !== null) {
            // login
            sendToken(req.body.mobileNo, "Login Successful", res);
            console.log("Login");
        } else {
            // register
            const user = new User({
                mobileNo: req.body.mobileNo
            });
            user.save().then(() => {
                sendToken(req.body.mobileNo, "Register Successful", res);
            }).catch((err) => { 
             res.json({ token: err, msg: "Error" });
             });
            console.log("Register");
        }

       
    } catch (error) {
        return res.status(403).json({ msg: "An error occurred" });
    }
});

const sendToken = (mobileNo, msg, res) => {
    let token = jwt.sign({ mobileNo: mobileNo },
        "this is shopping app"
        );
res.json({ token: token, msg: msg });
}

module.exports = router;









