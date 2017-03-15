(function () {
  'use strict';

  // Shoppinglists controller
  angular
    .module('shoppinglists')
    .controller('ShoppinglistsController', ShoppinglistsController);

  ShoppinglistsController.$inject = ['$scope', '$state', '$window', 'Authentication', 'shoppinglistResolve'];

  function ShoppinglistsController ($scope, $state, $window, Authentication, shoppinglist) {
    var vm = this;

    vm.shoppingListItems = [];

    vm.authentication = Authentication;
    vm.shoppinglist = shoppinglist;
    vm.error = null;
    vm.form = {};
    vm.remove = remove;
    vm.addItem = addItem;
    vm.save = save;
    //vm.checkBtn= checkBtn;
    // vm.listColor = '#000000';
    // Remove existing Shoppinglist
    function remove() {
      if ($window.confirm('Are you sure you want to delete?')) {
        vm.shoppinglist.$remove($state.go('shoppinglists.list'));
      }
    }

    // function checkBtn(isValid){
    //   if(!vm.shoppinglist.item.isChecked){
    //     vm.shoppinglist.item.isChecked = true;
    //   } else{
    //     vm.shoppinglist.item.isChecked = false;
    //   }
    //   if(vm.shoppinglist._id){
    //     vm.shoppinglist.$update(successCallback, errorCallback);
    //   }
    //   if(!isValid){
    //     $scope.$broadcast('show-errors-check-validity', 'vm.form.checkItems');
    //     return false;
    //   }
    //   if(vm.shoppinglist._id){
    //     vm.shoppinglist.$update(successCallback, errorCallback);
    //   }
    //   function successCallback(res) {
    //     $state.go('shoppinglists.view', {
    //       shoppinglistId: res._id
    //     });
    //   }

    //   function errorCallback(res) {
    //     vm.error = res.data.message;
    //   }
    // }
    

    function addItem(isValid){
      console.log(vm.shoppinglist.item);
      vm.shoppinglist.items.push(vm.shoppinglist.item);
      console.log(vm.shoppinglist);
      vm.shoppinglist.item = '';
      if(!isValid){
        $scope.$broadcast('show-errors-check-validity', 'vm.form.shoppingListItemsForm');
        return false;
      }

      if(vm.shoppinglist._id){
        vm.shoppinglist.$update(successCallback, errorCallback);
      }
      function successCallback(res) {
        $state.go('shoppinglists.view', {
          shoppinglistId: res._id
        });
      }

      function errorCallback(res) {
        vm.error = res.data.message;
      }
    }

    // Save Shoppinglist
    function save(isValid) {
      if (!isValid) {
        $scope.$broadcast('show-errors-check-validity', 'vm.form.shoppinglistForm');
        return false;
      }

      // TODO: move create/update logic to service
      if (vm.shoppinglist._id) {
        vm.shoppinglist.$update(successCallback, errorCallback);
      } else {
        vm.shoppinglist.$save(successCallback, errorCallback);
      }

      function successCallback(res) {
        $state.go('shoppinglists.view', {
          shoppinglistId: res._id
        });
      }

      function errorCallback(res) {
        vm.error = res.data.message;
      }
    }
  }
}());
