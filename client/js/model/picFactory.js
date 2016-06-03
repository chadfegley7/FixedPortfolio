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
    $http.get("https://api.flickr.com/services/rest/?method=flickr.people.getPhotos&api_key=27a873d484d7b571e5dcef614707eab9&user_id=134646885%40N03&per_page=50&format=json&nojsoncallback=1&auth_token=72157669282385865-2135927af2032aa1&api_sig=9a01f979ab535015dce8a20765abd224").success(function(output){
      callback(output);
      console.log(output);
      gallery = output.photos.photo;

    })
  }
  return factory;
});
