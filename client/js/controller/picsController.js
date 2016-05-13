myApp.controller('picsController', function($scope, picFactory){
  picFactory.index(function(pics){
    $scope.pics = pics;
  })

  picFactory.jsonFlickrApi(function(flickrPics){
    $scope.flickrPics = flickrPics.photos.photo;
    console.log($scope.flickrPics);
  })
})
