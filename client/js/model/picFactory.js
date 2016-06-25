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
    $http.get("https://api.flickr.com/services/rest/?method=flickr.people.getPhotos&api_key=a87c295ff848833c0b7ef6cbe1a12f89&user_id=134646885%40N03&per_page=100&format=json&nojsoncallback=1&auth_token=72157667482853544-323f2bb53d95f6f4&api_sig=fcccf8ea8c922f139c36bb4dd7d81e0f").success(function(output){
      callback(output);
      console.log(output);
      gallery = output.photos.photo;

    })
  }
  return factory;
});
