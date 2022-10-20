const path = require('path');
const rootDir = require('../util/path');
const express = require('express');
const shopController = require('../controllers/shop');

const router = express.Router();
const adminData = require('./admin');
router.get('/', shopController.getIndex);
router.get('/cart', shopController.getCart);
router.post('/cart',shopController.postCart);
router.get('/checkout', shopController.getCheckOut);
router.get('/products/:productId', shopController.getProduct)
router.get('/products', shopController.getProducts);
router.get('/orders', shopController.getOrders);





module.exports = router;
