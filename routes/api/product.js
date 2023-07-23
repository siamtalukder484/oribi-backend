const express = require("express");
const router = express.Router();
const {secureUpload} = require("../../controllers/productController.js")

router.post("/createproduct",secureUpload)


module.exports = router; 