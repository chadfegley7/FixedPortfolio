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
    $http.get("https://api.flickr.com/services/rest/?method=flickr.people.getPhotos&api_key=9ea520c2639a791a129ae341cd8db353&user_id=134646885%40N03&per_page=50&format=json&nojsoncallback=1&auth_token=72157666571882564-7a4a8cc72541d0f6&api_sig=efce81803a59a60be80cfab0a5c5f45d").success(function(output){
      callback(output);
      console.log(output);
      gallery = output.photos.photo;

    })
  }
  return factory;
});
