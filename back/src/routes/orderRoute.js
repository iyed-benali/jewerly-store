const express = require('express');
const router = express.Router();
const orderController = require('../controllers/orderController');

// Route to add an order
router.post('/orders', orderController.addOrder);

// Route to get all orders
router.get('/orders', orderController.getAllOrders);

module.exports = router;
