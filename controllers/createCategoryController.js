const Category = require("../models/categoryModel.js")

async function createCategoryController (req,res){
    
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

module.exports = createCategoryController