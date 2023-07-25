const { ObjectId } = require("mongodb");
const mongoose = require("mongoose");
const {Schema} = mongoose;

const variantSchema = new Schema({
    name:{
        type: String,
        required: true
    },
    image:{
        type: String,
        required: true
    },
    price:{
        type: Number,
        required: true
    },
    quantity:{
        type: Number,
        required: true
    },
    product:{
        type: Schema.Types.ObjectId,
        ref: "Product"
    },
    created:{
        type: Date,
        default: Date.now(),
    },
    updated: {
        type: Date,
    }
})

module.exports = mongoose.model("Variant",variantSchema)