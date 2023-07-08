const express = require("express");
const router = express.Router();


router.get("/registration",(req, res)=>{
    res.send("ami auth route thake asci")
})


module.exports = router; 