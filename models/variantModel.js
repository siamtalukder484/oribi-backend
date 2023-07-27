const { ObjectId } = require("mongodb");
const mongoose = require("mongoose");
const {Schema} = mongoose;

const variantSchema = new Schema({
    variantType:{
        type: String,
        required: true
    },
    color:{
        type: String,
    },
    image:{
        type: String,
    },
    storage:{
        type: String,
    },
    ram:{
        type: String,
    },
    size:{
        type: String,
    },
    product:{
        type: Schema.Types.ObjectId,
        ref: "Product",
        required: true
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