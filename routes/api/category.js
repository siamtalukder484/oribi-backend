const express = require("express");
const router = express.Router();
const {categoryController,categoryStatusController} = require("../../controllers/categoryController.js");

router.post("/createcategory", categoryController);
router.post("/categorystatus", categoryStatusController);

module.exports = router; 