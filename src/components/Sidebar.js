import React, { useContext } from 'react';
import { SidebarContext } from '../contexts/SidebarContext';
import {IoMdArrowForward} from 'react-icons/io'
import {FiTrash2} from 'react-icons/fi'
import { cartContext } from '../contexts/CartContext';
import CartItem from './CartItem';
const Sidebar = () => {
  const {isOpen, handleClose} = useContext(SidebarContext);
  const {cart, clearCart, total} = useContext(cartContext);

  return <div className={`${isOpen ? "right-0" : "-right-full"} h-full w-full top-0 bg-white fixed shadow-2xl md:w-[35vw] xl:max-w-[30vw] transition-all duration-300 z-20 px-4 lg:px-[35px]`}>
    <div className='flex justify-between items-center py-6 border-b'>
      <div className='uppercase text-sm font-semibold'>Shopping (0)</div>
      <div onClick={handleClose} className='cursor-pointer w-8 h-8 flex justify-center items-center'>
        <IoMdArrowForward className='text-2xl'></IoMdArrowForward>
      </div>
    </div>

    <div className='flex flex-col gap-y-2 h-[520px] lg:h-[540px] overflow-y-auto overflow-x-hidden border-b'>
      {cart.map(item =>{
      return <CartItem item={item} key={item.id}></CartItem>
    })}
    </div>
    <div className='flex flex-col gap-y-3 py-2 mt-4'>
      <div className='flex justify-between items-center w-full pl-2'>
        <div className='uppercase font-semibold'>
          <span className='mr-2'>Total:</span>$ {parseFloat(total).toFixed(2)}
        </div>
        <div onClick={clearCart} className='cursor-pointer w-12 h-12 p-2 bg-red-500 flex justify-center items-center text-white'>
          <FiTrash2></FiTrash2>
        </div>
      </div>
    </div>
    </div>;
};

export default Sidebar;
