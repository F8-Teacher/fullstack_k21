import Navigo from 'navigo';

import * as home from "../pages/home/home";
import * as about from "../pages/about/about";
import * as product from "../pages/products/products";

export const router = new Navigo('/');

router.on('/', home.init)

router.on('/about', about.init)

router.on('/products/:id', product.init);

router.on('*', () => {
    console.log('Page not found');
})