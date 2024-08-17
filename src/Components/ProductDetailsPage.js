import React from 'react';

const product = {
  id: 1,
  name: 'Stylish Shirts',
  description: 'This is a detailed description of the product. It includes information about features, specifications, and benefits.',
  price: 199.99,
  availability: 'In Stock',
  rating: 4.5,
  images: [
    'https://evilato.com/wp-content/uploads/2022/02/IMG-20220208-WA0003.jpg',
    'https://tiimg.tistatic.com/fp/1/007/799/men-elegant-look-breathable-comfortable-stylish-fashionable-casual-shirt--916.jpg',
    'https://5.imimg.com/data5/DK/LM/MY-8811110/men-stylish-shirt.jpg',
    'https://images-cdn.ubuy.ae/64399b2dde56bd4d50068058-amtdh-men-s-trendy-base-shirt-clearance.jpg',
  ],
  reviews: [
    { user: 'John Doe', comment: 'Great product!', rating: 5 },
    { user: 'Jane Smith', comment: 'Very useful and worth the price.', rating: 4 },
  ],
  relatedProducts: [
    { id: 2, name: 'Related Product 1', price: 99.99, image: 'https://tiimg.tistatic.com/fp/1/007/551/casual-wear-round-neck-fullsleeve-white-colour-mens-printed-t-shirts-185.jpg' },
    { id: 3, name: 'Related Product 2', price: 129.99, image: 'https://www.jiomart.com/images/product/original/rv4yfiu8ue/qlonz-store-men-full-sleeve-solid-shirt-mens-shirt-shirts-for-men-shirts-product-images-rv4yfiu8ue-0-202306250459.jpg?im=Resize=(500,630)' },
  ],
};

const ProductDetailsPage = () => {
  return (
    <div className="product-details-container">
      {/* Product Image Gallery */}
      <div className="image-gallery">
        {product.images.map((image, index) => (
          <img key={index} src={image} alt={`Product ${index + 1}`} />
        ))}
      </div>

      {/* Product Info */}
      <div className="product-info">
        <h1>{product.name}</h1>
        <p className="description">{product.description}</p>
        <p className="price">${product.price.toFixed(2)}</p>
        <p className="availability">{product.availability}</p>
        <button>Add to Cart</button>
      </div>

      {/* User Reviews */}
      <div className="user-reviews">
        <h2>User Reviews</h2>
        {product.reviews.map((review, index) => (
          <div key={index} className="review">
            <p className="review-user">{review.user}</p>
            <p className="review-comment">{review.comment}</p>
            <p className="review-rating">Rating: {review.rating} / 5</p>
          </div>
        ))}
      </div>

      {/* Related Products */}
      <div className="related-products">
        <h2>Related Products</h2>
        <div className="related-products-list">
          {product.relatedProducts.map((relatedProduct) => (
            <div key={relatedProduct.id} className="related-product-card">
              <img src={relatedProduct.image} alt={relatedProduct.name} />
              <h3>{relatedProduct.name}</h3>
              <p>${relatedProduct.price.toFixed(2)}</p>
              <button>View Details</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsPage;