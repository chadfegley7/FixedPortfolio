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
    $http.get("https://api.flickr.com/services/rest/?method=flickr.people.getPhotos&api_key=9cb129c9deed6c950fbd3e3e54bb462b&user_id=134646885%40N03&per_page=15&format=json&nojsoncallback=1&auth_token=72157673553223495-3d9a2b94563246ab&api_sig=c6fb287f99c3f627ac56e4a7bd98feba").success(function(output){
      callback(output);
      console.log(output);
      gallery = output.photos.photo;

    })
  }
  return factory;
});
