const express = require("express");
const router = express.Router();
const {categoryCreateController,categoryStatusController,subCategoryCreateController,subCategoryStatusController} = require("../../controllers/categoryController.js");

// ======= Category Route ============
router.post("/createcategory", categoryCreateController);
router.post("/categorystatus", categoryStatusController);
// ======= Sub Category Route ============
router.post("/createsubcategory", subCategoryCreateController);
router.post("/subcategorystatus", subCategoryStatusController);

module.exports = router; 