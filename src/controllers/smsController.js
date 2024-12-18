const SMS = require('../models/SMS');
const SMSRouter = require('../services/SMSRouter');

const smsRouter = new SMSRouter();

exports.routeSMS = async (req, res) => {
  const { sender, recipient, messageType } = req.body;

  // Get carrier using Strategy
  const carrier = smsRouter.getCarrier(messageType);
  if (!carrier) return res.status(400).json({ error: 'Invalid message type' });

  const sms = new SMS({
    sender,
    recipient,
    messageType,
    carrier,
  });

  try {
    await sms.save();
    console.log(`SMS saved: ${sms}`);
  } catch (error) {
    return res.status(500).json({ error: 'Failed to save SMS' });
  }


  res.status(201).json({ message: 'SMS routed', sms });
};
