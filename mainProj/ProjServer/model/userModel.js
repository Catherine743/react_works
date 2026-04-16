const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    username: {
        type : "string",
        required : "true"
    },
    email: {
        type : "string",
        required : "true"
    },
    password: {
        type : "string",
        required : "true"
    },
    bio: {
        type : "string",
        default : "smartTracker-user"
    },
    image: {
        type : "string",
        default: ""
    },
    role : {
        type: "string",
        default: "user"
    }
})

const users = mongoose.model('users', userSchema)
module.exports = users