import User from "../model/User.js"

export const addUser = async (request, response) => {
    try {
        let exist = await User.findOne({ sub: request.body.sub })
        if (exist) {
            response.status(200).json({ msg: "User exists" });
            return;
        }

        const newUser = new User(request.body)
        await newUser.save();
        return response.status(200).json(newUser);

    } catch (error) {
        console.log("Error while saving user to DB", error.message)
        return response.status(500).json({ message: `Error while saving user to DB. ${error.message}` })
    }
}

export const getUsers = async (request, response) => {
    try {
        const users = await User.find({})
        return response.status(200).json(users)
    } catch (error) {
        return response.status(500).json(error.message)
    }
}