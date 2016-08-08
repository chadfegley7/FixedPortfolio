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
    $http.get("https://api.flickr.com/services/rest/?method=flickr.people.getPhotos&api_key=afeba65a65a5e1ba4eb52d78dfdd83bc&user_id=134646885%40N03&per_page=25&format=json&nojsoncallback=1&auth_token=72157671292325902-5c56fdabdd7bc2fe&api_sig=0a019f9747bead0729db25b268a2b03e").success(function(output){
      callback(output);
      console.log(output);
      gallery = output.photos.photo;

    })
  }
  return factory;
});
