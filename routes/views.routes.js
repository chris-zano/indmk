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

export default router;