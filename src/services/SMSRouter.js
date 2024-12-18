// Strategy classes
class OTPStrategy {
    route(message) {
      return 'Carrier_A';
    }
  }
  
  class PromotionalStrategy {
    route(message) {
      return 'Carrier_B';
    }
  }
  
  // Strategy handler
  class SMSRouter {
    constructor() {
      this.strategies = {
        OTP: new OTPStrategy(),
        PROMOTIONAL: new PromotionalStrategy(),
      };
    }
  
    getCarrier(messageType) {
      const strategy = this.strategies[messageType];
      return strategy ? strategy.route() : null;
    }
  }
  
  module.exports = SMSRouter;
  