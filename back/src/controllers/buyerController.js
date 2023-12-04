// buyerController.js

const Buyer = require('../models/buyerModel.js');


// Controller to add a new buyer
const addBuyer = async (req, res) => {
  try {
    const { name, email, address } = req.body;
    const newBuyer = new Buyer({ name, email, address });
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
      const order = await Order.create({ product: productId, quantity, status: 'pending' });
      const buyer = await Buyer.findByIdAndUpdate(
        buyerId,
        { $push: { orders: order._id } },
        { new: true }
      );
      res.status(201).json({ buyer, order });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
};
module.exports = { placeOrder,addBuyer, getAllBuyers };
