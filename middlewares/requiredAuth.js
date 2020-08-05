
const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    const token = req.header('authorization');
    if (!token) return res.status(401).json({success: false, message: "Access denied"});

    try {
        const verified = jwt.verify(token, "nihongadaisuki");
        req.user = verified;
        next();
    } catch (error) {
        res.status(400).json({success: false, message: "Invalid token"});
    }
}