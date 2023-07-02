import {GetProductList } from './product.js';
import { addToCart, displayCartItems, clearCart } from './cart.js';

document.addEventListener('DOMContentLoaded', () => {


    let productListDom = GetProductList();
    const productList = document.getElementById('product-list');
    productList.innerHTML = productListDom;

  const cart = document.getElementById('cart');
  const clearBtn = document.querySelector('.btn-clear');

  // Add event listener to each "Add to Cart" button
  const addToCartButtons = document.querySelectorAll('.add-to-cart');
  addToCartButtons.forEach((button) => {
    button.addEventListener('click', addToCart);
  });


  // Clear the cart
  clearBtn.addEventListener('click', () => clearCart(cart));

  // Display cart items
  displayCartItems(cart);

  
  
});
