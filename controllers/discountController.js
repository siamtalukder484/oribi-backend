const Discount = require("../models/discountModel.js")

async function createDiscountController(req,res){
    let {parcent, cash, flat, category, subCategory, product} = req.body

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

module.exports = {createDiscountController}