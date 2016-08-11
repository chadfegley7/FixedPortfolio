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
    $http.get("https://api.flickr.com/services/rest/?method=flickr.people.getPhotos&api_key=0c035d432447898424771decaf20fa5b&user_id=134646885%40N03&per_page=25&format=json&nojsoncallback=1&auth_token=72157669260427413-a8e814c505228029&api_sig=3b7a6b883284d7715be9d34bb1a0f98b").success(function(output){
      callback(output);
      console.log(output);
      gallery = output.photos.photo;

    })
  }
  return factory;
});
