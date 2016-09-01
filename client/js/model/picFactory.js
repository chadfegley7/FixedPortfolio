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
    $http.get("https://api.flickr.com/services/rest/?method=flickr.people.getPhotos&api_key=666b3b29dbdf720dc9337191eb2b1bfa&user_id=134646885%40N03&per_page=15&format=json&nojsoncallback=1&auth_token=72157673257433325-a90ae5464965820b&api_sig=fb49d1f35efc8c34e65423c78430ba3f").success(function(output){
      callback(output);
      console.log(output);
      gallery = output.photos.photo;

    })
  }
  return factory;
});
