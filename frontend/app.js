var app = angular.module('Proyecto_V.5-RafaFerri', ['ngRoute','toastr']);

app.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
        .when("/home", {
        templateUrl: "frontend/module/home/view/home.html", 
        controller: "controller_home",
        resolve: {
            BrandsCar: function (services) {
                return services.get('home','carrousel_brand');
            },
            TypeCar: function (services) {
                return services.get('home','menu_types');
            },  
            CategoriesCar: function (services) {
                return services.get('home','menu_categories');
            }}
        })
        .when("/home/:type/:token", {
            templateUrl: "frontend/module/home/view/home.html", 
            controller: "controller_home"
        })
        .when("/shop", {
            templateUrl: "frontend/module/shop/view/shop.html", 
            controller: "controller_shop",
            resolve: {
                Allcars: function (services) {
                    return services.post('shop','charge_cars',{limit: 0});
                },
                DataFilters: function (services) {
                    return services.post('shop','charge_filters');
                },
                ChargeAllLikes: function (services) {
                    return services.post('shop','charge_all_likes',{info_token:localStorage.token});
                }
        }})
        .when("/contact", {
            templateUrl: "frontend/module/contact/view/contact.html", 
            controller: "controller_contact"
        })
        .otherwise("/home", {
            templateUrl: "frontend/module/home/view/home.html", 
            controller: "controller_home"
        });
}]);

app.run(function($rootScope,service_search,service_regex,service_login,service_auth0,service_register,service_social_register,service_recover_passwd,toastr){
    //Search
    if (localStorage.token) {
        $rootScope.modal_login = true
        $rootScope.panel_user_small = true
        service_login.charge_user(localStorage.token)
        if (localStorage.positionY) {
            var y = localStorage.positionY;
            setTimeout(function () {window.scrollTo(0,y)},200); 
            localStorage.removeItem('positionY'); 
        }
    }
    
    
    service_search.type_search();
    service_search.categorie_search();
    
    $rootScope.change_type = function(data){
        service_search.change_categorie(data);
    }

    $rootScope.show_profile = () => {
        var icon = $rootScope.user[0].uid.split("-")[0];
        icon == "G" ?  $rootScope.user[0].icon = 'fab fa-google btn btn-success' :  $rootScope.user[0].icon ='fab fa-github btn btn-warning'
        $rootScope.profile = true
    }

    $rootScope.find_city_search = function(type,categorie,city){
        service_search.city_search(type,categorie,city);
    }

    $rootScope.set_value = function(ciudad) {
        $rootScope.text_complete = ciudad;
    }

    $rootScope.send_information_shop = function(type,brand) {
        console.log(type,brand)
        var object = {};
        if (type != undefined) {
            object.type =type
        }
        if (brand != undefined) {
            object.brand = brand
        }
        if (this.text_complete != undefined) {
            object.city = this.text_complete
        }

        if (JSON.stringify(object)!='{}') {
            localStorage.setItem('filter_search',JSON.stringify(object));
            window.location.href="#/shop"
        }
    }

//Login
    //variables register
    service_auth0.auth_logg();

    $rootScope.check_register_user = false
    $rootScope.check_register_passwd = false
    $rootScope.check_register_repasswd = false
    $rootScope.check_register_mail = false
    $rootScope.verify_dinamic_mail = false
    $rootScope.check_repasswd = false 

    $rootScope.charge_panel_password = (type) => {
        if (type == 0) {
            $rootScope.login_charge_model=true
            $rootScope.Verify_email =true
        } else {
            $rootScope.login_charge_model=false
            $rootScope.Verify_email =false
        }
    }

    $rootScope.confirm_password = (passwd,rpasswd) => {
        service_regex.change_password_regex(passwd,rpasswd)
    }

    $rootScope.change_new_password = (passwd) => {
        if ($rootScope.check_repasswd) {

            service_recover_passwd.change_password(passwd)

        } else {
            toastr.error("Passwords aren't correct")
        }
    }

    $rootScope.check_mail = (value) => {
        $rootScope.emailverify = value
        service_recover_passwd.check_mail_regex(value)
    }

    $rootScope.verify_mail_to_change_password = () => {
       $rootScope.verify_dinamic_mail ? service_recover_passwd.send_mail_for_recover() : toastr.error("Email is invalid")
    }


    $rootScope.logout = () => {
        toastr.warning("User log out")
        localStorage.removeItem('token')
        setTimeout(() => {window.location.reload()},1500)
    }
    $rootScope.show_panel = () => {
      $rootScope.show_panel_login = true
    };
    $rootScope.down_panel = () => {
        $rootScope.show_panel_login = false
    }
    $rootScope.social_login = (event,type) => {
        service_social_register.social_register(type)
        localStorage.setItem('mode',event)
    }
    
    //Send information
    $rootScope.info_register = (user,passwd,mail) => {
       service_register.register(user,passwd,mail);
    }
    $rootScope.info_login = (user,passwd) => {
        service_login.login(user,passwd)
    }

    //check regex
    $rootScope.data_register = function(value,event,passwd){
        service_regex.regex_register(value,event,passwd);
    }

    //Path

    var path = location.href.split("/")

  if (path[6] == 'registered') {
      service_register.confirm_register(path[7])
  }

  if (path[6] == 'recover') {
    $rootScope.token_user = path[7]
    service_recover_passwd.show_panel_password()
  }
    var social_path = path[4].split("=")[0]
    
    if (social_path == '#access_token') {
        service_social_register.check_info_register()
    }

}); 
