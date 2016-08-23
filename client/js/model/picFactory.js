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
    $http.get("https://api.flickr.com/services/rest/?method=flickr.people.getPhotos&api_key=865ff3af41960814c41dfa9550e1f32f&user_id=134646885%40N03&per_page=15&format=json&nojsoncallback=1&auth_token=72157672863583275-b0c6d0b8810e4d66&api_sig=99edd30757ed133d94ddf326852ff7d9").success(function(output){
      callback(output);
      console.log(output);
      gallery = output.photos.photo;

    })
  }
  return factory;
});
