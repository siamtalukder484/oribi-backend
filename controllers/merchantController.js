const Store = require("../models/merchantModel.js")
const User = require("../models/userModels.js")

async function becomeMerchant(req, res){
    const {storename, officialemail, officialphone, address, owner, products} = req.body

    let duplicateMerchant = await Store.find({storename})

    if(duplicateMerchant.length > 0){
        return res.send({error: "Store already existed. "})
    }

    const store = new Store({
        storename,
        officialemail, 
        officialphone, 
        address, 
        owner, 
        products
    })
    store.save()
    await User.findOneAndUpdate(
        {_id: owner},
        {$set:{
            merchent: true,
            role: "merchant",
        }},
        {new: true}
    )
    // res.send({success: "Store Created Successfully"})
    res.send(store)
}

async function merchantStatusController(req, res){
    const {storename,status} = req.body
    if(status == "rejected" || status == "waiting"){
        let updateStoreStatus = await Store.findOneAndUpdate (
            {storename},
            {status: status},
            {new: true}
        )
        return res.send({success: "Store Status Updated"})
    }
    else if(status == "approved"){
        let updateStoreStatus = await Store.findOneAndUpdate (
            {storename},
            {status: status},
            {new: true}
        )
        return res.send({success: "Store Status Updated"})
    }
}

async function getAllMerchant(req,res){
    const data = await Store.find({}).populate("user")
    res.send(data)
}

module.exports = {becomeMerchant,merchantStatusController,getAllMerchant}