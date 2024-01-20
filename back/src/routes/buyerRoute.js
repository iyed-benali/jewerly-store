// buyerRoutes.js

const express = require('express');
const router = express.Router();
const buyerController = require('../controllers/buyerController');


// Route to add a buyer
router.post('/buyers', buyerController.addBuyer);

// Route to get all buyers
router.get('/buyers', buyerController.getAllBuyers);

router.post('/place-order', buyerController.placeOrder);
router.get('/oneBuyer/:buyerId', buyerController.getBuyerById);
router.get('/orderData/:orderId',buyerController.getOrderWithDetails)

module.exports = router;
