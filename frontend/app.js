var app = angular.module('Proyecto_V.5-RafaFerri', ['ngRoute', 'toastr']);

app.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
        .when("/contact", {
            templateUrl: "frontend/module/contact/view/contact.html", 
            controller: "controller_contact"
        })
}]);
