app.factory("services", ['$http','$q', function ($http, $q) {
    let serviceBase = '/Proyecto_V.5-RafaFerri/backend/index.php?page=';
    let obj = {};

    obj.get = function (module, functi) {
        var defered = $q.defer();
        var promise = defered.promise;
        $http({
              method: 'GET',
              url: serviceBase + module + '&op=' + functi
          }).success(function(data, status, headers, config) {
             defered.resolve(data);
          }).error(function(data, status, headers, config) {
             defered.reject(data);
          });
        return promise;
    };
    
    obj.post = function (module, option , data) {
        var defered = $q.defer();
        var promise = defered.promise;
        $http({
            method: 'POST',
            url: serviceBase + module + '&op=' + option,
            data: data
            
        }).success(function(data, status, headers, config) {

        defered.resolve(data);

        }).error(function(data, status, headers, config) {

        defered.reject(data);

        });
        return promise;
    };
 return obj;

}]);