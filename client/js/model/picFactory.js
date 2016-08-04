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
    $http.get("https://api.flickr.com/services/rest/?method=flickr.people.getPhotos&api_key=b12242ee61b9c905690e71e0cfaebac4&user_id=134646885%40N03&per_page=100&format=json&nojsoncallback=1&auth_token=72157671140353412-ce770b5d0959e4c9&api_sig=399eb0b94535fc908a32e9af35c172e2").success(function(output){
      callback(output);
      console.log(output);
      gallery = output.photos.photo;

    })
  }
  return factory;
});
