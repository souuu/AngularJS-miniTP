const appComponent = {
    templateUrl: 'app/app.component.html',
    component: function () {
        console.log("app entered !");
    }
}

angular.module('adictiz').component('adictiz', appComponent);