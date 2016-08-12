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
    $http.get("https://api.flickr.com/services/rest/?method=flickr.people.getPhotos&api_key=1affcf799ee6ad37aa79dafa2ce712d2&user_id=134646885%40N03&per_page=25&format=json&nojsoncallback=1&auth_token=72157672267806496-631a800387b475ab&api_sig=3733de8e800aeeb8c1f261c447b86b6d").success(function(output){
      callback(output);
      console.log(output);
      gallery = output.photos.photo;

    })
  }
  return factory;
});
