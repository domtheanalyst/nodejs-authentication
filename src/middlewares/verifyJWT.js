const jwt = require('jsonwebtoken');

function verifyJWT(req, res, next){

    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith('Bearer ')){

        return res.status(401).json({message: "unauthorized access!"})

    }

    const token = authHeader.split(" ")[1];

    try {

        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        req.user = decoded

        next();
        
    } catch (error) {

        console.log(error);

        return res.status(401).json({message: "Access denied! Unathorized"})
        
    }

}

module.exports = verifyJWT;