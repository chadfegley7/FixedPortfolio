myApp.factory('picFactory', function($http){
  var factory = {};
  var pics = [];

  factory.index = function(callback){
    $http.get('/').success(function(output){
      pics = output;
      callback(pics);
    })
  }
  factory.jsonFlickrApi = function(callback){
    $http.get("https://api.flickr.com/services/rest/?method=flickr.people.getPhotos&api_key=444fcf21e9a7487e25f20314efc7d5de&user_id=134646885%40N03&per_page=15&format=json&nojsoncallback=1&auth_token=72157673490335115-30e081989b16e493&api_sig=69ea3bc47329cb01517adc01fae2c139").success(function(output){
      callback(output);
      console.log(output);
      gallery = output.photos.photo;

    })
  }
  return factory;
});
