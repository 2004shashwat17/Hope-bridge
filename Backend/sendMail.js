require('dotenv').config();
const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

app.post('/send-mail', async (req, res) => {
    const { to, subject, text, html } = req.body;

    if (!to || !subject || !text) {
        return res.status(400).json({ error: "To, subject, and text are required." });
    }

    let transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: process.env.SMTP_PORT,
        secure: false,
        auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASS
        }
    });

    try {
        let info = await transporter.sendMail({
            from: process.env.SMTP_USER,
            to,
            subject,
            text,
            html: html || `<b>${text}</b>`
        });
        console.log(`Mail sent to ${to}: ${info.messageId}`);
        res.json({ message: "Message sent", messageId: info.messageId });
    } catch (error) {
        console.error("Mail send error:", error);
        res.status(500).json({ error: error.message });
    }
});

module.exports = app;