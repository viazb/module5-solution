(function(){

angular.module('common')
.service('SignupService', SignupService)
;

function SignupService() {
  var $service = this;
  var INFO = { firstName: "", lastName: "", email: "", phone: ""};
  $service.registration = INFO;

  $service.signup = function (data) {
    $service.registration = data;
  }

  $service.clear = function () {
    $service.registration = INFO;
  }

  $service.saved = function () {
    return $service.registration != INFO;
  }

  $service.getRegistration = function() {
    return $service.registration;
  }

}

})();
