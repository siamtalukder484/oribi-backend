const express = require("express");
const router = express.Router();
const createCategoryController = require("../../controllers/createCategoryController.js");

router.post("/createcategory", createCategoryController)

module.exports = router; 