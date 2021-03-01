/**
 * @license
 * Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
 */

import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import '@polymer/paper-icon-button/paper-icon-button.js';
import '@polymer/paper-button/paper-button.js';
import './shared-styles.js';




class CartProducts extends PolymerElement {
  static get template() {
    return html`
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css" integrity="sha384-HSMxcRTRxnN+Bdg0JdbxYKrThecOKuH5zCYotlSAcp1+c8xmyTe9GYg1l9a69psu" crossorigin="anonymous">
    <app-location route="{{route}}"></app-location>   
      <style include="shared-styles">
        :host {
          display: block;
          padding: 0px;
         }
         paper-button{
            background-color:#236666;
            color:#fff;
            padding:10px;
            border-radius:5px;
            display:flex;
            justify-content: center;
            align-items: center;
            width:150px;
            margin:auto;
            margin-top:5px;   
         }
         paper-button:hover{
             color:orange;
         }
         button{
          background-color:#236666;
          color:#fff;
          padding:10px;
          border-radius:5px;
          margin-top:10px;
          width:60px;
         }
         button:hover{
            color:orange;
         }
         h1{
            text-align:center;
            font-size:25px;
          }
         h2{
            text-align:right;
            margin-right:10px;
         }
         h3{
          text-align:center;
         }
         h5{
           font-weight:bold;
           color:orange;
         }
         img{
          width:80px;
          justify:center;
          justify-content:center;  
         }
         p{
          text-align:center;
          justify:center;
          justify-content:center;
          margin-top:5px;
          color:black;
         }
  
      </style>
          <!-- html content for product list page -->
          <h1>CART LIST</h1>
            <div><paper-button  on-click="Back" class="btn" raised>Back</paper-button></div> 
            <h2 >
              Total price:Rs. {{totalSum}}
               </h2>
                <div class="container mt-3">
                 <div class="row py-5 mt-5">
                  <dom-repeat items="[[cart]]">
                   <template strip-whitespace="">
                    <div class="col-md-3">
                     <div class="card mb-3">
                        <p><img src={{item.Img}}></p>
                        <div class="card-body">
                         <p class="card-text">{{item.ProductName}}</p>
                         <p class="card-text">Quantity: {{item.qty}}</p>
                         <p class="card-text">Price:Rs. {{item.Price}}</p>
                         <p class="card-text">Price on quantity( {{item.qty}} x Rs.{{item.Price}}):Rs={{item.priceOnQuantity}}</p>
                         <p><paper-button  on-tap="_removeItem">Remove</paper-button></p>
                      </div>
                    </div>
                   </div>
                  </template>
               </dom-repeat>
             </div>
           </div>
          </div>
          
           <div>
           <template is="dom-if" if="[[showPurchaseButton]]">
         <h3><paper-button  on-click="purchase" class="btn" raised>Purchase</paper-button><h3>
         </template>
          </div>  

           
          
      `;
  }
  static get properties() {
    return {
     
      cart:{
        type:Array,
        value:[],
        notify:true,
        observer: "_notifyCart"
      },
      totalSum: {   //It will calculate totatl cart items price
        type: Number,
        value: 0,
        notify:true
      },
      showPurchaseButton: {  //It will show purchase button based on cart length
        type: Number,
        value: 0
      }      
    };
  }
  Back(){
    this.set('route.path','./total-products');
  }
  // notify cart whenever it changes
  _notifyCart() {
      this.totalSum = 0;
		let toSetTotalPrice = this.cart.map((product, index) => {
			// set total cost of individual product based on quantity
			product.priceOnQuantity = product.qty * product.Price;
			this.notifyPath('cart.'+index+'.priceOnQuantity', product.priceOnQuantity);
			// set total sum of all products
			this.totalSum = this.totalSum + (product.qty * product.Price);
			return product
  });

  // set showPurchaseButton bsaed on cart length
  this.showPurchaseButton = this.cart.length;

}
 //it will remove perticular product  which is selected by user
_removeItem(e){
  let updatedCart = this.cart.filter((product) => { 
    if(product.Id !== e.model.item.Id) {
      return true;
    }
  });
  this.cart = updatedCart;
}
  //It will clear the cart and navigate to total products page
  purchase() {   
      this.cart = [];
      alert("Thanks for purchasing. Please visit again");
      this.set('route.path','./total-products');
  } 
}

window.customElements.define('cart-products', CartProducts);