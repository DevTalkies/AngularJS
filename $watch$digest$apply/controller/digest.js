var digester = angular.module('digester',[]);

digester.controller('digest',function($scope){
    $scope.date= new Date();
    $scope.updateTime= function(){
        $scope.date = new Date();
    }
    document.getElementById("updateTimebtn").addEventListener('click',function(){
        console.log("update Time clicked");
        $scope.date = new Date();

        /*$scope.$digest();*/
        console.log($scope.date);
    });
});
