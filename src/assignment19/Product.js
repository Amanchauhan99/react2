import axios from "axios";
import React, { useEffect, useState } from "react";
import "./Products.css";
import Products from './Products'

export const Product = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
        setProducts(res.data);
      })
      .catch((err) => {
        console.log("error while fetching products");
      });
  }, []);

  return (
    <div>
      <div>
        <h2> Our Products</h2>
      </div>
      <div className="Product">
        {
            products.map((ele, idx) => {
                return <Products ele={ele} key={idx} />
            })
        }
      </div>
    </div>
  );
};
export default Product