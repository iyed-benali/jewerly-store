const mongoose = require('mongoose')

const orderSchema = new mongoose.Schema({
    product : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'Product',
        required : true
    },
    quantity: {
        type : Number,
        required : true,
    },
    status : {
 type : String ,
 enum : ['pending','completed'],
 default : 'pending'
    }

})

const Order = mongoose.model('Order', orderSchema);
module.exports =Order