  app.controller('controller_contact', function($scope,services,toastr) {
    $scope.cont = 0;
    $scope.regex = function(event){

        var pmessage = /^[0-9A-Za-z\s]{0,150}$/;
        var pmail = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
        var pmatter = /^[a-zA-Z]+[\-'\s]?[a-zA-Z]{2,51}$/;

        $scope.email == undefined || pmail.test($scope.email) ? $scope.error_email = false : $scope.error_email = true;

        $scope.subject == undefined || pmatter.test($scope.subject) ? $scope.error_subject = false : $scope.error_subject = true;

        $scope.message != undefined && pmessage.test($scope.message) && event ? $scope.cont = ($scope.message).length : console.log("goin");

    }
    
    $scope.send_email = function(){

        if (!$scope.error_email && !$scope.error_subject) {

            services.post('contact', 'send_email', {email:$scope.email, asunto:$scope.subject, mensaje:$scope.message})
            .then(function(response) {
              response ? toastr.success("Email has been send") : toastr.success("an error has occured")  
            }, function(error) {

                console.log(error);
            });

        } else {
            toastr.error("Please revise some errors");
        }
    }
});
