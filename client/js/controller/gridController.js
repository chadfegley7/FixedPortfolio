myApp.controller('appCtrl',['$scope','fgDelegate','ngFlowGrid',function($scope,fgDelegate){

    $scope.updateGrid = function(){
        var homePageGrid = fgDelegate.getFlow('homePageGrid');

        // then you can:
        homePageGrid.minItemWidth += 20;
        homePageGrid.refill(true);
    }

}]);
