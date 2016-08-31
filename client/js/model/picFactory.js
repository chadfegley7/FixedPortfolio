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
    $http.get("https://api.flickr.com/services/rest/?method=flickr.people.getPhotos&api_key=a2bbddb7dc408107d15480473cec343b&user_id=134646885%40N03&per_page=15&format=json&nojsoncallback=1&auth_token=72157673214960245-e0e5be5b6fb6fbdb&api_sig=127b80b18eb6747e6911c8be7074a2be").success(function(output){
      callback(output);
      console.log(output);
      gallery = output.photos.photo;

    })
  }
  return factory;
});
