const User = require("../models/userModels");

let emailVerificationOtpMatch = async (req,res) => {
    const {email, randomOtp} = req.body;

    let findOtp = await User.find({email})
    if(findOtp.length > 0){
        if(randomOtp == findOtp[0].randomOtp){
            let removeOtpAfterMatch = await User.findOneAndUpdate(
                {email},
                {$unset: {randomOtp: ""}},
                {new: true}
            );
            res.json({"success" : "OTP Matched"})
        }else{
            res.json({"error" : "OTP not Matched"})
        }
    }
    
    console.log(email, randomOtp);
}

module.exports = emailVerificationOtpMatch