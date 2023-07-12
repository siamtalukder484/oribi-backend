const express = require("express");
const emailValidation = require("../../helpers/emailValidation.js");
const router = express.Router(); 


router.post("/registration",(req, res)=>{
    const {fullname, email, password} = req.body
    console.log(req.body);
    if(!fullname){
        return res.send({error: "Enter your Fullname"})
    }
    else if(!email){
        return res.send({error: "Enter your Email"})
    }
    else if(!emailValidation(email)){
        return res.send({error: "Enter a valid Eamil"})
    }
    else if(!password){
        return res.send({error: "Enter your Password"})
    }
    else{
        return res.send({success: "Registration Successfully"})
    }
})


module.exports = router; 