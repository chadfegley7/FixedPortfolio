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
    $http.get("https://api.flickr.com/services/rest/?method=flickr.people.getPhotos&api_key=e10126458579a7d546cfda49dd368a42&user_id=134646885%40N03&per_page=15&format=json&nojsoncallback=1&auth_token=72157673609361445-e2222ae4cdcc95d7&api_sig=648e2e9aff302b2b40ec728fb59823e6").success(function(output){
      callback(output);
      console.log(output);
      gallery = output.photos.photo;

    })
  }
  return factory;
});
