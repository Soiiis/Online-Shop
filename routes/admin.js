const path = require('path');
const rootDir = require('../util/path');
const adminController = require('../controllers/admin');
const express = require('express');

const router = express.Router();
// /admin/add-product => GET
router.use('/add-product', adminController.getAddProduct);
// /admin/product => POST
  
router.post('/product', adminController.postAddProduct);

// /admin/products => GET
router.use('/products', adminController.getAdminProducts);

module.exports = router;

