const express = require("express");
const router = express.Router(); 
const bcrypt = require("bcrypt");
const aleaRNGFactory = require("number-generator/lib/aleaRNGFactory");
const emailValidation = require("../helpers/emailValidation.js")
const User = require("../models/userModels.js");
const registrationOtp = require("../emailtemplate/registrationOtp.js")
const sendEmail = require("../helpers/sendEmail.js")

let registrationController = async (req, res)=>{

    const {fullname, email, password, avater, facebookId, linkedinId} = req.body
    
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
        let duplicateEmail = await User.find({email: email})
        if(duplicateEmail.length > 0){
            return res.send({error: "Email already existed. "})
        }
        bcrypt.hash(password, 8, async function(err, hash) {
            const user = new User({
                fullname,
                email,
                password: hash,
                avater,
                facebookId,
                linkedinId
            });
            user.save()
            const generator2 = aleaRNGFactory(Date.now());
            let randomNumber = generator2.uInt32().toString().substring(0,6);
            let randomOtpStore = await User.findOneAndUpdate(
                {email},
                {$set: {randomOtp:randomNumber}},
                {new: true}
            )

            sendEmail(email,randomOtpStore.randomOtp,registrationOtp)

                //=========== OTP Remove after 1 minutes =============

            // setTimeout(async function(){
            //     let randomOtpStore = await User.findOneAndUpdate(
            //         {email},
            //         {$unset: {randomOtp: ""}},
            //         {new: true}
            //     )
            //     console.log("otp delete hoice");
            // },60000)

            res.send({
                success: "Registration Successfully. Please Verify your account..",
                fullname: user.fullname,
                email: user.email,
            })

        });
    }
}

module.exports = registrationController