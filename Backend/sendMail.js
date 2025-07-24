const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors()); // Allow requests from frontend

app.post('/send-mail', async (req, res) => {
    const { to, subject, text, html } = req.body;

    // Basic validation
    if (!to || !subject || !text) {
        return res.status(400).json({ error: "To, subject, and text are required." });
    }

    let transporter = nodemailer.createTransport({
        host: "mail.ljh.com.sg",
        port: 587,
        secure: false,
        auth: {
            user: "notifications@ljh.com.sg",
            pass: "Ljh#251607"
        }
    });

    try {
        let info = await transporter.sendMail({
            from: '"LJH Notifications" <notifications@ljh.com.sg>',
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

const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});