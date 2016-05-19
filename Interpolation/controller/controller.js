var cusInterpolate = angular.module('cusInterpolate',[]);

cusInterpolate.config(function($interpolateProvider){
    $interpolateProvider.startSymbol('**');
    $interpolateProvider.endSymbol('**');
});

cusInterpolate.controller('interpolate',function($scope){
    $scope.msg = "This is new symbol for Interpolation";
})