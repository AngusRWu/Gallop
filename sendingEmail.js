var nodemailer = require('nodemailer');
var http = require('http');
var events = require('events');

var eventEmitter = new events.EventEmitter();

http.createServer(function(req, res) {
    
    var emailHandler = function() {
        var transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'efrainricardoperez@gmail.com',
                pass: '02570257ep'
            }
        });
        
        var mailOptions = {
            from: 'efrainricardoperez@gmail.com',
            to: 'sharkfin42@gmail.com',
            subject: 'You received a message from Gallop!',
            text: 'That was easy!'
        }
        
        transporter.sendMail(mailOptions, function(error, info){
            if (error) {
                console.log(error);
            } else {
                console.log('Email sent: ' + info.response);
            }
        });
    }

    eventEmitter.on('send', emailHandler);

    res.writeHead(200, {'Content-Type':'text/html'});

    res.write('<form action="sendingemail" method="post" enctype="multipart/form-data">');
    res.write('<input type="text" name="sender" placeholder="Your email"><br>');
    res.write('<input type="password" name="pasword" placeholder="Your email password"><br>');
    res.write('<input type="text" name="receiver" placeholder="Receiver\'s email"><br>');
    res.write('<input type="submit">');
    res.write('</form>');
    
    eventEmitter.emit('send');

    res.end();
}).listen(4000);