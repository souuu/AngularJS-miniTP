app.factory('galleryservice',galleryservice) ;
galleryservice.$inject = ['$http'] ;
function galleryservice($http) {
    return {
        getPhotos: getPhotos
    };

    function getPhotos() {
        return $http.get('/photos.json')
            .then(getPhotosComplete)
            .catch(getPhotosFailed);

        function getPhotosComplete(response) {
            return response.data;
        }

        function getPhotosFailed(error) {
            console.log('XHR Failed for getPhotos.' + error.data);
        }
    }
}