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
    $http.get("https://api.flickr.com/services/rest/?method=flickr.people.getPhotos&api_key=a4e3ada256502e1d55b15c9bc91e4402&user_id=134646885%40N03&per_page=15&format=json&nojsoncallback=1&auth_token=72157674077421076-3a6cd24e80d2bc66&api_sig=b64320d39cbd3e33598a02ebc97b91ae").success(function(output){
      callback(output);
      console.log(output);
      gallery = output.photos.photo;

    })
  }
  return factory;
});
