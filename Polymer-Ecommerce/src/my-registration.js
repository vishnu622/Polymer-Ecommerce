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
import './shared-styles.js';
import '@polymer/paper-button/paper-button.js';
import '@polymer/paper-input/paper-input.js';
import '@polymer/iron-icon/iron-icon.js';
import '@polymer/paper-icon-button/paper-icon-button.js';
import '@polymer/iron-icons/iron-icons.js';

	

class Myregistration extends PolymerElement {
  static get template() {
     return html`
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css" integrity="sha384-HSMxcRTRxnN+Bdg0JdbxYKrThecOKuH5zCYotlSAcp1+c8xmyTe9GYg1l9a69psu" crossorigin="anonymous">
    <style include="shared-styles">
        :host {
          display: block;
          padding: 10px;
          background-image:url("../images/shop.jpg"); no-repeat center fixed;
          background-size:cover;
          height:570px;  
        }
      
        h1{
          text-align:center;
         }
        paper-button{
          display:flex;
          justify-content: center;
          align-items: center;
          width:10px;
          margin:auto;
          color: #fff;
          background: #236666;
          padding:10px;
        }
        paper-button:hover{
          color:orange;
        }
      </style>
      
     <!------------html content------------->
    <app-location route="{{route}}"></app-location>
    <div class="col-lg-4 col-lg-offset-4" style="width:400px; background-color:#fff;">
       <!------Heading-----> 
        <h1>Create Account</h1>

      <!-------polymer paper-inputs----->  
 
    <paper-input id="name" always-float-label label="Username" required auto-validate error-message="Provide valid details!" char-counter maxlength="10" pattern="[a-zA-Z]*" ></paper-input>
    <paper-input id="phone"  always-float-label label="Phone Number" required auto-validate error-message="Provide valid details!" char-counter maxlength="10" pattern="[0-9]*" ></paper-input>
    <paper-input label="name">
    <iron-icon icon="mail" slot="prefix"></iron-icon>
    <div slot="suffix">@email.com</div>
    <paper-icon-button slot="suffix"  icon="clear" alt="clear" title="clear">
    </paper-icon-button>
    </paper-input>
    <paper-input id="password" type="password"always-float-label label="password" required auto-validate error-message="Provide valid details!" char-counter maxlength="10" pattern="[a-zA-Z0-9]*"></paper-input>
    <br/ >
    <!----polymer paper button---->
    <paper-button  raised on-click="Register">Register</paper-button>
    <br/>
 
  </div> 
  `;
  
  
    }
    //It will checks the end user valid credentials and navigate to total products page
      Register(){
        if(this.$.name.value=="vishnu" || this.$.password.value=="reddy" || this.$.phone.value=="9490810275" || this.$.email.value=="manne@email.com"){
          this.set('route.path','/total-products');
        }else{
          alert("Fill Your Details");
        }  
     }
    
     
  }

    
window.customElements.define('my-registration', Myregistration);
