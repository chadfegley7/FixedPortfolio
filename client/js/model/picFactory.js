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
    $http.get("https://api.flickr.com/services/rest/?method=flickr.people.getPhotos&api_key=60314a392bb45d072a32cf846e506218&user_id=134646885%40N03&per_page=100&format=json&nojsoncallback=1&auth_token=72157668678524394-509020721a9bddd9&api_sig=e422ad9af66bdb68244b93ef84b56f03").success(function(output){
      callback(output);
      console.log(output);
      gallery = output.photos.photo;

    })
  }
  return factory;
});
