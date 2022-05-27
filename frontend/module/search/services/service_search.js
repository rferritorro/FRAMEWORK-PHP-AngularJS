app.factory('service_search', function(services,$rootScope) {
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
    function city_search(characters) {
        return services.post('search','city',{word:characters})
        .then(function(response) {
            console.log(response)       
        }, function(error) {
            console.log(error);
        });
    }
});