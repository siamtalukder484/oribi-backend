const express = require("express");
const router = express.Router();
const {categoryCreateController,categoryStatusController,subCategoryCreateController,subCategoryStatusController,getAllCategory,getAllSubCategory} = require("../../controllers/categoryController.js");

// ======= Category Route ============
router.post("/createcategory", categoryCreateController);
router.post("/categorystatus", categoryStatusController);
router.get("/getallcategory", getAllCategory);
// ======= Sub Category Route ============
router.post("/createsubcategory", subCategoryCreateController);
router.post("/subcategorystatus", subCategoryStatusController);
router.get("/getallsubcategory", getAllSubCategory);

module.exports = router; 