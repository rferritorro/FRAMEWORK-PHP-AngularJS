var app = angular.module('Proyecto_V.5-RafaFerri', ['ngRoute', 'toastr']);

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
        .when("/shop", {
            templateUrl: "frontend/module/shop/view/shop.html", 
            controller: "controller_shop",
            resolve: {
                Allcars: function (services) {
                    return services.post('shop','charge_cars',{limit: 0});
                },
                DataFilters: function (services) {
                    return services.post('shop','charge_filters');
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

app.run(function($rootScope,service_search){
 
    service_search.type_search();
    service_search.categorie_search();

    $rootScope.change_type = function(data){
        service_search.change_categorie(data);
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
  
});
