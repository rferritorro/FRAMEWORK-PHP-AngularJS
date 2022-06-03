app.factory('service_register', function($rootScope,services,toastr) {
    let service = {register:register};
    return service;

    function register(user,passwd,mail) {

  if ($rootScope.check_register_user && $rootScope.check_register_passwd && $rootScope.check_register_repasswd && $rootScope.check_register_mail) {
        
    services.post('register', 'register', {username:user, Password:passwd, email:mail})
    .then(function(response) {
        services.post('register', 'sendverify', {user_token: response[0],email: response[1]})
        .then(function(response) {
            response ? toastr.success("Email has been send") : toastr.error("An error has ocurred") 
        }, function(error) {
            console.log(error);
        });

    }, function(error) {
        console.log(error);
    });

  } else {
      
        $rootScope.check_register_user == false ? toastr.error("User ins't correct") : ""
        $rootScope.check_register_passwd == false ? toastr.error("Password ins't correct") : ""
        $rootScope.check_register_repasswd == false ? toastr.error("Confirm Passord ins't correct") : ""
        $rootScope.check_register_mail == false ? toastr.error("Email ins't correct") : ""
  }
    }
})