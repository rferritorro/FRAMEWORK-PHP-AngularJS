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
        .when("/contact", {
            templateUrl: "frontend/module/contact/view/contact.html", 
            controller: "controller_contact"
        }).otherwise("/home", {
            templateUrl: "frontend/module/home/view/home.html", 
            controller: "controller_home"
        });
}]);
