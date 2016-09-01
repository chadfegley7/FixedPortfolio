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
    $http.get("https://api.flickr.com/services/rest/?method=flickr.people.getPhotos&api_key=9c72f03c0583a34bd703bd82d8773cc0&user_id=134646885%40N03&per_page=15&format=json&nojsoncallback=1&auth_token=72157672077812340-0d2b1a5e69455ba3&api_sig=14556880ea66ff627d2d081dcf8cd44b").success(function(output){
      callback(output);
      console.log(output);
      gallery = output.photos.photo;

    })
  }
  return factory;
});
