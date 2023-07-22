const Category = require("../models/categoryModel.js")
const SubCategory = require("../models/subCategoryModel.js")

async function categoryCreateController (req,res){
    
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

// ============== SubCategory ====================

async function subCategoryCreateController (req,res){
    const {name, description, category} = req.body
    console.log(name,description, category);
    let duplicateSubCategory = await SubCategory.find({name})

    if(duplicateSubCategory.length > 0){
        return res.send({error: "Sub Category already existed. "})
    }
    let subcategory = new SubCategory({
        name,
        description,
        category,
    })
    subcategory.save()
    console.log(subcategory._id);
    console.log(subcategory.category);
    await Category.findOneAndUpdate({_id: subcategory.category},{$push:{subCategory: subcategory._id}},{new: true})
    res.send({
        success: "Sub Category created Successfully.."
    })
}

async function subCategoryStatusController (req,res){
    const {name,status} = req.body
    console.log(name,status);
    if(status == "rejected" || status == "waiting"){
        let updateSubcategory = await SubCategory.findOneAndUpdate (
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
        let updateSubcategory = await SubCategory.findOneAndUpdate (
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


module.exports = {categoryCreateController,categoryStatusController,subCategoryCreateController,subCategoryStatusController};
