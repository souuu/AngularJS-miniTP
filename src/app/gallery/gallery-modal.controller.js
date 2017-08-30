app.controller('ModalInstanceCtrl',
    function ($uibModalInstance, photoSelected) {
        var $ctrl = this;
        $ctrl.photoSelected=photoSelected;
        $ctrl.cancel = function () {
            $uibModalInstance.dismiss('cancel');
        };
    });
