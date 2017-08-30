const header = {
    templateUrl: 'app/core/header/header.component.html',
    controller: function ($scope,$log,$translate) {
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
    }
};

angular.module('adictiz').component('adictizHeader', header);