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
    if (existedEmail) return res.status(400).json({success: false, message: "Email is already in use", email: existedEmail.email });   

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
        res.status(200).json({success: true, user: {email: savedUser.email, name: savedUser.name }});       
    } catch (error) {
        res.status(400).json({success: false, error});
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
}