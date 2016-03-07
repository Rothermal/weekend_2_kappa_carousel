/**
 * Created by JFCS on 3/4/16.
 */
var app = angular.module('myApp', ['ngRoute']);

var globalEta = [];
var globalIota = [];
var globalKappa = [];
var globalTheta =[];
var globalGamma =[];
var globalEpsilon =[];
var globalZeta =[];

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
        .when('/iota', {
            templateUrl: '/views/templates/iota.html',
            controller: 'IotaController'
        })
        .when('/eta', {
            templateUrl: '/views/templates/eta.html',
            controller: 'EtaController'
        })
        .when('/gamma', {
            templateUrl: '/views/templates/gamma.html',
            controller: 'GammaController'
        })
        .when('/epsilon', {
            templateUrl: '/views/templates/epsilon.html',
            controller: 'EpsilonController'
        })
        .when('/zeta', {
            templateUrl: '/views/templates/zeta.html',
            controller: 'ZetaController'
        })
        .otherwise({
            redirectTo: '/'
        });

    $locationProvider.html5Mode(true);
}]);



app.controller('MainController',['$scope','$http',function($scope,$http){

    $scope.cat = "/assets/images/KappacatBLUE.png";
    $scope.title = "Prime Carousel";

    $scope.kappa = function() {
        $http.get('/cohort/kappa').then(function (response) {
            console.log(response.data.kappa);
            globalKappa = response.data.kappa;
        });
    };

    $scope.theta = function() {
        $http.get('/cohort/theta').then(function (response) {
            console.log(response.data.people);
            globalTheta = response.data.people;
        });
    };

    $scope.gamma = function() {
        $http.get('/cohort/gamma').then(function (response) {
            console.log(response.data.gamma);
            globalGamma = response.data.gamma;
        });
    };

    $scope.epsilon = function() {
        $http.get('/cohort/epsilon').then(function (response) {
            console.log(response.data.epsilon);
            globalEpsilon = response.data.epsilon;
        });
    };

    $scope.zeta = function() {
        $http.get('/cohort/zeta').then(function (response) {
            console.log(response.data.zeta);
            globalZeta = response.data.zeta;
        });
    };


    $scope.iota = function() {
        $http.get('/cohort/iota').then(function (response) {
            console.log(response.data.people);
            globalIota = response.data.people;
            for(var i = 0; i<globalIota.length;i++)
            grabMoviePoster(globalIota[i]);
        });
    };

    $scope.eta = function() {
        $http.get('/cohort/eta').then(function (response) {
            console.log(response.data.eta);
            globalEta = response.data.eta;
            for(var i = 0; i<globalEta.length;i++)
                grabEtaMoviePoster(globalEta[i]);
        });
    };

    $scope.charlie = function() {
        $http.get('/cohort/charlie').then(function (response) {
            console.log(response.data);
            globalCharlie = response.data;
        });
    };

    function grabMoviePoster(student) {
        //console.log(student.favoriteMovie1);
        var id = student.favoriteMovie1;
        $http.get('/cohort/movie/' + id).then(function (response) {
            //console.log(response.data);
            student.moviePoster = response.data;
        });

    }

    function grabEtaMoviePoster(student) {

        var index = randomNumber(0,student.favoriteMovies.length - 1);

        var id = student.favoriteMovies[index].movieName;
        $http.get('/cohort/movie/' + id).then(function (response) {
            //console.log(response.data);
            student.moviePoster = response.data;
        });

    }

    function randomNumber (min, max) {
        return Math.floor(Math.random() * (1 + max - min) + min);

    }

    $scope.kappa();
    $scope.theta();
    $scope.iota();
    $scope.eta();
    $scope.zeta();
    $scope.gamma();
    $scope.epsilon();
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

app.controller('IotaController',['$scope',function($scope){
    $scope.students = globalIota;

}]);

app.controller('EtaController',['$scope',function($scope){
    $scope.students = globalEta;

}]);

app.controller('GammaController',['$scope',function($scope){
    $scope.students = globalGamma;

}]);

app.controller('EpsilonController',['$scope',function($scope){
    $scope.students = globalEpsilon;

}]);

app.controller('ZetaController',['$scope',function($scope){
    $scope.students = globalZeta;

}]);

app.controller('HomeController',['$scope',function($scope){
   $scope.title = 'Click the Tabs above to pick a cohort.';

}]);


