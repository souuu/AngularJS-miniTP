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
            'review':'Review',
            'gallery':'Gallery',
            'submitreview':'Submit a Review',
            'firstname':'Your firstname',
            'lastname':'Your lastname',
            'ratesite':'Rate the site',
            'writereview':'Write a short review of the site...',
            'submit':"Submit Review",
            'category':"Category",
            'tags':'Tags',
            'keyword' :'Type a keyword ...',
            'cancel' :'Cancel',
            'name': 'Name',
            'birthdate' : 'Birthdate',
            'nationality' : 'Nationality',
            'tunisian' : 'Tunisian',
            'tel' : 'Telephone',
            'diplome' : 'Degrees & Formations',
            'pro' : 'Professional experiences',
            'project' : 'Public Projects',
            'cycleing' : "Engineer's Cycle in Software Engineering",
            'septembre' : 'September',
            'present' : 'Present',
            'insat': "National Institute of Applied Sciences and Technology (INSAT) Ariana, Tunisia",
            'prepa' : 'Integrated preparatory cycle',
            'juin' : 'June',
            'pilote' : 'Pilote High School Sfax - Section : mathematics - Very Good',
            'devweb' : 'Web Developer & Web Desginer - Part time',
            'conception' : 'Platform Design - Wireframes & Web Interfaces',
            'integration' : 'HTML / CSS integration',
            'implementation' : 'Web Application implemenetation : Angular 2/4',
            'stage' : 'Engineer internship / Web development',
            'aout' : 'August',
            'vyndmanager' : 'Design and development of the management platform for Vynd partner merchants: Vynd Manager.',
            'juillet' :'July',
            'vynduser': "Design and development of Vynd's community responsive web platform: Vynd User.",
            'android': "Android application that presents the different prices of the Tunisian market, banks and nearby financial institutions and a currency converter.",
            'elearning' : 'Design and development of a web-based e-learning platform.',
            'unity' : 'Design and development of an Android mobile app that is a reflexion game developed with Unity 3D.',
            'bac': 'baccalaureate',
            'madewith':'Made With',
            'intunis':'in Tunis'





        });

        $translateProvider.translations('FR', {
            'aboutme': 'A propos de moi',
            'review':'Critiquer',
            'gallery':'Gallerie',
            'submitreview':'Envoyer une évaluation',
            'firstname':'Votre prénom',
            'lastname':'Votre nom',
            'ratesite':'Evaluer le site',
            'writereview':'Ecrire une courte évaluation du site ...',
            'submit':"Envoyer l'évaluation",
            'category':"Catégorie",
            'tags':'Mots clés',
            'keyword' :'Ecrire un mot clé ...',
            'cancel' :'Annuler',
            'name': 'Nom & Prénom',
            'birthdate' : 'Date de naissance',
            'nationality' : 'Nationalité',
            'tunisian' : 'Tunisienne',
            'tel' : 'Téléphone',
            'diplome' : 'Diplômes & Formations',
            'pro' : 'Expériences professionelles',
            'project' : 'Projets Publiques',
            'cycleing' : "Cycle d’ingénieur en Génie Logiciel",
            'septembre' : 'Septembre',
            'present' : 'Présent',
            'insat' : "Institut National des Sciences Appliquées et de Technologie (INSAT) Ariana,Tunisie",
            'prepa' : 'Cycle préparatoire intégré',
            'juin': 'Juin',
            'pilote' : 'Lycée Pilote Sfax - Section : Mathématiques - Mention Très Bien',
            'devweb' : 'Développeur Web & Designer Web à temps partiel',
            'conception':'Conception des plateformes : Wireframes & Interfaces Web.',
            'integration' : 'Intégration HTML/CSS',
            'implementation' : 'Implémentation des applications web : Angular 2/4',
            'stage' : 'Stage Ingénieur / Développement web',
            'aout' : 'Aout',
            'vyndmanager' : 'Conception et développement de la plateforme de gestion pour les commerçants partenaires de Vynd : Vynd Manager.',
            'juillet' : 'Juillet',
            'vynduser' : 'Conception et développement de la plateforme communautaire web responsive de Vynd : Vynd User.',
            'android' : 'Application Android qui présente les différents cours du marché tunisien, les banques et les établissements financiers proches et un convertisseur de devise.',
            'elearning': "Conception et développement d'une plateforme web de e-learning.",
            'unity' : 'Conception et développement d’une application mobile Android se résumant à un jeu de réflexion développé avec Unity 3D.',
            'bac':'Baccalauréat',
            'madewith':'Crée avec',
            'intunis':'à Tunis'









        });

        $translateProvider.preferredLanguage('fr');
    }]);

    app.controller('ReviewController', ['$scope','growl','$cookies','$translate', function($scope,growl,$cookies,$translate){
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
            if($translate.use()=='FR') {
                me.firstname='Veuillez mettre un prénom.';
                me.lastname='Veuillez mettre un nom.';
                me.email='Veuillez mettre un mail valide.';
                me.birthdate='Veuillez mettre une date de naissance valide.';
                me.stars="Veuillez sélectionner le nombre d'étoiles ";
                me.content='Veuillez mettre une évaluation.';
                me.add='Votre évaluation est ajoutée !';
                me.success = 'Succès !';
                me.error = 'Erreur !'
            }
            else {
                me.firstname='Please put a firstname.';
                me.lastname='Please put a lastname.';
                me.email='Please put a valid email.';
                me.birthdate='Please put a valid birthdate.';
                me.stars='Please select a number of stars.';
                me.content='Please put a review.';
                me.add='Your review is added !';
                me.success = 'Success !';
                me.error = 'Error !'
            };

            if(!$scope.reviewForm.firstname.$valid) {
                growl.error(me.firstname,{title: 'Error!'});
            }
            else if(!$scope.reviewForm.lastname.$valid) {
                growl.error(me.lastname,{title: 'Error!'});
            }
            else if(!$scope.reviewForm.email.$valid) {
                growl.error(me.email, {title: 'Error!'});
            }
            else if(!$scope.reviewForm.birthdate.$valid) {
                growl.error(me.birthdate,{title: 'Error!'});
            }
            else if(!$scope.reviewForm.stars.$valid) {
                growl.error(me.stars,{title: 'Error!'});
            }
            else if(!$scope.reviewForm.content.$valid) {
                growl.error(me.content,{title: 'Error!'});
            }
            else {
                me.reviews.push(this.review);
                 $cookies.put('Review', JSON.stringify(this.review));
                 console.log($cookies.getObject('Review'));
                 //Clear review
                 this.review = {};
                growl.success(this.add,{title: 'Success!'});
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
             if (me.category) {
                 me.searchphotos = me.photos.filter(function(photo){
                     return (((photo.name.toUpperCase().indexOf(me.filter.toUpperCase())!=-1)||(photo.category.toUpperCase().indexOf(me.filter.toUpperCase())!=-1)||me.hasTags(photo.tags))&&(photo.category.toUpperCase().indexOf(me.category.toUpperCase())!=-1));
                 });
             }
             else {
                 me.searchphotos = me.photos.filter(function(photo){
                     return (((photo.name.toUpperCase().indexOf(me.filter.toUpperCase())!=-1)||(photo.category.toUpperCase().indexOf(me.filter.toUpperCase())!=-1)||me.hasTags(photo.tags))&&(photo.category.toUpperCase().indexOf(me.category.toUpperCase())!=-1));
                 });
             }
         };
         $scope.changeCategory = function () {
             if (me.category) {
                 me.searchphotos = me.photos.filter(function(photo){
                     return ((photo.category.toUpperCase().indexOf(me.category.toUpperCase())!=-1));
                 });
             }
             else {
                 me.searchphotos=me.photos;
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
