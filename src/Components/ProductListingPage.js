import React, { useState } from 'react';

const productsData = [
  { id: 1, name: 'Speacker', category: 'Electronics', price: 199.99, rating: 4.5, image: 'https://m.media-amazon.com/images/I/71XnDQmlVtL._AC_UF1000,1000_QL80_.jpg' },
  { id: 2, name: 'Perfumes', category: 'Fashion', price: 49.99, rating: 3.8, image: 'https://www.adilqadri.com/cdn/shop/files/Aqua_Lavishmusk_93a0e1a0-2500-4418-ba46-956b1bd0976d.jpg?v=1700741690' },
  { id: 3, name: 'Fridge', category: 'Home & Kitchen', price: 29.99, rating: 4.2, image: 'https://5.imimg.com/data5/SELLER/Default/2022/4/OM/TS/DG/44255444/godrej-double-door-refrigerator.jpg' },
  { id: 4, name: 'Shoes', category: 'Fashion', price: 9.99, rating: 4.8, image: 'https://5.imimg.com/data5/SELLER/Default/2022/9/JP/SJ/ED/38630640/casual-shoes-500x500.jpg' },
  { id: 5, name: 'Wallet', category: 'Fashion', price: 10.99, rating: 4.9, image: 'https://m.media-amazon.com/images/I/71-m9eOgQdL._SL1001_.jpg' },
  { id: 6, name: 'Sofa', category: 'Luxury', price: 11.99, rating: 4.7, image: 'https://woodentwist.com/cdn/shop/products/WhatsAppImage2022-08-16at10.01.24PM_1_934x700.jpg?v=1689872555' },
];

const ProductListingPage = () => {
  const [products, setProducts] = useState(productsData);
  const [categoryFilter, setCategoryFilter] = useState('');
  const [priceFilter, setPriceFilter] = useState('');
  const [sortOption, setSortOption] = useState('');

  const handleFilter = () => {
    let filteredProducts = productsData;

    // Filter by category
    if (categoryFilter) {
      filteredProducts = filteredProducts.filter(product => product.category === categoryFilter);
    }

    // Filter by price
    if (priceFilter === 'low') {
      filteredProducts = filteredProducts.filter(product => product.price < 50);
    } else if (priceFilter === 'mid') {
      filteredProducts = filteredProducts.filter(product => product.price >= 50 && product.price <= 150);
    } else if (priceFilter === 'high') {
      filteredProducts = filteredProducts.filter(product => product.price > 150);
    }

    // Sort products
    if (sortOption === 'price-asc') {
      filteredProducts.sort((a, b) => a.price - b.price);
    } else if (sortOption === 'price-desc') {
      filteredProducts.sort((a, b) => b.price - a.price);
    } else if (sortOption === 'popularity') {
      filteredProducts.sort((a, b) => b.rating - a.rating);
    } else if (sortOption === 'newest') {
      filteredProducts.sort((a, b) => b.id - a.id);
    }

    setProducts(filteredProducts);
  };

  return (
    <div className="product-listing-container">
      {/* Filters Section */}
      <div className="filters">
        <h2>Filter Products</h2>
        <div className="filter-option">
          <label>Category:</label>
          <select onChange={(e) => setCategoryFilter(e.target.value)}>
            <option value="">All</option>
            <option value="Electronics">Electronics</option>
            <option value="Fashion">Fashion</option>
            <option value="Home & Kitchen">Home & Kitchen</option>
            <option value="Books">Books</option>
          </select>
        </div>
        <div className="filter-option">
          <label>Price:</label>
          <select onChange={(e) => setPriceFilter(e.target.value)}>
            <option value="">All</option>
            <option value="low">Low (under $50)</option>
            <option value="mid">Mid ($50 - $150)</option>
            <option value="high">High (above $150)</option>
          </select>
        </div>
        <div className="filter-option">
          <label>Sort By:</label>
          <select onChange={(e) => setSortOption(e.target.value)}>
            <option value="">None</option>
            <option value="price-asc">Price (Low to High)</option>
            <option value="price-desc">Price (High to Low)</option>
            <option value="popularity">Popularity</option>
            <option value="newest">Newest</option>
          </select>
        </div>
        <button onClick={handleFilter}>Apply Filters</button>
      </div>

      {/* Product List Section */}
      <div className="product-list">
        {products.map(product => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>${product.price.toFixed(2)}</p>
            <p>Rating: {product.rating}</p>
            <button>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductListingPage;