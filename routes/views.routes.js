import {response, Router} from 'express';
import { sendMail } from '../utils/mail.worker.util.js';

const router = Router();

router.get('/', (req, res) => {
    res.render('index', {
        title: "",
        currentPath: 'Home',
        layout:'home',
    });
});

router.get('/about', (req, res) => {
    res.render('index', {
        title: "About |",
        currentPath: 'About',
        layout:'about',
    });
})

router.get('/products', (req, res) => {
    res.render('index', {
        title: "Granite Products ",
        currentPath: 'Products',
        layout:'products',
    });
})

router.get('/projects', (req, res) => {
    res.render('index', {
        title: "Other Granite Projects | ",
        currentPath: 'Projects',
        layout:'projects',
    });
})

router.get('/blog', (req, res) => {
    res.render('index', {
        title: "Blog | ",
        currentPath: 'Blog',
        layout:'blog',
    });
})

router.get('/contact', (req, res) => {
    res.render('index', {
        title: "Contact | ",
        currentPath: 'Contact',
        layout:'contact',
    });
})

router.get('/login', (req, res) => {
    res.render('login', {
        title: "Login",
        currentPath: 'Login',
        layout:'login',
    });
})

router.post('/form/contact', async (req, res) => {
    try {
        const { 'first-name': firstName, 'last-name': lastName, email, phone, subject, message } = req.body;

        // Create the email content
        const emailHtml = `
            <h2>Contact Form Submission</h2>
            <p><strong>First Name:</strong> ${firstName || 'N/A'}</p>
            <p><strong>Last Name:</strong> ${lastName || 'N/A'}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone || 'N/A'}</p>
            <p><strong>Subject:</strong> ${subject || 'N/A'}</p>
            <p><strong>Message:</strong></p>
            <p>${message}</p>
        `;

        const emailSubject = `New Contact Form Submission${subject ? ` - ${subject}` : ''}`;
        const recipientEmail = 'info@indmk.org';

        const isSent = await sendMail({
            to: recipientEmail,
            subject: emailSubject,
            html: emailHtml
        });

        if (isSent) {
            return res.status(200).redirect('/contact?status=success');
        } else {
            return res.status(500).redirect('/contact?status=failure');
        }
    } catch (error) {
        console.error('Error processing contact form:', error);
        return res.status(500).redirect('/contact?status=failure');
    }
});

export default router;