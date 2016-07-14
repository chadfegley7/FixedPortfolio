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
    $http.get("https://api.flickr.com/services/rest/?method=flickr.people.getPhotos&api_key=16f184ffabaadea95b50b4cf472c3cc7&user_id=134646885%40N03&per_page=100&format=json&nojsoncallback=1&auth_token=72157671065127685-7be80881b1a1292e&api_sig=af11347b703140e7217a75143b52be0b").success(function(output){
      callback(output);
      console.log(output);
      gallery = output.photos.photo;

    })
  }
  return factory;
});
