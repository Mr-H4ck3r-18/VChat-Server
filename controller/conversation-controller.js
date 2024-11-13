import Conversation from "../model/Conversation.js";



export const newConversation = async (request, response) => {
    try {
        const receiverId = request.body.receiverId;
        const senderId = request.body.senderId;
        let exists = await Conversation.findOne({ members: { $all: [receiverId, senderId] } });

        if (exists) {
            return response.status(200).json('Conversation exists');
        }

        const newConversation = new Conversation({
            members: [senderId, receiverId],
        });
        await newConversation.save();
        return response.status(200).json('New conversation saved');
    } catch (error) {
        return response.status(500).json(error.message);
    }
}

export const getConversation = async (request, response) => {

    try {
        let result = await Conversation.findOne({ members: { $all: [request.body.senderId, request.body.receiverId] } })
        return response.status(200).json(result)

    } catch (error) {
        return response.status(500).json(error.message);
    }
}