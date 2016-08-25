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
    $http.get("https://api.flickr.com/services/rest/?method=flickr.people.getPhotos&api_key=6d5c5a20d108f8f56f324394d3e2381f&user_id=134646885%40N03&max_upload_date=1451520000&per_page=15&format=json&nojsoncallback=1&auth_token=72157671745477170-4d2bcc3a264e9045&api_sig=03dd67d17b0aa5214123bf393682c80a").success(function(output){
      callback(output);
      console.log(output);
      gallery = output.photos.photo;

    })
  }
  return factory;
});
