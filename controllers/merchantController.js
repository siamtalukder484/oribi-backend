const Store = require("../models/merchantModel.js")

async function becomeMerchant(req, res){
    const {storename, officialemail, officialphone, address, owner, products} = req.body

    const store = new Store({
        storename,
        officialemail, 
        officialphone, 
        address, 
        owner, 
        products
    })
    store.save()
    res.send({success: "Store Created Successfully"})
}

module.exports = {becomeMerchant}