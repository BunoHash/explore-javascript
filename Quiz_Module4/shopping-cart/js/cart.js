import { products } from "./product.js";

let cartItems = [];

export function addToCart(event,ProductCode, ttl) {


    const rowElement = event.target.parentNode.parentNode;
    const productCode = rowElement.children[2].innerHTML;
    const product = products.find(pr=>pr.ProductCode == productCode);


  if (product) {
    const existingCartItem = cartItems.find((item) => item.product.ProductCode === product.ProductCode);
    if (existingCartItem) {
      existingCartItem.quantity++;
    } else {
      cartItems.push({ product, quantity: 1 });
    }
    displayCartItems();
  }
}

export function displayCartItems() {
  const cart = document.getElementById('cart');
  const cartDomItems = document.getElementById('cart-item-list');
  const cartTable = document.getElementById('cart-table');

  
  cart.innerHTML = '';
  let total = 0, discount =0;
  let cartDom = ""

  if (cartItems.length === 0) {
    cart.innerHTML = '<p>Your cart is empty.</p>';
    cartDom = ""
    cartTable.style.visibility = "collapse";
    document.getElementById('cart-clear-button').style.visibility = "hidden";
    return;
  }
  

  cartItems.forEach((item)=>{
     cartDom += (
        `
            <tr class='row'>
                <th>${item.product.Name}</th>
                <th>
                <span class='cart-minus'>-</span>
                ${item.quantity}
                <span class='cart-plus'>+</span>
                </th>
                <th>${item.product.UnitPrice}</th>
                <th>${item.product.UnitPrice * item.quantity}</th>
                <th><button type="button" class="remove-item btn btn-danger">Remove</button></th>
                
            </tr>
        `)
    total += item.product.UnitPrice * item.quantity;
  })
  cartDomItems.innerHTML= cartDom;
  cart.innerHTML += `<p class="float-right">
  <strong>Cart Total: <span id='total'> ${total} </span> <br>
  Discount: <input id="discount" type=number max="${total}" value="${discount}" style="max-width: 50px"> 
   <button id='apply-disc' type="button">Apply</button><br>
  Grand Total: <span id='grand-total' style="color:red"> ${total} </span> </strong>
   
   </p>`;
  document.getElementById('cart-clear-button').style.visibility = "visible";
  cartTable.style.visibility = "visible";
  addButtonEventListener();

}

export function changeGrandtotal(){
    alert('vua');
}

function addButtonEventListener(){
    const cartRemoveButtons = document.querySelectorAll('.cart-minus');
  cartRemoveButtons.forEach((button) => {
    button.addEventListener('click', cartMinus);
  });

  const cartAddButtons = document.querySelectorAll('.cart-plus');
  cartAddButtons.forEach((button) => {
    button.addEventListener('click', cartPlus);
  });

  const applyButton = document.querySelector('#apply-disc');
  applyButton.addEventListener('click', applyDiscount)

  const removBtns = document.querySelectorAll('.remove-item');
  removBtns.forEach((button) => {
    button.addEventListener('click', removeCartItem)
  });

}

function removeCartItem(){
    const productName = event.target.parentNode.parentNode.children[0].innerText;
    let selectedProduct = products.find((it)=>it.Name === productName);
    if(selectedProduct){
        cartItems.forEach((cItem, currentIndex)=>{
            if(cItem.product.Name == productName){
                cartItems.splice(currentIndex,1);
            }
        })
    }
    displayCartItems();
}

function applyDiscount(){

    let discount = +document.getElementById('discount').value;
    let total = +document.getElementById('total').innerText;
    
        
    if(discount<0){
        alert(`You can't give negative discount`);
        discount = 0;
    }

    if(discount>total) {
        alert(`Discount can't be greater than cart subtotal`);
        discount = 0;
    }
    document.getElementById('discount').value = discount;
    let grand = total - discount; 
    document.getElementById('grand-total').innerHTML = grand;
}


export function cartMinus(){
    console.log(event.target.parentNode.parentNode);
    const productName = event.target.parentNode.parentNode.children[0].innerText;
    let selectedProduct = products.find((it)=>it.Name === productName);
    if(selectedProduct){
        cartItems.forEach((cItem, currentIndex)=>{
            if(cItem.product.Name == productName){
                cItem.quantity--;
                if(cItem.quantity===0) cartItems.splice(currentIndex,1);
            }
        })
    }
    displayCartItems();
}

export function cartPlus(){
    console.log(event.target.parentNode.parentNode);
    const productName = event.target.parentNode.parentNode.children[0].innerText;
    let selectedProduct = products.find((it)=>it.Name === productName);
    if(selectedProduct){
        cartItems.forEach((cItem, currentIndex)=>{
            if(cItem.product.Name == productName){
                cItem.quantity++;
            }
        })
    }
    displayCartItems();
}


export function clearCart() {
  cartItems = [];
  displayCartItems();

}
