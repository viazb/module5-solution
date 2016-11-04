(function() {
'use strict';

angular.module('public')
.controller('SignupController', SignupController);

SignupController.$inject = ['SignupService','$http', 'ApiPath'];

function SignupController( SignupService, $http, ApiPath ) {
  var $ctrl = this;
  var $service = SignupService;

  $ctrl.message = "";
  $ctrl.dish = false;
  $ctrl.basePath = ApiPath;
  $ctrl.firstName = "";
  $ctrl.lastName = "";
  $ctrl.email = "";
  $ctrl.phone = "";
  $ctrl.favourite = "";

  $ctrl.signup = function () {
    $ctrl.dish = true;
    var menuItem = $ctrl.favourite.toUpperCase();

    var promise = $http({
      method: "GET",
      url: ($ctrl.basePath + "/menu_items/" + menuItem + ".json")
    }).then(function(result) {
        $service.signup({
            firstName: $ctrl.firstName,
            lastName: $ctrl.lastName,
            email: $ctrl.email,
            phone: $ctrl.phone,
            menu_item: result.data
          });
        $ctrl.message = "Su información se guardo correctamente.";
      },
      function(error) {
        $service.clear();
        $ctrl.dish = false;
        $ctrl.message = "Porfavor intente nuevamente";
      }
    )
  }
}
})();
