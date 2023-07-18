const User = require("../models/userModels");
const bcrypt = require("bcrypt")
const emailValidation = require("../helpers/emailValidation.js")

let loginController = async (req, res) => {
    
    let {email, password} = req.body

    if(!email){
        return res.send({error: "Enter your Email"})
    }
    else if(!emailValidation(email)){
        return res.send({error: "Enter a valid Eamil"})
    }
    else if(!password){
        return res.send({error: "Enter your Password"})
    }
    else{
        let isEmailExist = await User.find({email});
        if(isEmailExist.length > 0){
            bcrypt.compare(password, isEmailExist[0].password).then(function(result) {
                // result == true
                if(result){
                    res.send({
                        success: "Login Successfull",
                        fullname: isEmailExist.fullname,
                        email: isEmailExist.email,
                    })
                }else{
                    res.json({"error": "Password not match"})
                }
            });
        }else{
            res.json({"error": "Email not match"})
        }
    }
}
module.exports = loginController