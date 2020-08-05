const Authentication = require('../controllers/authsController');
const PostsController = require('../controllers/postsController');

const requiredAuth = require('../middlewares/requiredAuth');

module.exports = (app) => {
    
    app.post('/signup', Authentication.signUp);
    
    app.post('/signin', Authentication.signIn);

    app.get('/posts', requiredAuth, PostsController.posts);
}