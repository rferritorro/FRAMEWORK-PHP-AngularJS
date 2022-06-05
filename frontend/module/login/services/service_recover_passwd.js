app.factory('service_recover_passwd', function($rootScope,toastr,services) {
    let service = {check_mail_regex:check_mail_regex,send_mail_for_recover:send_mail_for_recover,show_panel_password:show_panel_password,change_password:change_password};
    return service;

    function check_mail_regex(email) {
        services.post('login', 'check_mail', {email: email})
        .then(function(response) {
            $rootScope.token_user = response
            response  ? $rootScope.verify_dinamic_mail = true : toastr.error("Email isn't registered")
        }, function(error) {
            console.log(error);
        });
        
    }

    function send_mail_for_recover() {
        services.post('login', 'recover_mail', {email: $rootScope.emailverify,token: $rootScope.token_user})
        .then(function(response) {

            response ? toastr.success("Email has been send") : toastr.error("An error has ocurred")

        }, function(error) {
            console.log(error);
        });
    }

    function show_panel_password() {
        $rootScope.show_panel_login = true
        $rootScope.login_charge_model=true
        $rootScope.panel_password = true
    }

    function change_password(passwd) {
        services.post('login', 'set_new_password', {password: passwd,token:$rootScope.token_user.split("%22")[1] })
        .then(function(response) {
            if (response) {
                toastr.success("Password has been changed with success")
            } else {
                toastr.error("An error has ocurred")
            }
            setTimeout(() => {
                window.location.href="#/home"
                $rootScope.show_panel_login = true
                $rootScope.login_charge_model=false
                $rootScope.panel_password = false
            },1500)
        }, function(error) {
            console.log(error);
        });
    }
})