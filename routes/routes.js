const Authentication = require('../controllers/authsController');
const ChatRoomsController = require('../controllers/chatRoomsController');

const requiredAuth = require('../middlewares/requiredAuth');

module.exports = (app) => {
    
    app.post('/signup', Authentication.signUp);
    
    app.post('/signin', Authentication.signIn);

    app.post('/chat-rooms/create', requiredAuth, ChatRoomsController.createChatRoom);

    app.get('/chatrooms', requiredAuth, ChatRoomsController.getAllChatRooms);

    app.get('/auth-user', requiredAuth, Authentication.user);

    app.get('/messages', requiredAuth, ChatRoomsController.getMessages);
}