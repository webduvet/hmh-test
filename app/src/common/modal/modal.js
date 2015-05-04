(function(angular) {
  'use strict';

angular.module('Modals',['ui.bootstrap'])


.factory('mConfirm', function($modal, $log){
  // return promise to result from modal instance
  return {
    open: function(modalContent, size) {

      var modalInstance = $modal.open({
        templateUrl: 'modal/modal.confirm.tpl.html',
        controller: 'ConfirmInstanceCtrl',
        size: "",
        resolve: {
          content: function(){
            return modalContent;
          }
        }
      });

      return modalInstance.result;
    }
  };
})

.factory('mModal', function($modal, $log){
  // return promise to result from modal instance
  return {
    open: function(data) {

      var modalInstance = $modal.open({
        templateUrl: 'modal/modal.alert.tpl.html',
        controller: 'ModalInstanceCtrl',
		size: "",
        resolve: {
			content: function () {
				return data;
			}
        }
      });

      return modalInstance.result;
    }
  };
})

.controller('ConfirmInstanceCtrl', function ($scope, $modalInstance, content) {

  $scope.content = content;
  
  $scope.ok = function () {
    $modalInstance.close(true);
  };

  $scope.cancel = function () {
    $modalInstance.dismiss('cancel');
  };
})

.controller('ModalInstanceCtrl', function ($scope, $modalInstance, content) {

	console.log(content);

  $scope.title = content.title;
  $scope.item = content.content;
  $scope.keys = Object.keys(content.content);

  $scope.ok = function () {
    $modalInstance.close($scope.item);
  };

  $scope.cancel = function () {
    $modalInstance.dismiss('cancel');
  };
});

})(window.angular);
