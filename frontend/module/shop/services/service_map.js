app.factory('service_map', function($rootScope) {
    let service = {map: map};
    return service;

    function map(data) {
        mapboxgl.accessToken = 'pk.eyJ1IjoicmVpZjQwMCIsImEiOiJja3p6ZWlmYWYwMDM4M2NxYTI0aGJrZjU5In0.pnTWl4oodCv8Edjbw-n6aA';
        console.log(data);
        // $rootScope.map = new mapboxgl.Map({
        //     container: 'map', // container ID
        //     style: 'mapbox://styles/mapbox/streets-v11', // style URL
        //     center: [-74.5, 40], // starting position [lng, lat]
        //     zoom: 9 // starting zoom
        // });
    }
});