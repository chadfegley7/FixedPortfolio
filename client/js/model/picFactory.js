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
    $http.get("https://api.flickr.com/services/rest/?method=flickr.people.getPhotos&api_key=feaf6ade57b93b5e807c7d2dd7539331&user_id=134646885%40N03&format=json&nojsoncallback=1&auth_token=72157666066404553-2b3d7da32de84d31&api_sig=b43d24c58214e0147f4aae3c9fa0cf1b").success(function(output){
      callback(output);
      console.log(output);
      gallery = output.photos.photo;

    })
  }
  return factory;
});
