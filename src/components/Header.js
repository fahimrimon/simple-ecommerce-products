import React, { useContext, useEffect, useState } from 'react';
import { BsBag } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import logo from '../img/logo.svg';
import { cartContext } from '../contexts/CartContext';
import { SidebarContext } from '../contexts/SidebarContext';

const Header = () => {

  const [isActive, setIsActive] = useState(false);
  const {isOpen, setIsOpen} = useContext(SidebarContext);
  const {itemAmount} = useContext(cartContext);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY > 60 ? setIsActive(true) : setIsActive(false);
    })
  },[])

  return <header className={`${isActive ? 'bg-white py-4 shadow-xl' : 'bg-white py-6'} fixed w-full transition-all z-10`}>
   <div className='flex justify-between items-center container mx-auto'>
   <Link to={'/'}>
      <div>
        <Link to='/'><img className='w-[40px]' src={logo} alt=''></img></Link>
      </div>
    </Link>
    {/* cart */}
    <div onClick={() => setIsOpen(!isOpen)} className='cursor-pointer flex relative max-w-[50px]'>
      <BsBag className='text-2xl'></BsBag>
      <div className='bg-red-500 absolute -right-2 -bottom-2 text-[12px] w-[18px] h-[18px] text-white rounded-full flex justify-center items-center'>{itemAmount}</div>
    </div>
   </div>
  </header>;
};

export default Header;
