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
    $http.get("https://api.flickr.com/services/rest/?method=flickr.people.getPhotos&api_key=a26f37cbaa4f90dcdcc9f70f9a92250b&user_id=134646885%40N03&per_page=15&format=json&nojsoncallback=1&auth_token=72157671900974022-73f854b418c9f2d3&api_sig=0415f11b3ab597290cec54153281e4cb").success(function(output){
      callback(output);
      console.log(output);
      gallery = output.photos.photo;

    })
  }
  return factory;
});
