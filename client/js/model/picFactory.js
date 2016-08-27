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
    $http.get("https://api.flickr.com/services/rest/?method=flickr.people.getPhotos&api_key=b09ec1d2369f7ef0c69277f735c1fe5d&user_id=134646885%40N03&max_upload_date=1451520000&per_page=15&format=json&nojsoncallback=1&auth_token=72157672062081911-af55cc93ac82a1da&api_sig=c895df09c75314b0aaf7df1bc8503fdb").success(function(output){
      callback(output);
      console.log(output);
      gallery = output.photos.photo;

    })
  }
  return factory;
});
