(function () {

    'use strict';
    //Main application module
    angular
        .module('kenApp', [
        // Angular modules
        'ngAnimate',
        'ngRoute'
        

        // Custom modules
        // 3rd Party Modules        
        ])

        //main application router
      .config(function ($routeProvider) {
           $routeProvider
                 .when("/home", { template: "<product-list></product-list>" })
                 .when("/about", { template: "<app-about></app-about>" })
                 .otherwise({ redirectTo: "/home" });
       })
       
        
    

      .component("appAbout", {
        
          templateUrl: "/App/about-page/about-page.component.html",
    });

})();
