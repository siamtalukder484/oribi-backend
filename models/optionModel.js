const { ObjectId } = require("mongodb");
const mongoose = require("mongoose");
const {Schema} = mongoose;

const optionSchema = new Schema({
    name:{
        type: String,
        required: true
    },
    value:[
        {
            name:{
                type: String,
                required: true,
            },
            price:{
                type: String,
            },
            quantity:{
                type: Number,
                required: true
            },
        }
    ],
    created:{
        type: Date,
        default: Date.now(),
    },
    updated: {
        type: Date,
    }
})

module.exports = mongoose.model("Option",optionSchema)