import React, { useState } from 'react';
import Navbar from './Navbar';
import ProductPage from './ProductPage';
import CartPage from './CartPage';

const Homepage = () => {
  const [currentPage, setCurrentPage] = useState('Home');

  const renderPage = () => {
    switch (currentPage) {
      case 'Home':
        return <h1>Home</h1>;
      case 'Product':
        return <ProductPage />;
      case 'Add to Cart':
        return <CartPage />;
      default:
        return <h1>Home</h1>;
    }
  };

//   return (
//     <div>
//       <Navbar setCurrentPage={setCurrentPage} />
//       {renderPage()}
//     </div>
//   );
};

export default Homepage;
