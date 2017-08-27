(function(){
    var app = angular.module('myApp', ['ngFlag','pascalprecht.translate','angular-growl','ngCookies','ui.router','ngAnimate', 'ngSanitize', 'ui.bootstrap']);
    app.controller('HeaderCtrl', function ($scope,$log,$translate) {
        var lang = $translate.use();
        $translate.use('FR');
        this.items = [
            'FR',
            'EN'
        ];

        $scope.selectedItem='FR';

        $scope.changeLanguage=function (language) {
            if (language=='FR' && $scope.selectedItem=='FR') {
            }
            else if(language == 'FR') {
                $scope.selectedItem='FR';
                $translate.use('FR');
            }
            else  if (language=='EN' && $scope.selectedItem=='EN') {
            }
            else if(language == 'EN') {
                $scope.selectedItem='EN';
                $translate.use('EN');
            }
        };

        $scope.status = {
            isopen: false
        };

        $scope.toggled = function(open) {
            $log.log('Dropdown is now: ', open);
        };

        $scope.toggleDropdown = function($event) {
            $event.preventDefault();
            $event.stopPropagation();
            $scope.status.isopen = !$scope.status.isopen;
        };

        $scope.appendToEl = angular.element(document.querySelector('#dropdown-long-content'));

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

    app.config(['$translateProvider', function ($translateProvider) {
        $translateProvider.translations('EN', {
            'aboutme': 'About Me',
            'name': 'Name'
        });

        $translateProvider.translations('FR', {
            'aboutme': 'A propos de moi',
            'name': 'Nom & Prénom'
        });

        $translateProvider.preferredLanguage('fr');
    }]);

    app.controller('ReviewController', ['$scope','growl','$cookies', function($scope,growl,$cookies){
        $scope.showWarning = function(){
            growl.warning('This is a warning mesage.',{title: 'Warning!'});
        };
        $scope.showError = function(){
            growl.error('This is a error mesage.',{title: 'Error!'});
        };
        $scope.showSuccess = function(){
            growl.success('This is a success mesage.',{title: 'Success!'});
        };
        $scope.showInfo = function(){
            growl.info('This is an info mesage.',{title: 'Info!'});
        };
        $scope.showAll = function(){
            growl.warning('This is warning mesage.',{title: 'Warning!'});
            growl.error('This is error mesage.',{title: 'Error!'});
            growl.success('This is success mesage.',{title: 'Success!'});
            growl.info('This is an info mesage.',{title: 'Info!'});
        };


        this.review = {
            "firstname": "",
            "lastname": "",
            "birthdate": "",
            "email": "",
            "content" : "",
            "stars" : 0
        };
        this.reviews = [];
        var me = this;




//add a review
        this.addReview = function() {
            if(!$scope.reviewForm.firstname.$valid) {
                growl.error('Please put a firstname.',{title: 'Error!'});
            }
            else if(!$scope.reviewForm.lastname.$valid) {
                growl.error('Please put a lastname.',{title: 'Error!'});
            }
            else if(!$scope.reviewForm.email.$valid) {
                growl.error('Please put a valid email.', {title: 'Error!'});
            }
            else if(!$scope.reviewForm.birthdate.$valid) {
                growl.error('Please put a valid birthdate.',{title: 'Error!'});
            }
            else if(!$scope.reviewForm.stars.$valid) {
                growl.error('Please select a number of stars.',{title: 'Error!'});
            }
            else if(!$scope.reviewForm.content.$valid) {
                growl.error('Please put a content.',{title: 'Error!'});
            }
            else {
                me.reviews.push(this.review);
                 $cookies.put('Review', JSON.stringify(this.review));
                 console.log($cookies.getObject('Review'));
                 //Clear review
                 this.review = {};
                growl.success('Your review is added !',{title: 'Success!'});
            }

        };
    }]);

    app.controller('GalleryController',['$http','$scope','$uibModal','$log','$document', function ($http,$scope,$uibModal, $log, $document) {
        var $ctrl = this;
        $ctrl.photoSelected ={
            "name": "New York",
            "url": "https://media-cdn.tripadvisor.com/media/photo-s/0e/9a/e3/1d/freedom-tower.jpg",
            "category": "Places",
            "tags": ["newyork","places"],
            "description":"Une vue très agréable de New York ! :D"
        };
        $ctrl.animationsEnabled = true;
        $ctrl.open = function (size, parentSelector) {
            var parentElem = parentSelector ?
                angular.element($document[0].querySelector('.modal-demo ' + parentSelector)) : undefined;
            var modalInstance = $uibModal.open({
                animation: $ctrl.animationsEnabled,
                ariaLabelledBy: 'modal-title',
                ariaDescribedBy: 'modal-body',
                templateUrl: 'myModalContent.html',
                controller: 'ModalInstanceCtrl',
                controllerAs: '$ctrl',
                size: size,
                appendTo: parentElem,
                resolve: {
                    photoSelected: function () {
                        return $ctrl.photoSelected;
                    }
                }
            });

            modalInstance.result.then(function (selectedItem) {
                $ctrl.selected = selectedItem;
            }, function () {
                $log.info('Modal dismissed at: ' + new Date());
            });
        };

        var me=this ;
        this.categories = [];
        this.filter="";
        this.category="";
        this.photos = [{
            "name": "New York",
            "url": "https://media-cdn.tripadvisor.com/media/photo-s/0e/9a/e3/1d/freedom-tower.jpg",
            "category": "Places",
            "tags": ["newyork","places"],
            "description":"Une vue très agréable de New York ! :D"
        }] ;
        this.searchphotos=[{
            "name": "New York",
            "url": "https://media-cdn.tripadvisor.com/media/photo-s/0e/9a/e3/1d/freedom-tower.jpg",
            "category": "Places",
            "tags": ["newyork","places"],
            "description":"Une vue très agréable de New York ! :D"
        }];
        $http.get('photos.json').then(successCallback, errorCallback);

         function successCallback(response){
         me.photos = response.data;
         me.searchphotos=me.photos;
             console.log(me.photos);
         for (var i=0;i<me.photos.length;i++) {
             if (!me.categories.find(function(category){
                 return category==me.photos[i].category
                 })) {
                 me.categories.push(me.photos[i].category);
             }
         }
         };
         function errorCallback(error){
         console.log("error !") ;
         };

         this.hasTags = function (tags) {
             for (var i =0 ; i< tags.length; i++) {
                 if (tags[i].toUpperCase().indexOf(me.filter.toUpperCase())!=-1) {
                     return true ;
                 }
             }
             return false ;
         };

         $scope.changeFilter = function () {
             me.searchphotos = me.photos.filter(function(photo){
                 return ((photo.name.toUpperCase().indexOf(me.filter.toUpperCase())!=-1)||(photo.category.toUpperCase().indexOf(me.filter.toUpperCase())!=-1)||me.hasTags(photo.tags));
             });
         };
         $scope.changeCategory = function () {
             if (me.category) {
                 me.searchphotos = me.photos.filter(function(photo){
                     return ((photo.category.toUpperCase().indexOf(me.category.toUpperCase())!=-1));
                 });
             }
         }
    }]);

    app.controller('ModalInstanceCtrl', function ($uibModalInstance, photoSelected) {
        var $ctrl = this;
        $ctrl.photoSelected=photoSelected;
        $ctrl.cancel = function () {
            $uibModalInstance.dismiss('cancel');
        };
    });

})();
