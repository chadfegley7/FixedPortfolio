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
    $http.get("https://api.flickr.com/services/rest/?method=flickr.people.getPhotos&api_key=4dfa0e3ce9920a9e3f3af12a6883c68a&user_id=134646885%40N03&per_page=50&format=json&auth_token=72157669502165985-a321593ace321009&api_sig=7c2ab5c760407b59c72e47bc8e160d7e").success(function(output){
      callback(output);
      console.log(output);
      gallery = output.photos.photo;

    })
  }
  return factory;
});
