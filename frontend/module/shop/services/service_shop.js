app.factory('service_shop', function(services) {
    let service = {charge_model: charge_model};
    return service;

    function charge_model(value) {

        
        return services.post('shop', 'model_filter', {marca: value})
        .then(function(response) {
          return response
        }, function(error) {
            console.log(error);
        });

    }
});