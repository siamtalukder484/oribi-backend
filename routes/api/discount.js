const express = require("express");
const router = express.Router();
const {createDiscountController} = require("../../controllers/discountController.js")


// ======= Category Route ============
router.post("/creatediscount", createDiscountController);


module.exports = router; 