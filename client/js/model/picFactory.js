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
    $http.get("https://api.flickr.com/services/rest/?method=flickr.people.getPhotos&api_key=2f396eba26d0c79c40a2e6d2390803b6&user_id=134646885%40N03&per_page=100&format=json&nojsoncallback=1&auth_token=72157671867479246-6c6d7fc7f5ca7008&api_sig=f6882d65d85590e8de2c60ddda58ea4a").success(function(output){
      callback(output);
      console.log(output);
      gallery = output.photos.photo;

    })
  }
  return factory;
});
