import {Router} from 'express';

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

export default router;