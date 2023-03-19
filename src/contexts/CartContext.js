import React, { createContext, useEffect, useState } from 'react';

export const cartContext = createContext();
const CartProvider = ({children}) => {
  const [cart, setCart] =useState([]);
  const [itemAmount, setItemAmount] = useState(0);
  const [total, setTotal] = useState(0);

  //total
  useEffect(() => {
    const total = cart.reduce((accumulator, currentItem)=>{
      return accumulator + currentItem.price * currentItem.amount;
    }, 0);
    setTotal(total);
  })
  // update itmeAmount
  useEffect(() =>{
    if(cart){
      const amount = cart.reduce((accumulator, currentItem)=>{
        return accumulator + currentItem.amount;
      }, 0);
      setItemAmount(amount);
    }
  },[cart])

  const addToCart = (product, id) =>{
     const newItem = {...product, amount:1};
    // check item is already in the cart
    const cartItem = cart.find((item) =>{
      return item.id === id;
    });
    // if cartItem is already in the cart
    if(cartItem){
      const newCart = [...cart].map((item) =>{
        if(item.id===id){
          return {...item, amount: cartItem.amount +1}
        }else{
          return item;
        }
      });
      setCart(newCart);
    }else{
      setCart([...cart, newItem]);
    }
  }

  const removeFromCart = (id) =>{
    const newCart = cart.filter(item =>{
      return item.id !==id;
    })
    setCart(newCart);
  }

  const clearCart = (cart) =>{
    setCart([]);
  }
  const increaseAmount = (id) => {
    const item = cart.find((item) =>{
      return item.id === id;
    });
    addToCart(item, id)
  }
  const decreaseAmount = (id) => {
    const cartItem = cart.find((item) =>{
      return item.id === id;
    });
    if(cartItem){
      const newCart = [...cart].map((item) =>{
        if(item.id===id){
          return {...item, amount: cartItem.amount -1}
        }else{
          return item;
        }
      });
      setCart(newCart);
    };
    
    if(cartItem.amount < 2){
        removeFromCart(id);
      }
    
  };
  console.log(cart)
  return <cartContext.Provider value={
    {cart,
     addToCart, 
     removeFromCart, 
     clearCart, 
     increaseAmount, 
     decreaseAmount,
     itemAmount,
     total
     }}>
    {children}
    </cartContext.Provider>;
};

export default CartProvider;
