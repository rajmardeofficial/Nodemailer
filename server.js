const express = require('express');
const nodemailer = require('nodemailer');

const app = express();

app.set('view engine', 'ejs')
app.use(express.urlencoded({extended: false}));

app.get('/', (req, res)=>{
    res.render('index');
})

app.post('/', (req, res)=>{
    const email = req.body.mail;

    console.log(email)

    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'codingcircle.courses@gmail.com',
            pass:'mypass'
        }
    });

    let mailOptions = {
        from:'CCA TECHNO',
        to: email,
        subject: 'Hello this is test nodemailer email',
        text: 'Thanks for enrolling in course. CCA welcomes you.'
    };

    transporter.sendMail(mailOptions, (error, info)=>{
        if(error){
            console.log(error)
        } else {
            console.log(info);
        }
    })

    

})

app.listen(3000, ()=>console.log('server started on port 3000'))