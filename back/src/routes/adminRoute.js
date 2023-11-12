const express = require('express');
const router = express.Router();
const adminController = require('../controllers/adminController');

// Route to get all orders with details
router.post('/admin', adminController.addAdmin);

module.exports = router;
