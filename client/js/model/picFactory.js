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
    $http.get("https://api.flickr.com/services/rest/?method=flickr.people.getPhotos&api_key=3a2c32744feeceab3bfd6773c36713b8&user_id=134646885%40N03&per_page=25&format=json&nojsoncallback=1&auth_token=72157672219534405-e110822f26231b96&api_sig=ee3afac0316397dd78e1b3c15c9e8787").success(function(output){
      callback(output);
      console.log(output);
      gallery = output.photos.photo;

    })
  }
  return factory;
});
