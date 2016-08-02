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
    $http.get("https://api.flickr.com/services/rest/?method=flickr.people.getPhotos&api_key=fdd8b76922109413d9c6f273fbad3bc4&user_id=134646885%40N03&per_page=100&format=json&nojsoncallback=1&auth_token=72157671912595465-9b957a8cedd366b2&api_sig=a91b8d8ab47be12a7e8c6d9c04996cba").success(function(output){
      callback(output);
      console.log(output);
      gallery = output.photos.photo;

    })
  }
  return factory;
});
