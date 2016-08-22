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
    $http.get("https://api.flickr.com/services/rest/?method=flickr.people.getPhotos&api_key=eb4b72bce9101ccccbd0d35bbadab7ca&user_id=134646885%40N03&extras=25&format=json&nojsoncallback=1&auth_token=72157672817459135-2df22324ee10a95a&api_sig=41e5a6c7d3b70dd92eabdb9e56ab0c52").success(function(output){
      callback(output);
      console.log(output);
      gallery = output.photos.photo;

    })
  }
  return factory;
});
