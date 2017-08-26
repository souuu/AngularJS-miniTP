(function(){
    var app = angular.module('myApp', ['ui.router','ngAnimate', 'ngSanitize', 'ui.bootstrap']);
    app.controller('HeaderCtrl', function ($scope) {
        $scope.isNavCollapsed = true;
        $scope.isCollapsed = false;
        $scope.isCollapsedHorizontal = false;
    });

    app.config(function($stateProvider) {
        var aboutme = {
            name: 'aboutme',
            url: '/aboutme',
            templateUrl: "/aboutme/aboutme.html"
        };

        var review = {
            name: 'review',
            url: '/review',
            templateUrl: "/review/review.html"
        };

        var gallery = {
            name: 'gallery',
            url: '/gallery',
            templateUrl: "/gallery/gallery.html"
        };

        var home = {
            name: 'home',
            url: '',
            templateUrl: "/aboutme/aboutme.html"
        };

        $stateProvider.state(aboutme);
        $stateProvider.state(review);
        $stateProvider.state(gallery);
        $stateProvider.state(home);
    });

    app.controller('ReviewController', ['$http', function($http){
        this.review = {};
        this.reviews = [];
        var me = this;
        $http.get('reviews.json').then(successCallback, errorCallback);

        function successCallback(response){
            me.reviews = response.data;
        }
        function errorCallback(error){
           console.log("error !") ;
        }

//add a review
        this.addReview = function() {
            me.reviews.push(this.review);
//Clear review
            this.review = {};
        };
    }]);


})();
