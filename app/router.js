import express from 'express';
import allControllers from './controllers/allControllers.js';

const router = express.Router();

router.get('/', allControllers.home);

  router.get('/legumes', allControllers.legumes);

  router.get('/fruits', allControllers.fruits);

router.get('/about', allControllers.about);

router.get('/product/:slug', allControllers.products);

router.get('/product/top', allControllers.top);


  export default router;