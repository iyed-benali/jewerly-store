const express = require('express')
const database = require('./src/config/database')
const app = express()

const cors = require('cors')

const buyerRoutes = require('./src/routes/buyerRoute');
const productRoutes =require('./src/routes/productRoute.js')
const orderRoutes = require('./src/routes/orderRoute.js');
const adminRoutes = require('./src/routes/adminRoute');


app.use(cors());
app.use(express.json());
app.use('/api', buyerRoutes);
app.use('/api', productRoutes);
app.use('/api', orderRoutes);
app.use('/api', adminRoutes);


const PORT = process.env.PORT || 3001

app.listen(PORT,()=>{
    console.log(`server listening on port   ${PORT}`)
})