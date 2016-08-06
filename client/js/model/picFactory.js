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
    $http.get("https://api.flickr.com/services/rest/?method=flickr.people.getPhotos&api_key=78dbbb1a5b2b8703990a2ae27ad4807c&user_id=134646885%40N03&per_page=100&format=json&nojsoncallback=1&auth_token=72157672082747565-939688c69d470ad1&api_sig=d3bb14a375b6b312d6dfe00f25c5c7bc").success(function(output){
      callback(output);
      console.log(output);
      gallery = output.photos.photo;

    })
  }
  return factory;
});
