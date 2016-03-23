angular
  .module('fetsy',['ngRoute'])
  .config(function($routeProvider) {
    $routeProvider
      .when('/',{
        templateUrl: "templates/home.html",
        controller: "HomeController"
      })
      .when('/home',{
        templateUrl: "templates/home.html",
        controller: "HomeController"
      })
      .when('/productDetail/:id',{
        templateUrl: "templates/productDetail.html",
        controller: "HomeController"
      })
      .when('/',{
        templateUrl: "templates/productListing.html",
        controller: "HomeController"
      })
      .when('/shoppingCart',{
        templateUrl: "templates/shoppingCart.html",
        controller: "CartController"
      })
      .when('/404',{
        templateUrl: "templates/404.html",
        controller: "HomeController"
      })
      .otherwise({
         redirectTo: '/404'
      })
  })
