const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const app = express();

// Body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// POST route to handle sending emails
app.post('/send-email', (req, res) => {
    const { name, email, subject, message } = req.body;

    // Create a transporter object to send emails
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'YOUR_GMAIL_ADDRESS',
            pass: 'YOUR_GMAIL_PASSWORD'
        }
    });

    // Create a message object
    const mailOptions = {
        from: 'YOUR_NAME <YOUR_GMAIL_ADDRESS>',
        to: email,
        subject: subject,
        html: `<p>${message}</p>`
    };

    // Send the email
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error(error);
            res.status(500).send('Server Error');
        } else {
            console.log(`Email sent: ${info.response}`);
            res.send('Email Sent');
        }
    });
});

const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'youremail@gmail.com',
        pass: 'yourpassword',
    },
});


transporter.sendMail({
    from: '"Your Name" <youremail@gmail.com>', // sender address
    to: "receiverone@gmail.com, receivertwo@outlook.com", // list of receivers
    subject: "Medium @edigleyssonsilva ✔", // Subject line
    text: "There is a new article. It's about sending emails, check it out!", // plain text body
    html: "<b>There is a new article. It's about sending emails, check it out!</b>", // html body
}).then(info => {
    console.log({ info });
}).catch(console.error);
