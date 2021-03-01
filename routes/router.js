const { Router } = require('express');
const nodemailer = require('nodemailer');
const router = Router();

router.post('/send-email', async (req, res) => {
    const { email, message } = req.body;

    contentHTML = `
    <h1>Email desde website personal</h1>  
    <h3>Email: ${email}</h3>
    <p>Mensaje: ${message}</p>`;

    const transporter = nodemailer.createTransport({
        service: 'gmail',

        auth: {
            user: 'megafonomailer@gmail.com',
            pass: 'IvoVirginia2017'
        },
        tls: { rejectUnauthorized: false }
    });

    const info = await transporter.sendMail({
        from: 'Website',
        to: 'andresfs.110@gmail.com',
        subject: 'Mensaje desde website',
        html: contentHTML
    }, (err, i) => {
        if (err) {
            console.log('ERROR')
            res.status(500)
        } else {
            console.log('ENVIADO')
            res.status(200).redirect('/alert.html')
        }
    });
});

module.exports = router;