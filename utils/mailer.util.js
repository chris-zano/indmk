import { parentPort } from 'worker_threads';
import nodemailer from 'nodemailer';

// Function to send the email
const sendMail = async ({ to, subject, html }) => {
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.SYSTEM_EMAIL,
            pass: process.env.SYSTEM_EMAIL_PASSWORD
        }
    });

    const mailOptions = {
        from: process.env.SYSTEM_EMAIL,
        to,
        subject,
        html
    };

    try {
        const info = await transporter.sendMail(mailOptions);
        parentPort.postMessage({ success: true, response: info.response });
    } catch (error) {
        parentPort.postMessage({ success: false, error: error.message });
    }
};

// Listen for messages from the main thread
parentPort.on('message', async (data) => {
    await sendMail(data);
});
