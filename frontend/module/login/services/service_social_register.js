app.factory('service_social_register', function($rootScope,toastr,services) {
    let service = {social_register:social_register,check_info_register:check_info_register};
    return service;

    function social_register(type) {

    $rootScope.webAuth.authorize({
        connection: type
    })
    localStorage.setItem('social_type', type);
  }

  function check_info_register() {
  $rootScope.webAuth.parseHash(function(err, authResult) {
      if (authResult) {
        $rootScope.webAuth.client.userInfo(authResult.accessToken, function(err, profile) {

            profile.type = localStorage.getItem('social_type');
            var type = localStorage.getItem('mode');
            localStorage.removeItem('social_type');
            localStorage.removeItem('mode');

            if (type == 'register') {

              services.post('register', 'social_register', {profile})
              .then(function(response) {
                  response ? toastr.success("User has been registered") : toastr.error("User already existed") 
              }, function(error) {
                  console.log(error);
              });
            
            } else if (type == 'login') {

              services.post('register', 'social_login', {profile})
              .then(function(response) {
                localStorage.setItem('token',response)
                response ? toastr.success("User has been logged") : toastr.error("User isn't registered")
                setTimeout(() => {window.location.reload()},1500)
              }, function(error) {
                  console.log(error);
              });
            }

        });    
      } else if (err) {
        alert('Error: ' + err.error + '. Check the console for further details.');
      }
    });
  }

})