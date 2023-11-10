const express = require('express')
const database = require('./src/config/database')
const app = express()
// const Buyer = require('./src/models/buyerModel')
// const Product = require('./src/models/productModel')
// const Order = require('./src/models/orderModel')
const buyerRoutes = require('./src/routes/buyerRoute');
const productRoutes =require('./src/routes/productRoute.js')
const orderRoutes = require('./src/routes/orderRoute.js');


app.use(express.json());
app.use('/api', buyerRoutes);
app.use('/api', productRoutes);
app.use('/api', orderRoutes);


const PORT = process.env.PORT || 3001

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`)
})  