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
    $http.get("https://api.flickr.com/services/rest/?method=flickr.people.getPhotos&api_key=8b43b97767750f50a09e9be8b6ea2364&user_id=134646885%40N03&per_page=25&format=json&nojsoncallback=1&auth_token=72157669443770774-d2425a6cd4ae2d50&api_sig=5d8cfd2f258a41604612556defff53b4").success(function(output){
      callback(output);
      console.log(output);
      gallery = output.photos.photo;

    })
  }
  return factory;
});
