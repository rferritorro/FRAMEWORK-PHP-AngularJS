app.factory('service_detail', function(services,$rootScope,toastr) {
    let service = {show_detail: show_detail};
    return service;
    function show_detail(id) {
        return services.post('shop', 'detail_car', {id: id})
        .then(function(response) {
         $rootScope.detail_car = response;
         console.log($rootScope.detail_car)
        }, function(error) {
            console.log(error);
        });
    }
})