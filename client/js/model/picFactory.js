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
    $http.get("https://api.flickr.com/services/rest/?method=flickr.people.getPhotos&api_key=a8241be535e0dcf5c8788b736e5e6f91&user_id=134646885%40N03&per_page=50&format=json&nojsoncallback=1&auth_token=72157669803438535-7a765dbf804cbaa4&api_sig=30a14df2c2278fb47f5e72f306c6cb4f").success(function(output){
      callback(output);
      console.log(output);
      gallery = output.photos.photo;

    })
  }
  return factory;
});
