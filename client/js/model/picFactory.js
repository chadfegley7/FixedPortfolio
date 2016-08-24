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
    $http.get("https://api.flickr.com/services/rest/?method=flickr.people.getPhotos&api_key=8287f7bc8d49d6904d8e1b2b29e0d993&user_id=134646885%40N03&max_upload_date=1451520000&per_page=15&format=json&nojsoncallback=1&auth_token=72157672910415835-4601cbc18e8e55a1&api_sig=0546c9d41f0aad7576e1c8ed96cfc5ad").success(function(output){
      callback(output);
      console.log(output);
      gallery = output.photos.photo;

    })
  }
  return factory;
});
