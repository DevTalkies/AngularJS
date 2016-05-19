var myApp = angular.module('myApp',['ngRoute']);

myApp.config(function($routeProvider){
    $routeProvider

    //route for home page
        .when('/home',{
            templateUrl:'views/home.html',
            controller: 'mainCtrl'
        })

    //route for about page
        .when('/about',{
            templateUrl:'views/about.html',
            controller: 'aboutCtrl'
        })

    // route for contact page
        .when('/contact',{
            templateUrl:'views/contact.html',
            controller: 'contactCtrl'
        })
        .otherwise({
        redirectTo: '/home'
    });
    // use the HTML5 History API

});



myApp.controller('mainCtrl',function($scope){
        $scope.message='Everything is fine';
});

myApp.controller('aboutCtrl', function($scope){
        $scope.message = ' I am on About page ';
});

myApp.controller('contactCtrl', function($scope){
    $scope.message = ' I am on Contact page ';
});