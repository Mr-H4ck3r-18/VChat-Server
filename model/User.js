import mongoose from "mongoose";

const userScheme = mongoose.Schema({
    iss: {
        type: String
    },
    nbf: {
        type: Number
    },
    azp: {
        type: String
    },
    aud: {
        type: String
    },
    sub: {
        type: String,
        required: true
    },
    email: {
        type: String,
    },
    email_verified: {
        type: Boolean
    },
    name: {
        type: String,
        required: true
    },
    picture: {
        type: String
    },
    given_name: {
        type: String,
    },
    family_name: {
        type: String
    },
    iat: {
        type: Number
    },
    exp: {
        type: Number
    },
    jti: {
        type: String
    },
})

const User = mongoose.model('users', userScheme)

export default User;