const Order = require('../models/orderModel');
const Buyer = require('../models/buyerModel');
const Product = require('../models/productModel');

// Get all orders with buyer and product details
exports.getAllOrdersWithDetails = async (req, res) => {
  try {
    const orders = await Order.find().populate({
      path: 'product',
      populate: { path: 'product' },
    });

    res.status(200).json(orders);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
