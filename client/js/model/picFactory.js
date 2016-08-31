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
    $http.get("https://api.flickr.com/services/rest/?method=flickr.people.getPhotos&api_key=6b65ad3c8ca00ceee555c2e5f2839036&user_id=134646885%40N03&per_page=15&format=json&nojsoncallback=1&auth_token=72157672222865251-ca8a90eec74b5e09&api_sig=2429750c3555d1248bb0dd16b5268018").success(function(output){
      callback(output);
      console.log(output);
      gallery = output.photos.photo;

    })
  }
  return factory;
});
