app.factory('service_regex', function($rootScope,toastr) {
    let service = {regex_register:regex_register};
    return service;

function regex_register(value,event,rpasswd = undefined) {
    
    var puser = /^[0-9A-Za-z\s]{0,15}$/;
    var pmail = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
    var ppaswd = /^[A-Za-z][A-Za-z0-9_]{2,20}$/;

  if (event == 'user') {
    if (value == "" || puser.test(value)) {
        $rootScope.check_register_user = true
    } else {
        $rootScope.check_register_user = false
        toastr.error("Username too long")
    }
}
  
  if (event == 'passwd') {
    if (value == "" || ppaswd.test(value)) {
        $rootScope.check_register_passwd = true
    } else {
        $rootScope.check_register_passwd = false
        toastr.error("Password isn't valid")
    }  }

  if (event == 'rpasswd') {
    if (value == rpasswd) {
        $rootScope.check_register_repasswd = true
    } else {
        $rootScope.check_register_repasswd = false
        toastr.error("Password and Confirm Password aren't the same")
    }  }

  if (event == 'mail') {
    if (value == "" || pmail.test(value)) {
        $rootScope.check_register_mail = true
    } else {
        $rootScope.check_register_mail = false
        toastr.error("Format email isn't correct")
    }  }
}
});