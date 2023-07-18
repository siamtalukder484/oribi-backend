const mongoose = require("mongoose");
const {Schema} = mongoose;

const userSchema = new Schema({
    fullname:{
        type: String,
        require: true,
    },
    email:{
        type: String,
        require: true,
        unique: true,
    },
    password:{
        type: String,
        require: true,
    },
    avater:{
        type: String,
    },
    emailVarified:{
        type: Boolean,
        default: false,
    },
    merchent:{
        type: Boolean,
        default: false,
    },
    role:{
        type: String,
        default: "member",
        enum: ["admin", "member", "merchent"]
    },
    created:{
        type: Date,
        default: Date.now,
    },
    randomOtp: {
        type: String,
    },
    updated:{
        type: Date,
    },
    facebookId:{
        type: String,
    },
    linkedinId:{
        type: String,
    }
})

module.exports = mongoose.model("User",userSchema)