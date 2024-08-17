import React from 'react';

const HomePage = () => {
  return (
    <div className="home-container">
      {/* Navigation Bar */}
      <nav className="navbar">
        <div className="logo">ShopMaster</div>
        <div className="search-bar">
          <input type="text" placeholder="Search products..." />
        </div>
        <div className="nav-links">
          <button className="nav-button">Login</button>
          <button className="nav-button">Signup</button>
        </div>
      </nav>

      {/* Promotional Banner */}
      <div className="banner">
        <h1>Welcome to ShopMaster</h1>
        <p>Discover the best products at unbeatable prices!</p>
      </div>

      {/* Categories */}
      <div className="categories">
        <h2>Shop by Category</h2>
        <div className="category-list">
          <div className="category-card">Electronics</div>
          <div className="category-card">Fashion</div>
          <div className="category-card">Home & Kitchen</div>
          <div className="category-card">Books</div>
        </div>
      </div>

      {/* Featured Products */}
      <div className="featured-products">
        <h2>Featured Products</h2>
        <div className="product-list">
          <div className="product-card">
            <img src="https://m.media-amazon.com/images/I/514cBZZxi3L._AC_UF1000,1000_QL80_.jpg" alt="Product 1" />
            <h3>Smart Watch</h3>
            <p>$19.99</p>
          </div>
          <div className="product-card">
            <img src="https://sc04.alicdn.com/kf/H7efe64f0c2f64dc78747a8e9cd6f338dj.jpg" alt="Product 2" />
            <h3>Smart Phone</h3>
            <p>$29.99</p>
          </div>
          <div className="product-card">
            <img src="https://kdbdeals.com/wp-content/uploads/2023/03/Clafoutis-New-Style-Hip-Hop-T-shirt-For-Men-Red.jpg" alt="Product 3" />
            <h3>T-Shirt</h3>
            <p>$39.99</p>
          </div>
          <div className="product-card">
            <img src="https://s.alicdn.com/@sc04/kf/Hc7392e28ef814c5086051962e493b396r.jpg_720x720q50.jpg" alt="Product 4" />
            <h3>Jeans</h3>
            <p>$49.99</p>
          </div>
          <div className="product-card">
            <img src="https://m.media-amazon.com/images/I/51M73SOIdhL._AC_UF1000,1000_QL80_.jpg" alt="Product 4" />
            <h3>Perfume</h3>
            <p>$59.99</p>
          </div>
          <div className="product-card">
            <img src="https://m.media-amazon.com/images/I/81Mh0xLaJgL._AC_UY1100_.jpg" alt="Product 4" />
            <h3>Wallets</h3>
            <p>$69.99</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;