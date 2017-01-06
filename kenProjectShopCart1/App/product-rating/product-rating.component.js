(function () {

    'use strict';
    //application rating component
    angular

       .module("kenApp")
       .component("productRating", {
           templateUrl: "/App/product-rating/product-rating.component.html",
           bindings: {
              value: "<"
           },

           // using controller as syntax  with view model
          transclude: true,
          controllerAs: "vm",
          controller: function () {
             var vm = this;
             
              // function for action to be taken on intiatialization/bootstraping of the application.
             vm.$onInit = function () {
                 vm.entries = new Array(vm.value);
             };

              //function for action taken when their are changes such as addition of rating values
             vm.$onChanges = function () {
                 vm.entries = new Array(vm.value);
            };
        }
        

        
    });
})();