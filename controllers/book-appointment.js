const User = require('../model/user'); 
const nodemailer = require('nodemailer');

exports.bookAppointent = (req,res,next) => {
    const {date} = req.body;

    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: 'rajatgouri020@gmail.com',
          pass: ''
        }
      });
    
      var mailOptions = {
        from: 'rajatgouri020@gmail.com',
        to: 'rajatgouri020@gmail.com',
        subject: 'Ventinghub Appointment',
        text: `Hi, Your Booking with counsellor will be sechdule on ${date} Thankyou`
      };
      
      transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
        }
      });

}