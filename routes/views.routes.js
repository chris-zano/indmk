import {Router} from 'express';

const router = Router();

router.get('/', (req, res) => {
    res.render('index', {
        title: "",
        currentPath: 'Home',
        layout:'home',
    });
});

export default router;