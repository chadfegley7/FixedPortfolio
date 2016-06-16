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
    $http.get("https://api.flickr.com/services/rest/?method=flickr.people.getPhotos&api_key=3db2803310f5f4514a2d0dc5b351b619&user_id=134646885%40N03&per_page=100&format=json&nojsoncallback=1&auth_token=72157669342096981-3558845e78c82ffd&api_sig=66d6b262958f01b03ef0361992ea5f05").success(function(output){
      callback(output);
      console.log(output);
      gallery = output.photos.photo;

    })
  }
  return factory;
});
