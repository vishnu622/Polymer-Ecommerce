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
import '@polymer/paper-button/paper-button.js';
import '@polymer/app-layout/app-layout.js';
import './shared-styles.js';


class TotalProducts extends PolymerElement {
  static get template() {
    return html`
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css" integrity="sha384-HSMxcRTRxnN+Bdg0JdbxYKrThecOKuH5zCYotlSAcp1+c8xmyTe9GYg1l9a69psu" crossorigin="anonymous">

      <app-location route="{{route}}"></app-location>   
      <style include="shared-styles">
        :host {
          display: block;
          padding: 0px;
          background-color:silver;
        }
        h1{
          text-align:center;
        }
  
        p{
          text-align:center;
          margin-bottom:10x;
          font-weight:bold;
        }
       h5{
           text-align:center;
           justify:center;
           justify-content:center;
           
        }
        paper-button{
          color:#fff;
          background-color:#236666;
          padding:10px;
          text-align:center;
          justify:center;
          justify-content:center;
          border-radius:5px;
          margin-top:20px;
           }
         img{
         width: 150px;
         height: 220px; 
         display: flex;
          margin:auto;
        }
      </style>
           <!-- html content for product list page -->
          <!----Heading---->
          <h1>Men's Wear</h1>
          <div class="container mt-3">
           <div class="row py-5 mt-5">
             <dom-repeat items="[[products]]">
              <template>
                <div class="col-md-3">
                 <div class="card mb-3">
                   <img src={{item.Img}} >
                   <div class="card-body">
                     <p>{{item.ProductName}}</p>
                     <h5 >{{item.ProductCategory}}</h5>
                     <p><paper-button   on-click="handleClick" class="btn bg-dark text-white">View Details</paper-button></p>
                </div>
               </div>
             </div>
           </template>
         </div>
       </dom-repeat>
     </div>
      
`;
  }
  static get properties() {
    return {
      // getting  products json array from my-app.js and setting to products property
      products: {
        type: Array,
        notify: true
      },
      // accessing product id from my app page which is used to select product index
      productId: {
        type: Number,
        notify: true,
        observer: "_checkId"
      }
    };
  }
  
  // method which helps to select product index and navigate to product details page
  handleClick(e) {
    this.productId = e.model.item;
    this.set('route.path', '/product-details'); //It will navigate to product-details page
  }
  _checkId(e) {
    console.log(e) // it is observer call back funtion and also it will checks which is particular product clicked by enduser
  }
}


window.customElements.define('total-products', TotalProducts);