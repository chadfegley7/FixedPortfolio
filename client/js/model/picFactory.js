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
    $http.get("https://api.flickr.com/services/rest/?method=flickr.people.getPhotos&api_key=44d92e669fdb5e38c10ed3981d6155f8&user_id=134646885%40N03&per_page=25&format=json&nojsoncallback=1&auth_token=72157672492296425-c3a1a06377f9c5f2&api_sig=cf3a325f9a9471d67dc3d55359c956f7").success(function(output){
      callback(output);
      console.log(output);
      gallery = output.photos.photo;

    })
  }
  return factory;
});
