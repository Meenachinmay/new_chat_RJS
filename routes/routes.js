const Authentication = require('../controllers/authsController');

module.exports = (app) => {
    app.post('/signup', Authentication.signUp);
}