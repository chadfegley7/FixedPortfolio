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
    $http.get("https://api.flickr.com/services/rest/?method=flickr.people.getPhotos&api_key=7b9fdd9b0e266269d8fa209895fe4a49&user_id=134646885%40N03&per_page=15&format=json&nojsoncallback=1&auth_token=72157671880919770-0f50dc526613f932&api_sig=5ffb5fa3cdb80c8a270c0494f3143a25").success(function(output){
      callback(output);
      console.log(output);
      gallery = output.photos.photo;

    })
  }
  return factory;
});
