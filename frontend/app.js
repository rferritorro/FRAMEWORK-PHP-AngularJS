var app = angular.module('Proyecto_V.5-RafaFerri', ['ngRoute', 'toastr','angularMapbox']);

app.config(['$routeProvider','angularMapboxConfigProvider', function ($routeProvider,angularMapboxConfigProvider) {
    angularMapboxConfigProvider.config({
        accessToken: 'pk.eyJ1IjoicmVpZjQwMCIsImEiOiJjbDNra2NqbGkxZHY5M2txdzdocGgwbGk0In0.dxlwgjzgMiOthGT2H5YDfg'
    });
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
