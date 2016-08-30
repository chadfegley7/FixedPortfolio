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
    $http.get("https://api.flickr.com/services/rest/?method=flickr.people.getPhotos&api_key=f736664b591e81482220e2f0ff57a618&user_id=134646885%40N03&per_page=15&format=json&nojsoncallback=1&auth_token=72157673072314476-fee484abf88f5488&api_sig=b70fc94206fb2b7af768aaa9ff384710").success(function(output){
      callback(output);
      console.log(output);
      gallery = output.photos.photo;

    })
  }
  return factory;
});
