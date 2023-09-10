const express = require("express");
const router = express.Router();
const {createDiscountController,getAllDiscount} = require("../../controllers/discountController.js")


// ======= Category Route ============
router.post("/creatediscount", createDiscountController);
router.get("/getalldiscount", getAllDiscount);


module.exports = router; 