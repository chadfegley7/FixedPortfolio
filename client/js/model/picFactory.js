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
    $http.get("https://api.flickr.com/services/rest/?method=flickr.people.getPhotos&api_key=fdac2e9676991ac53b34651adab52518&user_id=134646885%40N03&max_upload_date=1451520000&per_page=15&format=json&nojsoncallback=1&auth_token=72157672007104011-c441ae128d39d535&api_sig=50f739bfbed0b92b142744ff1a2e8cbd").success(function(output){
      callback(output);
      console.log(output);
      gallery = output.photos.photo;

    })
  }
  return factory;
});
