const nodemailer = require("nodemailer");
async function sendEmail(email,varify,template){

    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: 'siam.info.dev@gmail.com',
          pass: 'idyqfrrchmdwgwqy'
        }
      });

    const info = await transporter.sendMail({
        from: 'siam.info.dev@gmail.com',
        to: email,
        subject: "Oribi e-commerce registration successfull and verify your account",
        html: template(varify), // html body
    });
    
    
}


    

module.exports = sendEmail