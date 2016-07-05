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
    $http.get("https://api.flickr.com/services/rest/?method=flickr.people.getPhotos&api_key=9ffb484ba2dfead45ffcf3b07359e06d&user_id=134646885%40N03&per_page=125&format=json&nojsoncallback=1&auth_token=72157670568776236-929f505e9c2e6d08&api_sig=4b618336aaec3042d679b3b99222f5fe").success(function(output){
      callback(output);
      console.log(output);
      gallery = output.photos.photo;

    })
  }
  return factory;
});
