app.factory('service_auth0', function($rootScope) {
    let service = {auth_logg:auth_logg};
    return service;

    function auth_logg() {
        var webAuth = new auth0.WebAuth({
            domain:       'dev-irl581xs.us.auth0.com',
            clientID:     '7q4vjPkTYlIw0Svb1iF9MDdvgLYwBduU',
            audience: 'https://' + 'dev-irl581xs.us.auth0.com' + '/userinfo',
            responseType: "token",
            scope: "openid profile email",
            redirectUri: "http://localhost/Proyecto_V.5-RafaFerri/"
      
          });
          $rootScope.webAuth = webAuth
    }
})