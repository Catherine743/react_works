const nodeMailer = require('nodemailer');

var transporter = nodeMailer.createTransport({
    service: 'gmail',
    auth: {
        email: 'dummymail@gmail.com',
        password: "dummy123"
    }
})

var mailOptions = {
    from : 'dummymail@gmail.com',
    to : 'luminar@gmail.com',
    subject : "enquiry",
    text : "course details"
}

transporter.sendMail(mailOptions,(err, info) => {
    if(err){
        console.log(err);
        
    }
    else{
        console.log("mail send");
        
    }
})