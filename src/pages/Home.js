import React from 'react';
import { useContext } from 'react';
import { ProductContext } from '../contexts/ProductContext';

const Home = () => {
  // get products from products contex
  const products = useContext(ProductContext);
  console.log(products)
  // get only mens & womens clothing category
  const filterProducts = products?.filter((item) => {
    return (
      item.category === "men's clothing" || item.category === "women's clothing"
    );
  });
  console.log(filterProducts);
  return <div>
    Homepage
  </div>;
};

export default Home;
