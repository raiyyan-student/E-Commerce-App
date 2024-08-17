import React, { useState } from 'react';

const Checkout = () => {
  const [shippingInfo, setShippingInfo] = useState({
    name: '',
    address: '',
    city: '',
    state: '',
    postalCode: '',
  });

  const [billingInfo, setBillingInfo] = useState({
    cardName: '',
    cardNumber: '',
    expiryDate: '',
    cvv: '',
  });

  const [paymentMethod, setPaymentMethod] = useState('Credit Card');
  const [isOrderConfirmed, setIsOrderConfirmed] = useState(false);

  const handleShippingChange = (e) => {
    setShippingInfo({ ...shippingInfo, [e.target.name]: e.target.value });
  };

  const handleBillingChange = (e) => {
    setBillingInfo({ ...billingInfo, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form validation and API call to process payment here
    setIsOrderConfirmed(true);
  };

  return (
    <div className="checkout-container">
      <h1>Checkout</h1>
      {!isOrderConfirmed ? (
        <form onSubmit={handleSubmit}>
          <div className="form-section">
            <h2>Shipping Information</h2>
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={shippingInfo.name}
              onChange={handleShippingChange}
              required
            />
            <input
              type="text"
              name="address"
              placeholder="Address"
              value={shippingInfo.address}
              onChange={handleShippingChange}
              required
            />
            <input
              type="text"
              name="city"
              placeholder="City"
              value={shippingInfo.city}
              onChange={handleShippingChange}
              required
            />
            <input
              type="text"
              name="state"
              placeholder="State"
              value={shippingInfo.state}
              onChange={handleShippingChange}
              required
            />
            <input
              type="text"
              name="postalCode"
              placeholder="Postal Code"
              value={shippingInfo.postalCode}
              onChange={handleShippingChange}
              required
            />
          </div>

          <div className="form-section">
            <h2>Billing Information</h2>
            <input
              type="text"
              name="cardName"
              placeholder="Name on Card"
              value={billingInfo.cardName}
              onChange={handleBillingChange}
              required
            />
            <input
              type="text"
              name="cardNumber"
              placeholder="Card Number"
              value={billingInfo.cardNumber}
              onChange={handleBillingChange}
              required
            />
            <input
              type="text"
              name="expiryDate"
              placeholder="Expiry Date (MM/YY)"
              value={billingInfo.expiryDate}
              onChange={handleBillingChange}
              required
            />
            <input
              type="text"
              name="cvv"
              placeholder="CVV"
              value={billingInfo.cvv}
              onChange={handleBillingChange}
              required
            />
          </div>

          <div className="form-section">
            <h2>Payment Method</h2>
            <select
              value={paymentMethod}
              onChange={(e) => setPaymentMethod(e.target.value)}
            >
              <option value="Credit Card">Credit Card</option>
              <option value="PayPal">PayPal</option>
              <option value="Bank Transfer">Bank Transfer</option>
            </select>
          </div>

          <button type="submit" className="submit-button">Place Order</button>
        </form>
      ) : (
        <div className="order-confirmation">
          <h2>Order Confirmed!</h2>
          <p>Thank you for your purchase. Your order has been placed successfully.</p>
          <p>Order Number: {Math.floor(Math.random() * 100000000)}</p>
        </div>
      )}
    </div>
  );
};

export default Checkout;