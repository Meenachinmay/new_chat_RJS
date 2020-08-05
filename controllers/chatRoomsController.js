const { validateCreateChatRoomData } = require('../validations/Validations');

const ChatRoom = require('../models/ChatRoom');

//@METHOD To add a new Chatroom
//@ROUTE private
exports.createChatRoom = async (req, res) => {
    const ChatRoomValidationResponse = validateCreateChatRoomData(req.body);

    if (ChatRoomValidationResponse.error) return res.status(400).json({
        success: false,
        error: ChatRoomValidationResponse.error.details[0].message
    })

    // Check if chat room is already exist in database (@CANNOT ADD DUPLICATE CHAT ROOM NAME)
    const existedChatRoom = await ChatRoom.findOne({name: req.body.name});
    if (existedChatRoom) { return res.status(400).json({
        success: false, 
        error: "Chat room name is already exist, please try again with another name."
    })}

    const newChatRoom = new ChatRoom({
        name: req.body.name
    })

    try {
        const savedChatRoom = await newChatRoom.save();
        return res.status(200).json({
            success: true,
            chatRoom: savedChatRoom.name
        })
    } catch (error) {
        return res.status(400).json({
            success: false,
            error: error
        })
    }
}