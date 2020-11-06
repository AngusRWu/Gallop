var express = require("express");
var nodemailer = require('nodemailer');
 
//use the application off of express.
var app = express();

//define the route for "/"
app.get("/", function (request, response){
    response.sendFile(__dirname+"/sendingEmail.html");
});

app.get("/getemail", function (request, response){
    var sender = request.query.sender;
    var receiver = request.query.receiver;
    var password = request.query.password;
    var message = request.query.message;

    if (sender != "" && receiver != "" && password != "" && message != "") {
        var transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: sender,
                pass: password
            }
        });
        
        var mailOptions = {
            from: sender,
            to: receiver,
            subject: 'You received a message from Gallop!',
            text: message
        }
        
        transporter.sendMail(mailOptions, function(error, info){
            if (error) {
                console.log(error);
            } else {
                console.log('Email sent: ' + info.response);
            }
        });

        response.send("Message sent!");
    } else {
        response.send("Please provide all information.");
    }
});

//start the server
app.listen(8080);