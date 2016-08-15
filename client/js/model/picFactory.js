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
    $http.get("https://api.flickr.com/services/rest/?method=flickr.people.getPhotos&api_key=dcb5161bb9c78a1ede1fbd405ab4aeb8&user_id=134646885%40N03&per_page=25&format=json&nojsoncallback=1&auth_token=72157671317984790-27660b2f939760ed&api_sig=b7ccbe03db0b481c0d4257ba7665025f").success(function(output){
      callback(output);
      console.log(output);
      gallery = output.photos.photo;

    })
  }
  return factory;
});
