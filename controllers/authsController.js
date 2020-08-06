const User = require('../models/User');

const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const { validateUserForSignUp, validateUserForLogin} = require('../validations/Validations');

exports.signUp = async (req, res) => {
    // validate the userdata
    const UserValidationResponse = validateUserForSignUp(req.body);

    if (UserValidationResponse.error) return res.status(400).json({
        success: false,
        error: UserValidationResponse.error.details[0].message
    })

    // Checking if the userEmail is already exist
    const existedEmail = await User.findOne({ email: req.body.email })
    if (existedEmail) return res.status(400).json({success: false, error: "Email is already in use"});   

     // HASHING PASSWORD
     const salt = await bcrypt.genSalt(10);
     const hashedPassword = await bcrypt.hash(req.body.password, salt);

    const newUser = new User({
        name: req.body.name,
        email: req.body.email,
        password: hashedPassword
    });

    try {
        const savedUser = await newUser.save();
        return res.status(200).json({success: true});       
    } catch (error) {
        return res.status(400).json({success: false, error});
    }
}

exports.signIn = async (req, res) => {
     // validate the userdata
     const UserValidationResponse = validateUserForLogin(req.body);

     if (UserValidationResponse.error) return res.status(400).json({
         success: false,
         error: UserValidationResponse.error.details[0].message
     })
 
     // IF EMAIL EXIST
     const user = await User.findOne({ email: req.body.email });

     if (!user) {
        return res.status(400).json({success: false, error: "Email is not found in our database."});
    } else {
        // IF PASSWORD IS CORRECT
        const passwordMatched = await bcrypt.compare(req.body.password, user.password);
        if (!passwordMatched) {
            return res.status(400).json({success: false, error: "Password is incorrect."});
        } else {
            const token = jwt.sign({_id: user._id}, "nihongadaisuki");
            return res.header('Authorization', token).status(200).json({success: true, token: token, user: { _id: user._id } });
        }
    }
}