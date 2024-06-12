const bcrypt = require('bcrypt');

const jwt = require('jsonwebtoken');

const User = require('../models/user.model');

async function httpLogin(req, res) {

    try {

        const { email, password } = req.body;

        //find user by email

        const user = await User.findOne({ email });

        if (!user) {

            return res.status(401).json({ message: "Invalid email or password!" })

        }

        // valid password

        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {

            return res.status(401).json({ message: "Invalid email or password!" })
        }


        // jwt payload

        const payload = { userId: user._id };

        // Generate JWT

        const accessToken = jwt.sign(payload, process.env.JWT_SECRET, {
            expiresIn: "1h"
        })

        // Respond with JWT

        res.json({ accessToken });
       

    } catch (err) {

        console.log(err);

        res.status(500).json({ message: "server error" })

    }
}
module.exports = {
    httpLogin,
};