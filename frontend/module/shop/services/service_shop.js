app.factory('service_shop', ['services','service_map','service_like','$rootScope','toastr',function(services,service_map,service_like,$rootScope,toastr) {
    let service = {charge_model: charge_model,filtrar:filtrar};
    return service;

    function charge_model(value) {

        return services.post('shop', 'model_filter', {marca: value})
        .then(function(response) {

          $rootScope.modelos =  response

        }, function(error) {
            console.log(error);
        });

    }

    function filtrar(filtro,limite) {
            if (JSON.stringify(filtro)=='{}') {
            return services.post('shop', 'charge_cars', {limit: limite})
            .then(function(response) {

                $rootScope.cars = response[0];
                service_map.map($rootScope.cars);

                service_like.charge_all_likes();
                limite < 1 ? $rootScope.pag_left=false : $rootScope.pag_left=true;

                8 < response[1] ? $rootScope.pag_3=false : $rootScope.pag_3=true;
                
                parseFloat(limite)+4 > response[1] ? $rootScope.pag_right=true : $rootScope.pag_right=false;
             
            }, function(error) {
                console.log(error);
            });
        } else {
            return services.post('shop', 'get_filter', {filter: filtro,limit: limite})
            .then(function(response) {

                if (response[1] > 0) {
                    $rootScope.cars = response[0];
                    console.log($rootScope.cars)
                    service_map.map($rootScope.cars);

                    service_like.charge_all_likes();

                    limite < 1 ? $rootScope.pag_left=false : $rootScope.pag_left=true;
    
                    4 < response[1] ? $rootScope.pag_2=false : $rootScope.pag_2=true;
    
                    8 < response[1] ? $rootScope.pag_3=false : $rootScope.pag_3=true;
                    
                    parseFloat(limite)+4 > response[1] ? $rootScope.pag_right=true : $rootScope.pag_right=false;
                } else {
                    toastr.error("There aren't cars with this filters")
                }


            }, function(error) {
                console.log(error);
            });


        }

    }
}]);