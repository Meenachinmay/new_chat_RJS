const mongoose = require('mongoose')
const config = require('../config/config');

exports.Database = () => {
    mongoose.connect(config.MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true}, (error) => {
        if (error) console.error(error);
        else console.log("MongoDB is Connected...");
    })
}