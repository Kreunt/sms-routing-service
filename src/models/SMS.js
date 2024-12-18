const mongoose = require('mongoose');

const smsSchema = new mongoose.Schema({
  sender: { type: String, required: true },
  recipient: { type: String, required: true },
  messageType: { type: String, enum: ['OTP', 'PROMOTIONAL'], required: true },
  carrier: { type: String, required: true },
  timestamp: { type: Date, default: Date.now },
  deliveryStatus: { type: String, enum: ['PENDING', 'SENT', 'FAILED'], default: 'PENDING' },
});

module.exports = mongoose.model('SMS', smsSchema);
