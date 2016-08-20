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
    $http.get("https://api.flickr.com/services/rest/?method=flickr.people.getPhotos&api_key=706f3d90e104eb1d1ae70df1627f63ef&user_id=134646885%40N03&per_page=25&format=json&nojsoncallback=1&auth_token=72157672724957445-9f2f13694c74f501&api_sig=4b6b2b74b454c46b9ca4e59dbe1b4f75").success(function(output){
      callback(output);
      console.log(output);
      gallery = output.photos.photo;

    })
  }
  return factory;
});
