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
      .when('/productDetail',{
        templateUrl: "templates/productDetail.html",
        controller: "DetailController"
      })
      .when('/productListing',{
        templateUrl: "templates/productListing.html",
        controller: "ListingController"
      })
      .when('/shoppingCart',{
        templateUrl: "templates/shoppingCart.html",
        controller: "CartController"
      })
      .otherwise({
         redirectTo: '/404'
      })
  })
