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
    $http.get("https://api.flickr.com/services/rest/?method=flickr.people.getPhotos&api_key=8b93636d24f88ec1235f57579b38e851&user_id=134646885%40N03&per_page=25&format=json&nojsoncallback=1&auth_token=72157672674782836-97cb8d0d83510309&api_sig=264f9d626c7ae1421754af2d3548c00a").success(function(output){
      callback(output);
      console.log(output);
      gallery = output.photos.photo;

    })
  }
  return factory;
});
