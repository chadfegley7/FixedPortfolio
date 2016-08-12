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
    $http.get("https://api.flickr.com/services/rest/?method=flickr.people.getPhotos&api_key=231436095811c61bd392856e2b1a0952&user_id=134646885%40N03&page=72157672246593266&format=json&nojsoncallback=1&auth_token=72157671202811970-be47745e5f7a9943&api_sig=3d228735269dc094dd0c2400f5b1a215").success(function(output){
      callback(output);
      console.log(output);
      gallery = output.photos.photo;

    })
  }
  return factory;
});
