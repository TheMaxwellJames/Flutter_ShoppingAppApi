const express = require("express");
const router = express.Router();
const User = require("../model/user.model");

router.route("/").post(async (req, res) => {
    console.log("Login hit", req.body);
    
    try {
        const result = await User.findOne({ mobileNo: req.body.mobileNo });
        
        if (result !== null) {
            // login
            console.log("Login");
        } else {
            // register
            console.log("Register");
        }

        return res.json({ msg: "Great, welcome" });
    } catch (error) {
        return res.status(403).json({ msg: "An error occurred" });
    }
});

module.exports = router;









