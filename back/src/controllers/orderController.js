const Order = require('../models/orderModel');

// Add an order
exports.addOrder = async (req, res) => {
  try {
    const { buyer,product, quantity, status } = req.body;
    const order = await Order.create({ buyer,product, quantity, status });
    res.status(201).json(order);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
// Get all orders
exports.getAllOrders = async (req, res) => {
  try {
    const orders = await Order.find();
    res.status(200).json(orders);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

