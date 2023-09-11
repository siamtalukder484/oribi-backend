const Discount = require("../models/discountModel.js")

async function createDiscountController(req,res){
    let {parcent, cash, flat, category, subCategory, product} = req.body

    if(!parcent && !cash){
        return res.send({error: "Enter parcent or cash"})
    }else{
        let discount = new Discount({
            parcent,
            cash,
            flat,
            category,
            subCategory,
            product
        })
        discount.save()
        res.send("Discount Created Successfully")
    }

}

async function getAllDiscount(req,res){
    let data = await Discount.find({}).populate(["category","subCategory","product"])
    res.send(data)
}

module.exports = {createDiscountController,getAllDiscount}