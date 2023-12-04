const mongoose = require('mongoose')
require('dotenv').config();


mongoose.connect(process.env.MONGO_URL);

const db = mongoose.connection;
db.on('error',console.error.bind(console,'MongoDB connextion error'))
db.once('open' , ()=>{
    console.log(" connected to mongoDB")
})
    
module.exports = mongoose   