  // buyerController.js

  const Buyer = require('../models/buyerModel.js');
  const Order = require('../models/orderModel');
  const Product = require('../models/productModel.js')

  // Controller to add a new buyer
  const addBuyer = async (req, res) => {
    try {
      const { uid,name, email, address,password } = req.body;
      const newBuyer = new Buyer({ uid,name, email, address,password });
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
  const getBuyerById = async (req, res) => {
    try {
      const buyerId = req.params.buyerId;
      const buyer = await Buyer.findById(buyerId);
      res.status(200).json(buyer);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };
  
  const getOrderWithDetails = async (req, res) => {
    try {
      const orderId = req.params.orderId;
  
      // Fetch the order along with buyer and product details
      const orderWithDetails = await Order.findById(orderId)
        .populate('buyer', 'uid name email address') // Assuming these are the fields you want from the buyer
        .populate('product', 'name price description category imageUrl'); // Assuming these are the fields you want from the product
  
      if (!orderWithDetails) {
        return res.status(404).json({ error: 'Order not found' });
      }
  
      res.status(200).json(orderWithDetails);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };
  


  module.exports = { getOrderWithDetails,getBuyerById,placeOrder,addBuyer, getAllBuyers };
