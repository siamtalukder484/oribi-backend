const mongoose = require("mongoose");
const {Schema} = mongoose;

const storeSchema = new Schema({
    storename: {
        type: String,
        required: true,
    },
    officialemail:{
        type: String,
        required: true,
    },
    officialphone:{
        type: String,
        required: true,
    },
    address:{
        type: String,
        required: true,
    },
    status: {
        type: String,
        default: "waiting",
        enum: ["waiting","approved","rejected"],
    },
    owner: {
        type: Schema.Types.ObjectId,
        ref: "User"
    },
    products:[{
        type: Schema.Types.ObjectId,
        ref: "Product"
    }]
})

module.exports = mongoose.model("Store",storeSchema)