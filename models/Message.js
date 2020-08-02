const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema({
    chatRoom: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "chatroom"
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "user"
    },
    message: {
        type: String,
        required: true,
        created_at: Date.now()
    }
}, {timestamps: true});

module.exports = mongoose.model('message', messageSchema);