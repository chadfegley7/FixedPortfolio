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
    $http.get("https://api.flickr.com/services/rest/?method=flickr.people.getPhotos&api_key=b5a9a14b1529748d4c8e301b10ebb042&user_id=134646885%40N03&per_page=100&format=json&nojsoncallback=1&auth_token=72157668870208694-d6cdb5f08a9387bb&api_sig=4f6b5e3d31e813362259fa545d0fb104").success(function(output){
      callback(output);
      console.log(output);
      gallery = output.photos.photo;

    })
  }
  return factory;
});
