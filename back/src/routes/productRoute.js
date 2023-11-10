const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController.js')

// Route to add a product
router.post('/products', productController.addProduct);

// Route to get all products
router.get('/products', productController.getAllProducts);

module.exports = router;