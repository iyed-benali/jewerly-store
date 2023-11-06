const express = require('express')
const database = require('./src/config/database')
const app = express()
const Buyer = require('./src/models/buyerModel')
const Product = require('./src/models/productModel')
const Order = require('./src/models/orderModel')


const PORT = process.env.PORT || 3001

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`)
})  
