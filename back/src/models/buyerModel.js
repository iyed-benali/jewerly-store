const mongoose = require('mongoose');

const buyerSchema = new mongoose.Schema({
  uid: {
    type: String,
    required: true,
    unique: true,
  },
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  address: {
    type: String,
    required: true,
  },
  password : {
type :String , 
required : true
  },
  orders: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Order',
  }],
});


const Buyer = mongoose.model('Buyer', buyerSchema);

module.exports = Buyer;
