var form = angular.module('form',[]);

form.controller('mainCtrl', function($scope){
    $scope.submitForm=function(){
        if($scope.userFormValid.$valid){
            alert('Form Validation is amazing');
        }
    }
})