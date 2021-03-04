const { Router } = require('express');
const nodemailer = require('nodemailer');
const router = Router();

router.post('/send-email', async (req, res) => {
    const { name, email, message } = req.body;

    contentHTML = `
    <h1>Email desde website personal</h1>  
    <h3>Nombre: ${name}</h3>
    <h3>Email: ${email}</h3>
    <p>Mensaje: ${message}</p>`;

    const transporter = nodemailer.createTransport({
        host: '',
        port: 587,
        secure: false,
        auth: {
            user: '',
            pass: ''
        },
        tls: { rejectUnauthorized: false }
    });

    const info = await transporter.sendMail({
        from: 'WEBSITE -- <postmaster@sandbox461bdf56a756447ca2e2e30ce86d4d11.mailgun.org>',
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
