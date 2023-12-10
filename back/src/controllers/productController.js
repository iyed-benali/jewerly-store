const Product = require('../models/productModel');

// Add a product
exports.addProduct = async (req, res) => {
  try {
    const { name, price, description, category,imageUrl } = req.body;
    const product = await Product.create({ name, price, description,category,imageUrl });
    res.status(201).json(product);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Get all products
exports.getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
