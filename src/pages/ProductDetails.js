import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { cartContext } from '../contexts/CartContext';
import { ProductContext } from '../contexts/ProductContext';
const ProductDetails = () => {
  const {id} = useParams();
  const products = useContext(ProductContext);
  const {addToCart} = useContext(cartContext);

  const product = products?.find((item) =>{
    return item.id === parseInt(id);
  });

  if(!product){
    return <section className='h-screen flex justify-center items-center text-xl font-semibold'>Loading....</section>
  }
  const {title, price, description, image} = product;
  return <section className='pt-32 pb-121 lg:py-12 h-screen flex items-center'>
    <div className='container mx-auto'>
      <div className='flex flex-col lg:flex-row items-center'>
      <div className='flex-1 flex justify-center items-center mb-8 lg:mb-0'>
         <img className='max-w-[200px] lg:max-w-xs' src={image} alt=''></img>
      </div>
      <div className='flex-1 text-center lg:text-left'>
         <h2 className='text-[26px] max-w-[450px] font-medium mb-2 mx-auto lg:mx-0'>{title}</h2>
         <h2 className='font-medium text-xl text-red-500 mb-6'>$ {price}</h2>
         <p className='text-base mb-6'>{description}</p>
         <button onClick={() => addToCart(product, product.id)} className='bg-primary text-white py-3 px-4'>Add to cart</button>
      </div>
      </div>
    </div>
  </section>;
};

export default ProductDetails;
