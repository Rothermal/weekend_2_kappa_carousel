/**
 * Created by JFCS on 3/4/16.
 */
var app = angular.module('myApp', ['ngRoute']);


var globalKappa = [];
var globalTheta =[];
var globalCharlie =[];

app.config(['$routeProvider','$locationProvider',  function($routeProvider,$locationProvider) {

    $routeProvider
        .when('/', {
         templateUrl: '/views/templates/home.html',
        controller: 'HomeController'
        })
        .when('/kappa', {
            templateUrl: '/views/templates/kappa.html',
            controller: 'KappaController'
        })
        .when('/theta', {
            templateUrl: '/views/templates/theta.html',
            controller: 'ThetaController'
        })
        .when('/charlie', {
            templateUrl: '/views/templates/charlie.html',
            controller: 'CharlieController'
        })
        .otherwise({
            redirectTo: '/'
        });

    $locationProvider.html5Mode(true);
}]);

app.controller('MainController',['$scope','$http',function($scope,$http){

    $scope.cat = "/assets/images/KappacatBLUE.png";
    $scope.title = "Thappa Carousel";

    $scope.kappa = function() {
        $http.get('/cohort/kappa').then(function (response) {
            console.log(response.data.kappa);
            globalKappa = response.data.kappa;
            //for(var i = 0; i< globalKappa.length;i++){
            //    globalKappa[i].carouselIndex = i ;
            //}
        });
    };

    $scope.theta = function() {
        $http.get('/cohort/theta').then(function (response) {
            console.log(response.data.people);
            globalTheta = response.data.people;
        });
    };

    $scope.charlie = function() {
        $http.get('/cohort/charlie').then(function (response) {
            console.log(response.data);
            globalCharlie = response.data;
        });
    };
    $scope.kappa();
    $scope.theta();
    $scope.charlie();
}]);

app.controller('KappaController',['$scope',function($scope){
        $scope.students = globalKappa;


}]);

app.controller('ThetaController',['$scope',function($scope){
        $scope.students = globalTheta;

}]);

app.controller('CharlieController',['$scope',function($scope){
        $scope.charlie = globalCharlie;

}]);

app.controller('HomeController',['$scope',function($scope){
   $scope.title = 'Click the Tabs above to pick a cohort.';

}]);