  // buyerController.js

  const Buyer = require('../models/buyerModel.js');
  const Order = require('../models/orderModel');
  const Product = require('../models/productModel.js')

  // Controller to add a new buyer
  const addBuyer = async (req, res) => {
    try {
      const { name, email, address,password } = req.body;
      const newBuyer = new Buyer({ name, email, address,password });
      await newBuyer.save();
      res.status(201).json(newBuyer);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  };
  // Controller to get all buyers
  const getAllBuyers = async (req, res) => {
    try {
      const buyers = await Buyer.find();
      res.json(buyers);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  }
    const placeOrder = async (req, res) => {
      try {
        const { buyerId, productId, quantity } = req.body;
    
        // Create the order
        const order = await Order.create({
          buyer: buyerId,
          product: productId,
          quantity,
          status: 'pending',
        });
    
        // Update the buyer's orders
        const updatedBuyer = await Buyer.findByIdAndUpdate(
          buyerId,
          { $push: { orders: order._id } },
          { new: true }
        );
    
        // Update the product's orders (optional, based on your use case)
        const updatedProduct = await Product.findByIdAndUpdate(
          productId,
          { $push: { orders: order._id } },
          { new: true }
        );
    
        res.status(201).json({ buyer: updatedBuyer, product: updatedProduct, order });
      } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error', details: error.message });
      }
  };
  module.exports = { placeOrder,addBuyer, getAllBuyers };
