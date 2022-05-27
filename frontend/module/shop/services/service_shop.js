app.factory('service_shop', function(services,$rootScope,toastr) {
    let service = {charge_model: charge_model,filtrar:filtrar};
    return service;

    function charge_model(value) {

        return services.post('shop', 'model_filter', {marca: value})
        .then(function(response) {
          return response
        }, function(error) {
            console.log(error);
        });

    }

    function filtrar(filtro,limite) {
        if (JSON.stringify(filtro)=='{}') {
            return services.post('shop', 'charge_cars', {limit: limite})
            .then(function(response) {

                $rootScope.cars = response[0];
              
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
});