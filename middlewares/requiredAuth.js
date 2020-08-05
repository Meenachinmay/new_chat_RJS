
const jwt = require('jsonwebtoken');

module.exports = async (req, res, next) => {

    try {
        const token = req.header('authorization');
        if (!token) return res.status(401).json({success: false, message: "Access denied"});
        const verified = await jwt.verify(token, "nihongadaisuki");
        req.user = verified;
        next();
    } catch (error) {
        res.status(400).json({success: false, message: "Invalid token"});
    }
}