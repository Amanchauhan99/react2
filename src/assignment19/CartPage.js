import React, { useState } from 'react';

const CartPage = () => {
  const [cartItems, setCartItems] = useState([]);

  const handleAddToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  const handleRemoveItem = (productId) => {
    setCartItems(cartItems.filter(item => item.id !== productId));
  };

  return (
    <div>
      <h1>Add to Cart</h1>
      {/* Display cart items */}
      <div className="card-container">
        {cartItems.map(item => (
          <div key={item.id} className="card">
            <img src={item.image} alt={item.title} />
            <h3>{item.title}</h3>
            <p>Price: ${item.price}</p>
            <p>Category: {item.category}</p>
            <button onClick={() => handleRemoveItem(item.id)}>Remove Item</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CartPage;
