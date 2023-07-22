const Category = require("../models/categoryModel.js")

async function categoryController (req,res){
    
    const {name, description} = req.body

    let duplicateCategory = await Category.find({name})
    if(duplicateCategory.length > 0){
        return res.send({error: "Category already existed. "})
    }

    let category = new Category({
        name,
        description,
    })
    category.save()
    res.send({
        success: "Category created Successfully.."
    })
}

async function categoryStatusController (req,res){
    const {name,status} = req.body
    console.log(name,status);
    if(status == "rejected" || status == "waiting"){
        let updateCategory = await Category.findOneAndUpdate (
            {name},
            {$set:{
                isActive: false,
                status: status,
            }},
            {new: true}
        )
        return res.send({success: "Status Updated"})
    }
    else if(status == "approved"){
        let updateCategory = await Category.findOneAndUpdate (
            {name},
            {$set:{
                isActive: true,
                status: status,
            }},
            {new: true}
        )
        return res.send({success: "Status Updated"})
    }
}

module.exports = {categoryController,categoryStatusController};
