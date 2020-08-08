const express = require('express');

const Database = require('./database/Database');

const router = require('./routes/routes');

const app = express();
const cors = require('cors');
const server = require('http').createServer(app);

const io = require('socket.io')(server);

const jwt = require('jsonwebtoken');
const Message = require('./models/Message');

Database.Database();

app.use(express.json({extended: true}));

app.use(cors());

router(app);

// io.use( async (socket, next) => {
//     const token = socket.handshake.query.token;
//     try {
//         if (!token) return res.status(401).json({success: false, error: "Access denied"});
//         const verified = await jwt.verify(token, "nihongadaisuki");
//         socket.user = verified._id;
//         console.log('reached');
//         next();
//     } catch (error) {
//         console.log('error');
//         res.status(400).json({success: false, error: "Invalid token"});
//     }
// })

io.on('connection', (socket) => {
    console.log('Connected');
    socket.emit('testing', "this is testing service...");
    
    socket.on('joinRoom', ({ chatRoomID }) => {
        socket.join(chatRoomID);
        console.log("a user joined " + chatRoomID);
    })

    socket.on('leaveRoom', ({ chatRoomID }) => {
        socket.leave(chatRoomID);
        console.log("a user left " + chatRoomID);
    })
    
    socket.on('chatroomMessage', async ({ chatRoomID, userID, message}) => {
    
        const saveMessage = new Message({
            chatRoom: chatRoomID,
            user: userID,
            message: message
        });

        io.to(chatRoomID).emit("newMessage", {
            chatRoom: chatRoomID,
            user: userID,
            message: saveMessage.message
        });

        await saveMessage.save();
    })
    
    
    socket.on('disconnect', () => {
        console.log("Disconnected");
    })
})

const port = process.env.PORT || 4000;

server.listen(port, () => {
    console.log(`Server is listening on port ${port}`)
});

