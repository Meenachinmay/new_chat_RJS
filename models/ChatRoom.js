const mongoose = require('mongoose');

const chatRoomSchema = new mongoose.Schema({
    name: {
        type: String,
        required: 'Chat room name is required'
    }
});

module.exports = mongoose.model('chatroom', chatRoomSchema);