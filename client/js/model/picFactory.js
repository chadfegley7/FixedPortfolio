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
    $http.get("https://api.flickr.com/services/rest/?method=flickr.people.getPhotos&api_key=9e2c944d1d3ed0d11cd8884984f82b0a&user_id=134646885%40N03&per_page=15&format=json&nojsoncallback=1&auth_token=72157672110071092-6d655c1e6a08b515&api_sig=649a1bce31f118552ca1d407b800423f").success(function(output){
      callback(output);
      console.log(output);
      gallery = output.photos.photo;

    })
  }
  return factory;
});
