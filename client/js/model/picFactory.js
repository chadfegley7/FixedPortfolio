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
    $http.get("https://api.flickr.com/services/rest/?method=flickr.people.getPhotos&api_key=3084fe452ec162eea74080c392cd2762&user_id=134646885%40N03&max_upload_date=14515200001&per_page=15&format=json&nojsoncallback=1&auth_token=72157671790006370-2cb04e0ca38ae60b&api_sig=c5bdf6ef621a785d275d638a57d68b16").success(function(output){
      callback(output);
      console.log(output);
      gallery = output.photos.photo;

    })
  }
  return factory;
});
