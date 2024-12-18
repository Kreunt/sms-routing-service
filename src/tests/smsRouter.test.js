const SMSRouter = require('../services/SMSRouter');

test('Routes OTP messages to Carrier_A', () => {
  const router = new SMSRouter();
  expect(router.getCarrier('OTP')).toBe('Carrier_A');
});

test('Routes PROMOTIONAL messages to Carrier_B', () => {
  const router = new SMSRouter();
  expect(router.getCarrier('PROMOTIONAL')).toBe('Carrier_B');
});

test('Returns null for invalid message type', () => {
  const router = new SMSRouter();
  expect(router.getCarrier('INVALID')).toBeNull();
});
