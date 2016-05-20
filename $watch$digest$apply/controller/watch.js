var watcher = angular.module('watcher',[]);

watcher.controller('myCtrl',function($scope){
    $scope.username='VAIBHAV';
    $scope.counter=0;

    $scope.$watch('username',function(newVal, oldVal){
        $scope.counter = $scope.counter + 1;
    });
});