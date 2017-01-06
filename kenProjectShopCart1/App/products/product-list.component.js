(function () {
    'use strict';

    var module = angular.module("kenApp");

    // function to fetch products data from JSON file
    function fetchProducts($http){
        return $http.get("/products.json")
        .then(function (response) {
            return response.data;
        });
    }

    function controller($http) {

        var vm = this;
        vm.products = [];

        
        

        //  vm.orderProp = 'choice';
       

        // function to gets producst after the app is bootstraped
        vm.$onInit = function () {
            fetchProducts($http).then(function (products) {
                vm.products = products;
            });

        };

        // function to rate products by decreasing or increasing
        vm.upRating = function (product) {
            if (product.rating < 5) {
                product.rating += 1;
            }
        };

        vm.downRating = function (product) {
            if (product.rating > 1) {
                product.rating -= 1;
            }
        };
    }

       // controller for product list
           module.component("productList", {
               templateUrl: "/App/products/product-list.component.html",
               controllerAs: "vm",
               controller: ["$http", controller]
    });

})();