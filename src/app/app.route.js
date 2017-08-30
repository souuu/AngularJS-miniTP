app.config(function($stateProvider) {
    var aboutMe = {
        name: 'aboutme',
        url: '/aboutme',
        component: 'aboutMe'
    };

    var review = {
        name: 'review',
        url: '/review',
        component: 'review'
    };

    var gallery = {
        name: 'gallery',
        url: '/gallery',
        component: 'gallery'
    };

    var home = {
        name: 'home',
        url: '',
        component: 'aboutMe'
    };

    $stateProvider.state(aboutMe);
    $stateProvider.state(review);
    $stateProvider.state(gallery);
    $stateProvider.state(home);
});