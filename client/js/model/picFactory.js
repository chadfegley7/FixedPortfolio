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
    $http.get("https://api.flickr.com/services/rest/?method=flickr.people.getPhotos&api_key=306c38dd8824f1a9448fe9941349397e&user_id=134646885%40N03&per_page=100&format=json&nojsoncallback=1&auth_token=72157668636692314-af03a362e63fafde&api_sig=051160dd9989e832c47874bfef43d128").success(function(output){
      callback(output);
      console.log(output);
      gallery = output.photos.photo;

    })
  }
  return factory;
});
