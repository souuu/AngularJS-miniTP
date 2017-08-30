const review = {
    templateUrl: 'app/review/review.component.html',
    controller: function ($scope, growl, $cookies, $translate) {
        this.review = {
            "firstname": "",
            "lastname": "",
            "birthdate": "",
            "email": "",
            "content": "",
            "stars": 0
        };
        this.reviews = [];
        var me = this;


        //add a review
        $scope.addReview = function () {
            if ($translate.use() == 'FR') {
                me.firstname = 'Veuillez mettre un prénom.';
                me.lastname = 'Veuillez mettre un nom.';
                me.email = 'Veuillez mettre un mail valide.';
                me.birthdate = 'Veuillez mettre une date de naissance valide.';
                me.stars = "Veuillez sélectionner le nombre d'étoiles ";
                me.content = 'Veuillez mettre une évaluation.';
                me.add = 'Votre évaluation est ajoutée !';
                me.success = 'Succès !';
                me.error = 'Erreur !'
            }
            else {
                me.firstname = 'Please put a firstname.';
                me.lastname = 'Please put a lastname.';
                me.email = 'Please put a valid email.';
                me.birthdate = 'Please put a valid birthdate.';
                me.stars = 'Please select a number of stars.';
                me.content = 'Please put a review.';
                me.add = 'Your review is added !';
                me.success = 'Success !';
                me.error = 'Error !'
            }
            ;

            if (!$scope.reviewForm.firstname.$valid) {
                growl.error(me.firstname, {title: 'Error!'});
            }
            else if (!$scope.reviewForm.lastname.$valid) {
                growl.error(me.lastname, {title: 'Error!'});
            }
            else if (!$scope.reviewForm.email.$valid) {
                growl.error(me.email, {title: 'Error!'});
            }
            else if (!$scope.reviewForm.birthdate.$valid) {
                growl.error(me.birthdate, {title: 'Error!'});
            }
            else if (!$scope.reviewForm.stars.$valid) {
                growl.error(me.stars, {title: 'Error!'});
            }
            else if (!$scope.reviewForm.content.$valid) {
                growl.error(me.content, {title: 'Error!'});
            }
            else {
                me.reviews.push(this.review);
                $cookies.put('Review', JSON.stringify(this.review));
                console.log($cookies.getObject('Review'));
                //Clear review
                this.review = {};
                growl.success(this.add, {title: 'Success!'});
            }

        };
    }
};

angular.module('adictiz').component('review', review);