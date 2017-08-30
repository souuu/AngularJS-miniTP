const gallery = {
    templateUrl: 'app/gallery/gallery.component.html',
    controller: function ($scope, $uibModal, $log, $document,galleryservice) {
        $scope.photoSelected = {
            "name": "New York",
            "url": "https://media-cdn.tripadvisor.com/media/photo-s/0e/9a/e3/1d/freedom-tower.jpg",
            "category": "Places",
            "tags": ["newyork", "places"],
            "description": "Une vue très agréable de New York ! :D"
        };
        $scope.animationsEnabled = true;
        $scope.open = function (size, parentSelector,photo) {
            $scope.photoSelected=photo;
            var parentElem = parentSelector ?
                angular.element($document[0].querySelector('.modal-demo ' + parentSelector)) : undefined;
            var modalInstance = $uibModal.open({
                animation: $scope.animationsEnabled,
                ariaLabelledBy: 'modal-title',
                ariaDescribedBy: 'modal-body',
                templateUrl: 'myModalContent.html',
                controller: 'ModalInstanceCtrl',
                controllerAs: '$ctrl',
                size: size,
                appendTo: parentElem,
                resolve: {
                    photoSelected: function () {
                        return $scope.photoSelected;
                    }
                }
            });

            modalInstance.result.then(function (selectedItem) {
                $ctrl.selected = selectedItem;
            }, function () {
                $log.info('Modal dismissed at: ' + new Date());
            });
        };
        $scope.categories = [];
        $scope.filter = "";
        $scope.category = "";
        $scope.photos = [{
            "name": "New York",
            "url": "https://media-cdn.tripadvisor.com/media/photo-s/0e/9a/e3/1d/freedom-tower.jpg",
            "category": "Places",
            "tags": ["newyork", "places"],
            "description": "Une vue très agréable de New York ! :D"
        }];
        $scope.searchphotos = [{
            "name": "New York",
            "url": "https://media-cdn.tripadvisor.com/media/photo-s/0e/9a/e3/1d/freedom-tower.jpg",
            "category": "Places",
            "tags": ["newyork", "places"],
            "description": "Une vue très agréable de New York ! :D"
        }];
        /*$http.get('photos.json').then(successCallback, errorCallback);

        function successCallback(response) {
            $scope.photos = response.data;
            $scope.searchphotos = $scope.photos;
            for (var i = 0; i < $scope.photos.length; i++) {
                if (!$scope.categories.find(function (category) {
                        return category == $scope.photos[i].category
                    })) {
                    $scope.categories.push($scope.photos[i].category);
                }
            }
        };
        function errorCallback(error) {
            console.log("error !");
        };*/

        galleryservice.getPhotos().then(function (data) {
            $scope.photos = data;
            $scope.searchphotos = $scope.photos;
            for (var i = 0; i < $scope.photos.length; i++) {
                if (!$scope.categories.find(function (category) {
                        return category == $scope.photos[i].category
                    })) {
                    $scope.categories.push($scope.photos[i].category);
                }
            }
        });

        $scope.hasTags = function (tags) {
            for (var i = 0; i < tags.length; i++) {
                if (tags[i].toUpperCase().indexOf($scope.filter.toUpperCase()) != -1) {
                    return true;
                }
            }
            return false;
        };

        $scope.changeFilter = function () {
            if ($scope.category) {
                $scope.searchphotos = $scope.photos.filter(function (photo) {
                    return (((photo.name.toUpperCase().indexOf($scope.filter.toUpperCase()) != -1) || (photo.category.toUpperCase().indexOf($scope.filter.toUpperCase()) != -1) || $scope.hasTags(photo.tags)) && (photo.category.toUpperCase().indexOf($scope.category.toUpperCase()) != -1));
                });
            }
            else {
                $scope.searchphotos = $scope.photos.filter(function (photo) {
                    return (((photo.name.toUpperCase().indexOf($scope.filter.toUpperCase()) != -1) || (photo.category.toUpperCase().indexOf($scope.filter.toUpperCase()) != -1) || $scope.hasTags(photo.tags)));
                });
            }
        };
        $scope.changeCategory = function () {
            if ($scope.category) {
                $scope.searchphotos = $scope.photos.filter(function (photo) {
                    return (((photo.name.toUpperCase().indexOf($scope.filter.toUpperCase()) != -1) || (photo.category.toUpperCase().indexOf($scope.filter.toUpperCase()) != -1) || $scope.hasTags(photo.tags)) && (photo.category.toUpperCase().indexOf($scope.category.toUpperCase()) != -1));
                });
            }
            else {
                $scope.searchphotos = $scope.photos.filter(function (photo) {
                    return (((photo.name.toUpperCase().indexOf($scope.filter.toUpperCase()) != -1) || (photo.category.toUpperCase().indexOf($scope.filter.toUpperCase()) != -1) || $scope.hasTags(photo.tags)));
                });
            }
        };
    }
}

angular.module('adictiz').component('gallery', gallery);