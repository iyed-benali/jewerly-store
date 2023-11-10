const express = require('express');
const router = express.Router();
const adminController = require('../controllers/adminController');

// Route to get all orders with details
router.get('/admin/orders', adminController.getAllOrdersWithDetails);

module.exports = router;
