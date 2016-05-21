var binding = angular.module('binding',['ngMaterial', 'ngMessages']);

binding.controller('mainCtrl',function($scope) {
      $scope.developer={
        name:'Dev Talkies',
        description: 'Place where developer share your tech talent',
        email:'devtalkies@gmail.com',
        img:'http://www.tradesingh.com/uploadedimages/default-company-logo.jpg',
        facebook:'https://www.facebook.com/devtalkies/',
        google:'https://plus.google.com/u/0/101146889916164881481',
        twitter:'https://twitter.com/DevTalkies',
        github:'https://github.com/devtalkies',
        linkedin:'https://in.linkedin.com/in/devtalkies',
      }
});
