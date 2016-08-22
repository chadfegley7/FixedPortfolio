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
    $http.get("https://api.flickr.com/services/rest/?method=flickr.people.getPhotos&api_key=3f9fe783e105a01013fbe2d4de25ce17&user_id=134646885%40N03&per_page=25&format=json&nojsoncallback=1&auth_token=72157672703228346-6ec2a13dea7b12ec&api_sig=1aa0e638ef1eaefb0e81370e879a1e85").success(function(output){
      callback(output);
      console.log(output);
      gallery = output.photos.photo;

    })
  }
  return factory;
});
