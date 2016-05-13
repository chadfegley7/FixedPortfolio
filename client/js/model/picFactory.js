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
    $http.get("https://api.flickr.com/services/rest/?method=flickr.people.getPhotos&api_key=81a3ca2a73f2dcc166abed21c269dcc8&user_id=134646885%40N03&format=json&nojsoncallback=1&auth_token=72157667654837380-4028b6dd8df1cb0e&api_sig=d2689c5e8cf46144ef3ccb8f6fb8bd24").success(function(output){
      callback(output);
      console.log(output);
      gallery = output.photos.photo;
      
    })
  }
  return factory;
});
