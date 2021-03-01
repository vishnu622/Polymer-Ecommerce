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
import { setPassiveTouchGestures, setRootPath } from '@polymer/polymer/lib/utils/settings.js';
import '@polymer/app-layout/app-drawer/app-drawer.js';
import '@polymer/app-layout/app-drawer-layout/app-drawer-layout.js';
import '@polymer/app-layout/app-header/app-header.js';
import '@polymer/app-layout/app-header-layout/app-header-layout.js';
import '@polymer/app-layout/app-scroll-effects/app-scroll-effects.js';
import '@polymer/app-layout/app-toolbar/app-toolbar.js';
import '@polymer/app-route/app-location.js';
import '@polymer/app-route/app-route.js';
import '@polymer/iron-pages/iron-pages.js';
import '@polymer/iron-selector/iron-selector.js';
import '@polymer/paper-icon-button/paper-icon-button.js';
import './my-icons.js';

// Gesture events like tap and track generated from touch will not be
// preventable, allowing for better scrolling performance.
setPassiveTouchGestures(true);

// Set Polymer's root path to the same value we passed to our service worker
// in `index.html`.
setRootPath(MyAppGlobals.rootPath);

//Json arry for Product List
let productList = [
  {
    Id: 1,
    ProductCategory: 'T-shirt,Fixed Size(L)',
    ProductName: ' Multicolorneak',
    Price: 15,
    Img: "../images/Multicolor.jpg",
    ProductDesc: "Fit to body,smooth and comfort,Easy & Fast Delivery. Great Offers. No Cost EMI Available.",
    Brand: "Roadstar",
    Color: "White & Black"
  },
  {
    Id: 2,
    ProductCategory: 'T-shirt,Fixed Size(L)',
    ProductName: 'Litebueneak',
    Price: 25,
    Img: "../images/LiteBlue.jpg",
    ProductDesc: "Fit to body,smooth and comfort,Easy & Fast Delivery. Great Offers. No Cost EMI Available.",
    Brand: "Roadstar",
    Color: "Liteblue"
  },
  {
    Id: 3,
    ProductCategory: 'T-Shirt,Fixed Size(L)',
    ProductName: 'Blackneak',
    Price: 12,
    Img: "../images/BlackNeak.jpg",
    ProductDesc: "Fit to body,smooth and comfort,Easy & Fast Delivery. Great Offers. No Cost EMI Available.",
    Brand: "Roadstar",
    Color: "Black"
  },
  {
    Id: 4,
    ProductCategory: 'T-Shirt,Fixed Size(L)',
    ProductName: 'Yellowneak',
    Price: 15,
    Img: "../images/yelloneak.jpg",
    ProductDesc: "Fit to body,smooth and comfort,Easy & Fast Delivery. Great Offers. No Cost EMI Available.",
    Brand: "Roadstar",
    Color: "Yellow"
  },
  {
    Id: 5,
    ProductCategory: 'T-Shirt,Fixed Size(L)',
    ProductName: 'Maroonneak',
    Price: 10,
    Img: "../images/t-shirt.jpg",
    ProductDesc: "Fit to body,smooth and comfort,Easy & Fast Delivery. Great Offers. No Cost EMI Available.",
    Brand: "Roadstar",
    Color: "Maroon"
  },
  {
    Id: 6,
    ProductCategory: 'T-shirt,Fixed Size(L)',
    ProductName: 'Greenneak',
    Price: 23,
    Img: "../images/greenneak.jpg",
    ProductDesc: "Fit to body,smooth and comfort,Easy & Fast Delivery. Great Offers. No Cost EMI Available.",
    Brand: "Roadstar",
    Color: "Green"
  },
  {
    Id: 7,
    ProductCategory: 'T-shirt,Fixed Size(L)',
    ProductName: 'Fog-style',
    Price: 30,
    Img: "../images/Fogstyle.jpg",
    ProductDesc: "Fit to body,smooth and comfort,Easy & Fast Delivery. Great Offers. No Cost EMI Available.",
    Brand: "Roadstar",
    Color: "Black&Blue"
  },
  {
    Id: 8,
    ProductCategory: 'T-shirt,Fixed Size(L)',
    ProductName: 'White&Blackneak',
    Price: 50,
    Img: "../images/multicolors.jpg",
    ProductDesc: "Fit to body,smooth and comfort,Easy & Fast Delivery. Great Offers. No Cost EMI Available.",
    Brand: "Roadstar",
    Color: "Black&White"
  }
]

