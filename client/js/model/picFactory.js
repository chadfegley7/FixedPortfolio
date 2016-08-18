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
    $http.get("https://api.flickr.com/services/rest/?method=flickr.people.getPhotos&api_key=01d4f8015b49390a7c104192dbae099d&user_id=134646885%40N03&per_page=25&format=json&nojsoncallback=1&auth_token=72157669515762184-cf98151821a9590b&api_sig=62cc0e5bdf0b35daba0acc85b2921241").success(function(output){
      callback(output);
      console.log(output);
      gallery = output.photos.photo;

    })
  }
  return factory;
});
