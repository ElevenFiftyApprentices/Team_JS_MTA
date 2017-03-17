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
    vm.deleteRow = deleteRow;
    vm.checkBox = checkBox;
    vm.editRow = editRow;
    vm.apple = null;
    vm.cancelUpdate = cancelUpdate;
    vm.updateEdit = updateEdit;
    vm.banana = 0;


    // vm.listColor = '#000000';
    // Remove existing Shoppinglist
    function remove() {
      if ($window.confirm('Are you sure you want to delete?')) {
        vm.shoppinglist.$remove($state.go('shoppinglists.list'));
      }
    }

    function cancelUpdate() {
      vm.apple = null;
      vm.shoppinglist.item = '';
    }

    function updateEdit(){
      vm.shoppinglist.items[vm.apple] = vm.shoppinglist.item;
      console.log(vm.shoppinglist);
      
      
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
      vm.apple = null;
      vm.shoppinglist.item = '';
    }

    function deleteRow($index){
      vm.shoppinglist.items.splice($index, 1);
      
      if(vm.shoppinglist._id){
        vm.shoppinglist.$update(successCallback, errorCallback);
      }
      function successCallback(res) {
        $state.go('shoppinglists.view', {
          shoppinglistId: res._id
        });
        console.log(vm.shoppinglist);
      }

      function errorCallback(res) {
        vm.error = res.data.message;
      }
    }

    function editRow($index){
      vm.apple = $index;
      vm.shoppinglist.item = vm.shoppinglist.items[$index];

    }

    function checkBox($index){
      console.log(vm.shoppinglist);
      if(!vm.shoppinglist.items[$index].isChecked){
        vm.shoppinglist.items[$index].isChecked = false;
      } else{
        vm.shoppinglist.items[$index].isChecked = true;
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

    function addItem(isValid){
      console.log(vm.shoppinglist.item);
      vm.shoppingListItems.push(vm.shoppinglist.item);
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
