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
    $http.get("https://api.flickr.com/services/rest/?method=flickr.people.getPhotos&api_key=5266b70bed1ee1ccbd232d040f2fa7a2&user_id=134646885%40N03&per_page=150&format=json&nojsoncallback=1&auth_token=72157671102570735-a93f15291951d5ec&api_sig=72e45c00c9a2ff56dd94acf4baa82356").success(function(output){
      callback(output);
      console.log(output);
      gallery = output.photos.photo;

    })
  }
  return factory;
});
