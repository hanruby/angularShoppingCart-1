angular
  .module('fetsy')
  .service('TinyService', function($http) {
    var url = 'https://tiny-tiny.herokuapp.com/collections/fetsyTest';

    function getTiny(){
      return $http.get(url)
    }
    function postTiny(post){
      return $http.post(url,post);
    }
    function showTiny(id){
      return $http.get(url + "/" + id)
    }
    function deleteTiny(id){
      return $http.delete(url + '/' + id)
    }
    return{
      getTiny:getTiny,
      postTiny:postTiny,
      showTiny:showTiny,
      deleteTiny:deleteTiny
    };
  })
