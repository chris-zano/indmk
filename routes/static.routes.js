import { Router } from 'express';
import { fileURLToPath } from 'url';
import path from 'path';
import fs from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const router = Router();

router.get('/favicon.ico', (req, res) => {
    try {
        const file = path.join(__dirname, '../public/images/favicon.ico');

        res.setHeader('Content-Type', 'image/x-icon');
        // res.setHeader('Cache-Control', 'public, max-age=2592000');
        res.status(200);
        fs.createReadStream(file).pipe(res);
    } catch (error) {
        console.error(error)
        res.status(500);
    }
});

router.get('/images/socials/tiktok', (req, res) => {
    try {
        const file = path.join(__dirname, '..', 'public', 'images', 'tiktok.avif');

        res.setHeader('Content-Type', 'image/x-icon');
        // res.setHeader('Cache-Control', 'public, max-age=2592000');
        res.status(200);
        fs.createReadStream(file).pipe(res);
    } catch (error) {
        console.error(error)
        res.status(500);
    }
})
router.get('/images/socials/instagram', (req, res) => {
    try {
        const file = path.join(__dirname, '..', 'public', 'images', 'instagram.avif');

        res.setHeader('Content-Type', 'image/x-icon');
        // res.setHeader('Cache-Control', 'public, max-age=2592000');
        res.status(200);
        fs.createReadStream(file).pipe(res);
    } catch (error) {
        console.error(error)
        res.status(500);
    }
})
router.get('/images/social/facebook', (req, res) => {
    try {
        const file = path.join(__dirname, '..', 'public', 'images', 'facebook.avif');

        res.setHeader('Content-Type', 'image/x-icon');
        // res.setHeader('Cache-Control', 'public, max-age=2592000');
        res.status(200);
        fs.createReadStream(file).pipe(res);
    } catch (error) {
        console.error(error)
        res.status(500);
    }
})
router.get('/images/socials/linkedin', (req, res) => {
    try {
        const file = path.join(__dirname, '..', 'public', 'images', 'linkedin.avif');

        res.setHeader('Content-Type', 'image/x-icon');
        // res.setHeader('Cache-Control', 'public, max-age=2592000');
        res.status(200);
        fs.createReadStream(file).pipe(res);
    } catch (error) {
        console.error(error)
        res.status(500);
    }
})
router.get('/images/socials/youtube', (req, res) => {
    try {
        const file = path.join(__dirname, '..', 'public', 'images', 'youtube.avif');

        res.setHeader('Content-Type', 'image/x-icon');
        // res.setHeader('Cache-Control', 'public, max-age=2592000');
        res.status(200);
        fs.createReadStream(file).pipe(res);
    } catch (error) {
        console.error(error)
        res.status(500);
    }
})

router.get('/images/image/:filename', (req, res) => {
    try {
        const file = path.join(__dirname, '..', 'public', 'images', req.params.filename);

        res.setHeader('Content-Type', 'image/x-icon');
        // res.setHeader('Cache-Control', 'public, max-age=2592000');
        res.status(200);
        fs.createReadStream(file).pipe(res);
    } catch (error) {
        console.error(error)
        res.status(500);
    }
});

router.get('/css/:filename', (req, res) => {
    try {
        const file = path.join(__dirname, '..', 'public', 'css', req.params.filename);

        res.setHeader('Content-Type', 'text/css');
        // res.setHeader('Cache-Control', 'public, max-age=2592000');
        res.status(200);
        fs.createReadStream(file).pipe(res);
    } catch (error) {
        console.error(error)
        res.status(500);
    }
});

router.get('/fonts/:filename', (req, res) => {
    try {
        const file = path.join(__dirname, '..', 'public', 'fonts', req.params.filename);

        res.setHeader('Content-Type', 'text/woff2');
        // res.setHeader('Cache-Control', 'public, max-age=2592000');
        res.status(200);
        fs.createReadStream(file).pipe(res);
    } catch (error) {
        console.error(error)
        res.status(500);
    }
});

export default router;