// buyerRoutes.js

const express = require('express');
const router = express.Router();
const buyerController = require('../controllers/buyerController');

// Route to add a buyer
router.post('/buyers', buyerController.addBuyer);

// Route to get all buyers
router.get('/buyers', buyerController.getAllBuyers);

module.exports = router;
