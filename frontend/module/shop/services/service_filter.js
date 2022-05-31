app.factory('service_filter', function(service_shop) {
    let service = {resolve_filters:resolve_filters};
    return service;
    function resolve_filters(filtros) {

        localStorage.setItem('filter',JSON.stringify(filtros))
        var limit = localStorage.getItem('limit');
    
        service_shop.filtrar(filtros,limit)
    }
})