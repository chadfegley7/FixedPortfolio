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
    $http.get("https://api.flickr.com/services/rest/?method=flickr.people.getPhotos&api_key=f9be4bc1efe094acec24d58de12677d9&user_id=134646885%40N03&per_page=50&format=json&nojsoncallback=1&auth_token=72157669240898832-b27b278a5038a740&api_sig=c03b2dfa2c131a7982bbaba8f14b2b3d").success(function(output){
      callback(output);
      console.log(output);
      gallery = output.photos.photo;

    })
  }
  return factory;
});
