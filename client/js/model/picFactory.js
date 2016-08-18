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
    $http.get("https://api.flickr.com/services/rest/?method=flickr.people.getPhotos&api_key=d40cd7a3a328ff468a970240ae330dc8&user_id=134646885%40N03&per_page=25&format=json&nojsoncallback=1&auth_token=72157671695900731-39d1769bf86f83d2&api_sig=e46791c817d37718c273d21ab006343f").success(function(output){
      callback(output);
      console.log(output);
      gallery = output.photos.photo;

    })
  }
  return factory;
});
