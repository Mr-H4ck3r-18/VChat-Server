import mongoose from "mongoose";

const messageSchema = mongoose.Schema({
    senderId: {
        type: String
    },
    receiverId: {
        type: String
    },
    type: {
        type: String
    },
    text: {
        type: String
    },
    conversationId: {
        type: String
    },
}, {
    timestamps: true
}
)

const Message = mongoose.model('Message', messageSchema);
export default Message