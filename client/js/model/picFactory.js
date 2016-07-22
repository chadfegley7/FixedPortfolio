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
    $http.get("https://api.flickr.com/services/rest/?method=flickr.people.getPhotos&api_key=9b3344676a8ade681a8e5416299acedc&user_id=134646885%40N03&per_page=100&format=json&nojsoncallback=1&auth_token=72157671314096706-c3523f5473ed30d0&api_sig=9ae3de364f2cce7ced3d29c8c9dd1d10").success(function(output){
      callback(output);
      console.log(output);
      gallery = output.photos.photo;

    })
  }
  return factory;
});
