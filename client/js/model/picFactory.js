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
    $http.get("https://api.flickr.com/services/rest/?method=flickr.people.getPhotos&api_key=f011dc0791f155c2e8985f890830974f&user_id=134646885%40N03&max_upload_date=1451520000&per_page=15&format=json&nojsoncallback=1&auth_token=72157669789017863-9f8cada625a4aad3&api_sig=bfc6961270fc617d6f32240d409e2e48").success(function(output){
      callback(output);
      console.log(output);
      gallery = output.photos.photo;

    })
  }
  return factory;
});
