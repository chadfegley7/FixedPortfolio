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
    $http.get("https://api.flickr.com/services/rest/?method=flickr.people.getPhotos&api_key=202a9ce136a30fdd03a911afc5157310&user_id=134646885%40N03&format=json&nojsoncallback=1&auth_token=72157668162025372-26a48b640630bc93&api_sig=b6ca42d405d23bf1eb4c98849db81768").success(function(output){
      callback(output);
      console.log(output);
      gallery = output.photos.photo;

    })
  }
  return factory;
});
