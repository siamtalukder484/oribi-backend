const express = require("express");
const router = express.Router();
const {becomeMerchant} = require("../../controllers/merchantController.js")

router.post("/becomemerchant", becomeMerchant)


module.exports = router; 