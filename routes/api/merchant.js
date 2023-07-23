const express = require("express");
const router = express.Router();
const {becomeMerchant,merchantStatusController,getAllMerchant} = require("../../controllers/merchantController.js")

router.post("/becomemerchant", becomeMerchant)
router.post("/merchantstatus", merchantStatusController)
router.get("/getallmerchant",getAllMerchant)


module.exports = router; 