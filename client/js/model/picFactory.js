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
    $http.get("https://api.flickr.com/services/rest/?method=flickr.people.getPhotos&api_key=ac2c8d3f551c319eac4ae5d47b422c0f&user_id=134646885%40N03&per_page=15&format=json&nojsoncallback=1&auth_token=72157672516426531-fbae44204425d433&api_sig=a68d9bad6af185a9225dc8e80788e03a").success(function(output){
      callback(output);
      console.log(output);
      gallery = output.photos.photo;

    })
  }
  return factory;
});
