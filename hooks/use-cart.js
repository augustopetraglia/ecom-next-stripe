import { useState, createContext, useContext, useEffect } from "react"
import { initiateCheckout } from '../lib/payments'
import products from '../products.json'

const defaultCart = {
  products: {}
}

export const CartContext = createContext();

export function useCartState() {
  const [cart, updateCart] = useState(defaultCart)

  useEffect(()=> {
    const stateFromStorage = window.localStorage.getItem('ecommerce_cart');
    const data = stateFromStorage && JSON.parse(stateFromStorage);
    if (data) {
      updateCart(data);
    }
  },[])

  useEffect(()=>{
    const data = JSON.stringify(cart);
    window.localStorage.setItem('ecommerce_cart', data);
  }, [cart])
  
  const cartItems = Object.keys(cart.products).map(key => {
    const product = products.find(({ id }) => `${id}` === `${key}`);
    return {
      ...cart.products[key],
      pricePerItem: product.price
    }
  })
  
  const subTotal = cartItems.reduce((accumulator, { pricePerItem, quantity }) => {
    return accumulator + ( pricePerItem * quantity )
  }, 0)

  const totalItems = cartItems.reduce((accumulator, { quantity }) => {
    return accumulator + quantity
  }, 0)
  
  
  console.log("cartItems es", cartItems)
  console.log("subTotal", subTotal)

  function checkout() {
    initiateCheckout({
      lineItems: cartItems.map(item => {
        return {
          price: item.id,
          quantity: item.quantity
        }
      })
    });
  }
  
  function addToCart({ id } = {}) {
    updateCart(prev => {
      let cartState = {...prev};

      if (cartState.products[id]) {
        cartState.products[id].quantity = cartState.products[id].quantity + 1;
      } else {
        cartState.products[id] = {
          id,
          quantity: 1
        }
      }

      return cartState;
    })
  }
  
  return {
    cart, 
    updateCart,
    subTotal,
    cartItems,
    totalItems,
    checkout,
    addToCart
  }
}

export function useCart() {
  const cart = useContext(CartContext);
  return cart;
}