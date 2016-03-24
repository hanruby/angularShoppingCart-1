angular
.module('fetsy')
.controller('HomeController', function($scope, TinyService, FetsyService, $route, $routeParams){
  FetsyService.getActiveListings()
    .then(function(data){
    console.log("data", data)
    $scope.products = data.data.results;
  });
  if($routeParams.id) {
    FetsyService.getProduct($routeParams.id)
      .then(function(data) {
        console.log("INFO",data);
        $scope.product = data.data.results[0];
      })
  };
  $scope.addToCart = function(thing) {
    TinyService.postTiny(thing)
      .then(function(data){
        console.log("save",data)
      })
  }
  // $scope.searchCtrl = function(val){
  //   FetsyService.searchVal(val)
  //     .then(function(data){
  //       $scope.products = data.data.results;
  //     })
  // }
})
.controller('CartController', function($scope, TinyService, FetsyService, $route, $routeParams){
  TinyService.getTiny()
    .then(function(data){
      console.log("getTiny", data)
      $scope.items = data.data;

      var total = 0;
      $scope.items.forEach(function(el){
        total += parseFloat(el.price);
      })
      $scope.subTotal = total;
      $scope.cartItems = $scope.items.length
    });

  $scope.removeFromCart = function(obj){
    TinyService.deleteTiny(obj._id)
      .then(function(data){
        var objID = data.data._id
        var objPlace = $scope.items.findIndex(function(el, idx, arr){
          return el._id === objID
        });
        $scope.items.splice(objPlace,1);
      });
  }
})
