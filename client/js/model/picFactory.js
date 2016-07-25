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
    $http.get("https://api.flickr.com/services/rest/?method=flickr.people.getPhotos&api_key=39198b3177e0549e4b385063fe633935&user_id=134646885%40N03&per_page=100&format=json&nojsoncallback=1&auth_token=72157671450696266-643a2eadd5b684e8&api_sig=6d2684e60081401664184db146295fda").success(function(output){
      callback(output);
      console.log(output);
      gallery = output.photos.photo;

    })
  }
  return factory;
});