class MyApp extends PolymerElement {
  static get template() {
    return html`
      <style>
        :host {
          --app-primary-color: #4285f4;
          --app-secondary-color: black;
          display: block;
        }

        app-drawer-layout: not([narrow]) [drawer-toggle] {
         display:none;
          
        }
        app-header {
          color: #fff;
          background-color: #236666;
          text-align:center;
        }
        app-header paper-icon-button {
          --paper-icon-button-ink-color: white;  
        }
        .drawer-list {
          margin: 0 20px;
        }
        .drawer-list a {
          display: block;
          padding: 0 16px;
          text-decoration: none;
          color: var(--app-secondary-color);
          line-height: 40px;
          color:#236666;
           }
          .drawer-list a.iron-selected {
          color: black;
          font-weight: bold;
         }
      </style>

      <app-location route="{{route}}"  data="{{routeData}}" url-space-regex="^[[rootPath]]">
      </app-location>

      <app-route route="{{route}}" pattern="[[rootPath]]:page" data="{{routeData}}" tail="{{subroute}}">
      </app-route>
       
      <app-drawer-layout fullbleed=""  narrow="{{narrow}}">
        <!-- Main content -->
        <app-header-layout>
          <app-header slot="header"  effects="waterfall">
            <app-toolbar>
              <div main-title="" >Fashion World</div>
              <template is="dom-if" if="[[loggedInStatus]]">
                <small on-click="Logout" class="float-right text-white">Logout</small>
              </template>
            </app-toolbar>
          </app-header>
 
            <iron-pages selected="[[page]]" attr-for-selected="name" role="main">
             <log-in logged-in-Status={{loggedInStatus}} name="log-in"></log-in>
             <my-registration  name="my-registration"></my-registration>
             <total-products products="{{totalProductList}}" product-id="{{productId}}" name="total-products"></total-products>
             <product-details total-sum="{{totalSum}}" total-product-list="{{totalProductList}}" cart="{{cart}}" product-id="{{productId}}" name="product-details"></product-details> 
             <cart-products total-sum="{{totalSum}}" cart="{{cart}}" name="cart-products"></cart-products>
             <my-view404 name="view404"></my-view404>
            </iron-pages>
        
        </app-header-layout>
      </app-drawer-layout>
    `;
  }

  static get properties() {
    return {
      // page property which is used for page navigation
      page: {
        type: String,
        reflectToAttribute: true,
        observer: '_pageChanged',
        notify:true
      },
      loggedInStatus: {
        type: Boolean,
        value: false
      },
      routeData: Object,
      subroute: Object,
      name:{
        type:String,
      },
      // This prodoductId pass data to the all childrens
      productId:{
        type:Object,
        value:{}
      },
      cart:{
        type:Array,
        value:[]
      },
      totalProductList:{
        type:Array,
        value:productList
      },
      totalSum: {
        type: Number,
        value: 0
      }
    };
  }
  //This method will logout and navigate to login page 
  Logout() {
    this.loggedInStatus = false;
    this.set('route.path', '/log-in');
  }

  static get observers() {
    return [
      '_routePageChanged(routeData.page)'
    ];
  }

  _routePageChanged(page) {
     // Show the corresponding page according to the route.
     // If no page was found in the route data, page will be an empty string.
     // Show 'log-in' in that case. And if the page doesn't exist, show 'view404'.
    if (!page) {
      this.page = 'log-in';
    } else if (['log-in', 'product-details', 'total-products' ,'my-registration','cart-products'].indexOf(page) !== -1) {
      this.page = page;
    } else {
      this.page = 'log-in';
    }

  
    
  }

  _pageChanged(page) {
  //   if(this.loggedInStatus) {
  //     if(page === 'log-in' || page === 'my-registration') {
  //      this.set('route.path', '/total-products');
  //     }
  //   } else {
  //    if(page !== 'log-in' || page !== 'my-registration') {
  //      this.set('route.path', '/log-in');
  //     }
  //  }

    // Import the page component on demand.
    // Note: `polymer build` doesn't like string concatenation in the import
    // statement, so break it up.
    switch (page) {
      case 'log-in':
        import('./log-in.js');
        break;
      case 'product-details':
        import('./product-details.js');
        break;
      case 'total-products':
        import('./total-products.js');
        break;
      case 'my-registration':
        import('./my-registration.js');
         break;  
         case 'cart-products':
          import('./cart-products.js');
           break;     
      case 'view404':
        import('./my-view404.js');
        break;
    }
  }
}

window.customElements.define('my-app', MyApp);
