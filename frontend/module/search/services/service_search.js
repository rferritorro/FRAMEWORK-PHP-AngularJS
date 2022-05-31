app.factory('service_search', function(services,$rootScope,toastr) {
    let service = {type_search:type_search,categorie_search:categorie_search,change_categorie:change_categorie,city_search:city_search};
    return service;

    function type_search() {
        return services.post('search', 'tipo')
        .then(function(response) {
          $rootScope.typesearch = response;
        }, function(error) {
            console.log(error);
        });
    }
    
    function categorie_search() {
        return services.post('search', 'categorie')
        .then(function(response) {
          $rootScope.categoriesearch = response;
        }, function(error) {
            console.log(error);
        });
    }

    function change_categorie(data) {
        return services.post('search', 'get_categorie',{value:data})
        .then(function(response) {
            $rootScope.categoriesearch = response;
        }, function(error) {
            console.log(error);
        });
    }

    function city_search(type=undefined,categorie=undefined,characters) {
        if (characters != "") {
            return services.post('search','city',{type:type,categorie:categorie,word:characters})
            .then(function(response) {
                response.length != 0 ? $rootScope.city = response : $rootScope.city = ""
            }, function(error) {
                console.log(error);
            });
        } else {
            $rootScope.city = ""
        }
    }
});