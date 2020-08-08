const { validateCreateChatRoomData } = require('../validations/Validations');

const ChatRoom = require('../models/ChatRoom');
const Message = require('../models/Message');

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
        await newChatRoom.save();
        return res.status(200).json({
            success: true,
        })
    } catch (error) {
        return res.status(400).json({
            success: false,
            error: error
        })
    }
}

// @METHOD to get all the chatrooms
// @ROUTE private
exports.getAllChatRooms = async (req, res) => {
    await ChatRoom.find({}, (error, result) => {
        if (error){
            return res.status(400).json({error: error })
        } else {
            return res.status(200).json({ chatRooms: result });
        }
    });
}

// @METHOD to get all the messages
exports.getMessages = async (req,res) => {
    await Message.find({})
        .populate('user')
        .exec((error, document) => {
            if (error){
                return res.status(400).json({success: false, error: error})
            } else {
                return res.status(200).json({success: true, messages: document})
            }
        });
}