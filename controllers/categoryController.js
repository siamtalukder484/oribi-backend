const Category = require("../models/categoryModel.js")
const SubCategory = require("../models/subCategoryModel.js")

// ============== Category ====================

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

async function getAllCategory (req,res){
    const data = await Category.find({}).populate("subCategory")
    res.send(data)
}

// ============== SubCategory ====================

async function subCategoryCreateController (req,res){
    const {name, description, category} = req.body
    
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

async function getAllSubCategory (req,res){
    const data = await SubCategory.find({}).populate("category")
    res.send(data)
}


module.exports = {categoryCreateController,categoryStatusController,subCategoryCreateController,subCategoryStatusController,getAllCategory,getAllSubCategory};
