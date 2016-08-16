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
    $http.get("https://api.flickr.com/services/rest/?method=flickr.people.getPhotos&api_key=19068db17227311bdcee72bb5f0146e5&user_id=134646885%40N03&per_page=25&format=json&nojsoncallback=1&auth_token=72157669440336903-890b0ba644bd75fc&api_sig=2ce9ab2d7e6bfc3b06eca169dd0a46ff").success(function(output){
      callback(output);
      console.log(output);
      gallery = output.photos.photo;

    })
  }
  return factory;
});
