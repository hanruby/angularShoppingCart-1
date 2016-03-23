angular
  .module('fetsy')
  .service('FetsyService',function($http) {
    var key = '5';
    var cors = 'https://free-cors-server.herokuapp.com/any-request/';
    var url = encodeURIComponent('https://openapi.etsy.com/v2/listings/active?api_key=' + key);
   function getActiveListings() {
     return $http.get(cors + url);
   }
    return {

    };
  })
