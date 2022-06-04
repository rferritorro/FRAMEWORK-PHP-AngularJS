app.factory('service_login', function($rootScope,services,toastr) {
    let service = {login:login,charge_user:charge_user};
    return service;

    function login(user,passwd) {
        services.post('login', 'logg-user', {user: user,password: passwd})
        .then(function(response) {
            if ( response == 0) {
                toastr.error("This user isn't registered")
            } else if ( response == 1) {
                toastr.error("Password ins't correct")
            } else {
                toastr.success("User logged correctly")
                localStorage.setItem('token',response)
                setTimeout(() => {window.location.reload()},1500)
            }
        }, function(error) {
            console.log(error);
        });
    }

    function charge_user(token) {
        services.post('login', 'charge-user', {token:token})
        .then(function(response) {
           $rootScope.user = response;
        }, function(error) {
            console.log(error);
        });
    }
})