(function () {
    // product details component
    'use strict';
    angular

       .module("kenApp")
       .component("productDetails", {
           templateUrl: "/App/product-rating/product-rating.component.html",
           bindings: {
               value: "<"
           },

           transclude: true,
           controllerAs: "vm",
           controller: function () {
               var vm = this;


           }



       });
})();

