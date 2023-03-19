import React, { useContext } from 'react';
import { IoMdAdd, IoMdClose, IoMdRemove } from 'react-icons/io';
import { Link } from 'react-router-dom';
import { cartContext } from '../contexts/CartContext';

const CartItem = ({item}) => {
  const {removeFromCart, increaseAmount, decreaseAmount} = useContext(cartContext);
  const {id, title, image, price, amount} = item;

  return <div className='flex gap-x-4 py-2 lg:px-6 border-b border-gray-200 text-gray-500 font-light'>
    <div className='w-full min-h-[150px] flex items-center gap-x-4'>
      {/* image */}
      <Link to={`/product/${id}`}>
           <img className='max-w-[80px]' src={item.image} alt=''></img>
      </Link>
      <div className='w-full flex flex-col'>
        {/* title & remove icon */}
        <div className='flex justify-between mb-2'>
          <Link className='text-sm font-medium uppercase max-w-[280px] text-primary hover:underline' to={`/product/${id}`}>{item.title}</Link>
          {/* remove icon */}
        <div className='text-xl cursor-pointer'>
        <IoMdClose onClick={() => removeFromCart(id)} className='text-gray-500 hover:text-red-500'></IoMdClose>
        </div>
        </div>
        <div className='text-sm flex h-[36px] gap-x-2'>
        <div className='flex flex-1 max-w-[100px] items-center h-full border font-medium'>
          <div onClick={() => decreaseAmount(id)} className='flex-1 flex justify-center items-center h-full cursor-pointer'>
          <IoMdRemove></IoMdRemove>
          </div>
          <div className='flex justify-center items-center h-full px-2'>
            {amount}
          </div>
          <div onClick={() => increaseAmount(id)} className='flex-1 flex justify-center items-center h-full cursor-pointer'>
            <IoMdAdd></IoMdAdd>
          </div>
        </div>
        <div className='flex-1 flex justify-around items-center'>$ {price}</div>
        <div className='felx-1 flex justify-end items-center text-primary font-medium'>{`$ ${parseFloat(price*amount).toFixed(2)}`}</div>
        </div>
      </div>
    </div>
  </div>;
};

export default CartItem;
