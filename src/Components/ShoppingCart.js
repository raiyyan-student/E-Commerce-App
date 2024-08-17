import React, { useState } from 'react';

const initialCartItems = [
  { id: 1, name: 'Product 1', price: 50, quantity: 2 },
  { id: 2, name: 'Product 2', price: 30, quantity: 1 },
  { id: 3, name: 'Product 3', price: 20, quantity: 3 },
];

const ShoppingCart = () => {
  const [cartItems, setCartItems] = useState(initialCartItems);
  const [coupon, setCoupon] = useState('');
  const [discount, setDiscount] = useState(0);

  const handleQuantityChange = (id, quantity) => {
    const updatedItems = cartItems.map((item) =>
      item.id === id ? { ...item, quantity: quantity } : item
    );
    setCartItems(updatedItems);
  };

  const handleRemoveItem = (id) => {
    const updatedItems = cartItems.filter((item) => item.id !== id);
    setCartItems(updatedItems);
  };

  const handleApplyCoupon = () => {
    if (coupon === 'DISCOUNT10') {
      setDiscount(10);
    } else {
      alert('Invalid Coupon Code');
    }
  };

  const calculateTotal = () => {
    const subtotal = cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
    return subtotal - (subtotal * discount) / 100;
  };

  return (
    <div className="shopping-cart-container">
      <h1>Shopping Cart</h1>

      <div className="cart-items">
        {cartItems.map((item) => (
          <div key={item.id} className="cart-item">
            <h3>{item.name}</h3>
            <p>Price: ${item.price}</p>
            <div className="quantity-control">
              <button
                onClick={() => handleQuantityChange(item.id, Math.max(1, item.quantity - 1))}
              >
                -
              </button>
              <span>{item.quantity}</span>
              <button onClick={() => handleQuantityChange(item.id, item.quantity + 1)}>+</button>
            </div>
            <p>Total: ${(item.price * item.quantity).toFixed(2)}</p>
            <button className="remove-button" onClick={() => handleRemoveItem(item.id)}>
              Remove
            </button>
          </div>
        ))}
      </div>

      <div className="coupon-section">
        <input
          type="text"
          placeholder="Enter Coupon Code"
          value={coupon}
          onChange={(e) => setCoupon(e.target.value)}
        />
        <button onClick={handleApplyCoupon}>Apply Coupon</button>
      </div>

      <div className="cart-summary">
        <h2>Cart Summary</h2>
        <p>Subtotal: ${cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2)}</p>
        <p>Discount: {discount}%</p>
        <h3>Total: ${calculateTotal().toFixed(2)}</h3>
        <button className="checkout-button">Proceed to Checkout</button>
      </div>
    </div>
  );
};

export default ShoppingCart;