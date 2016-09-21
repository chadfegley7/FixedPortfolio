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
    $http.get("https://api.flickr.com/services/rest/?method=flickr.people.getPhotos&api_key=ffd9cc8b42047e8713d07cbc8345b49f&user_id=134646885%40N03&per_page=15&format=json&nojsoncallback=1&auth_token=72157674199781725-305c99264b673f05&api_sig=cb79eb0eabfb4f7d243f18e30ad5542b").success(function(output){
      callback(output);
      console.log(output);
      gallery = output.photos.photo;

    })
  }
  return factory;
});
