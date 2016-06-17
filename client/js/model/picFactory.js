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
    $http.get("https://api.flickr.com/services/rest/?method=flickr.people.getPhotos&api_key=91c8572d01c41af920945c0ccd9cd2e5&user_id=134646885%40N03&per_page=100&format=json&nojsoncallback=1&auth_token=72157668951994610-860282660c4eb0c3&api_sig=3616f8b643fd00b92b875f2d681cc918").success(function(output){
      callback(output);
      console.log(output);
      gallery = output.photos.photo;

    })
  }
  return factory;
});
