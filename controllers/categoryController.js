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
}

module.exports = {categoryController,categoryStatusController};
