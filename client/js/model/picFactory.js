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
    $http.get("https://api.flickr.com/services/rest/?method=flickr.people.getPhotos&api_key=c386dc0489ca7525fc773733b7da72e6&user_id=134646885%40N03&per_page=15&format=json&nojsoncallback=1&auth_token=72157673025623576-b61470859097b508&api_sig=3c63c000ddfb6303a8e372c4719a97d5").success(function(output){
      callback(output);
      console.log(output);
      gallery = output.photos.photo;

    })
  }
  return factory;
});
