app.factory('service_detail', function(services,$rootScope,service_map,toastr) {
    let service = {show_detail: show_detail,more_details:more_details};
    return service;
    function show_detail(id) {
        return services.post('shop', 'detail_car', {id: id})
        .then(function(response) {
         $rootScope.detail_car = response;
        service_map.map_detail($rootScope.detail_car);
        }, function(error) {
            console.log(error);
        });
    }

    function more_details(id) {
        var e = Math.floor((Math.random() * 3));
        if (e == 0) {
            var data = {'marca':$rootScope.detail_car[0].brand_car,id:id}
        } else if (e == 1) {
            var data = {'tipo':$rootScope.detail_car[0].type,id:id}

        } else if (e == 2) {
            var data = {'categoria':$rootScope.detail_car[0].categories,id:id}

        }
      
        return services.post('shop', 'get_redirect', data)

        .then(function(response) {
            $rootScope.more_car = response;
        }, function(error) {
            console.log(error);
        });
    }
})