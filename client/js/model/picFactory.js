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
    $http.get("https://api.flickr.com/services/rest/?method=flickr.people.getPhotos&api_key=f3f30e79c083a8ff49883aae0038929b&user_id=134646885%40N03&per_page=100&format=json&nojsoncallback=1&auth_token=72157668459620904-28430800733fc7f2&api_sig=adfe76b5baf92a1f90cb8a65dfdd03a9").success(function(output){
      callback(output);
      console.log(output);
      gallery = output.photos.photo;

    })
  }
  return factory;
});
