angular
  .module('fetsy')
  .service('FetsyService',function($http) {
    var base = 'https://openapi.etsy.com/v2/listings/';
    var key = 'rb8lta6p18xdgyovpj1yckqq';
    var cors = 'https://free-cors-server.herokuapp.com/any-request/';
    var img = '&includes=MainImage';
    var url = encodeURIComponent('https://openapi.etsy.com/v2/listings/active?api_key=' + key + img);

   function getActiveListings() {
     return $http.get(cors + url);
   }
   function getProduct(id){
     return $http.get(cors + encodeURIComponent(base + id + "?api_key=" + key + img))
   }
    return {
      getActiveListings : getActiveListings,
      getProduct : getProduct
    };
  })
