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
    $http.get("https://api.flickr.com/services/rest/?method=flickr.people.getPhotos&api_key=b9caf26fccec1f407e3a04169fda4bbf&user_id=134646885%40N03&per_page=25&format=json&nojsoncallback=1&auth_token=72157669570516183-eb397116a4101059&api_sig=a09039f306454e2c79952a4ffc3846e7").success(function(output){
      callback(output);
      console.log(output);
      gallery = output.photos.photo;

    })
  }
  return factory;
});
