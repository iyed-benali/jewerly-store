const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');
const buyerSchema = new mongoose.Schema({
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
  orders: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Order',
  }],
});
buyerSchema.plugin(passportLocalMongoose);

const Buyer = mongoose.model('Buyer', buyerSchema);

module.exports = Buyer;
