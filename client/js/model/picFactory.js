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
    $http.get("https://api.flickr.com/services/rest/?method=flickr.people.getPhotos&api_key=e2e36ae3030ea4ef5f9144687ac93509&user_id=134646885%40N03&format=json&nojsoncallback=1&auth_token=72157668655346295-6189af2eaa81d403&api_sig=adc8a3a1d9dd545c8f7117d5f8019abf").success(function(output){
      callback(output);
      console.log(output);
      gallery = output.photos.photo;

    })
  }
  return factory;
});
