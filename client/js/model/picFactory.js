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
    $http.get("https://api.flickr.com/services/rest/?method=flickr.people.getPhotos&api_key=22c74047dd054d19989b3ce7e4e15b81&user_id=134646885%40N03&per_page=25&format=json&nojsoncallback=1&auth_token=72157671701429342-4e5b6f8ac6e8792e&api_sig=514209660c7739f5c7181ca6c05c79ac").success(function(output){
      callback(output);
      console.log(output);
      gallery = output.photos.photo;

    })
  }
  return factory;
});
