import React from 'react';
import { useContext } from 'react';
import Product from '../components/Product';
import { ProductContext } from '../contexts/ProductContext';

const Home = () => {
  // get products from products contex
  const products = useContext(ProductContext);
  // get only mens & womens clothing category
  const filterProducts = products?.filter((item) => {
    return (
      item.category === "men's clothing" || item.category === "women's clothing"
    );
  });
  return <div>
    <section className='py-16'>
      <div className='container mx-auto'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-[30px] max-w-sm mx-auto md:max-w-none md:mx-0'>
          {filterProducts?.map((product) =>{
            return(
              <Product product={product} key={product.id}></Product>
            )
          })}
        </div>
      </div>
    </section>
  </div>;
};

export default Home;
