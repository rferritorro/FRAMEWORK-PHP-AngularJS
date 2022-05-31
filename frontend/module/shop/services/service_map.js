app.factory('service_map', function($rootScope) {
    let service = {map: map,map_detail:map_detail};
    return service;

    function map(data) {
        if (!$rootScope.check) {
            L.mapbox.accessToken = 'pk.eyJ1IjoicmVpZjQwMCIsImEiOiJja3p6ZWlmYWYwMDM4M2NxYTI0aGJrZjU5In0.pnTWl4oodCv8Edjbw-n6aA';
            // Create a map in the div #map
            // L.marker is a low-level marker constructor in Leaflet.
            $rootScope.check = true;
            $rootScope.map = L.mapbox.map('map')
            .setView([38.8, -0.5],9)
            .addLayer(L.mapbox.styleLayer('mapbox://styles/mapbox/streets-v11'));
        }

        if ($rootScope.old_makers) {
            
            for (var i = $rootScope.old_makers.length - 1; i >= 0; i--) {
                $rootScope.old_makers[i].remove();
                }
        } else {
            $rootScope.old_makers = [];
        }

       data.map(function(object) {
        var maker = L.marker([object.lat, object.long], {
            icon: L.mapbox.marker.icon({
                'marker-size': 'large',
                'marker-symbol': 'car',
                'marker-color': '#f00'
            })
        }).addTo($rootScope.map);
        $rootScope.old_makers.push(maker)
       })
    }
    function map_detail(detail) {
        if ( $rootScope.detail_maker) {
            $rootScope.detail_maker.remove();
        }
        if (!$rootScope.check_detail) {
            L.mapbox.accessToken = 'pk.eyJ1IjoicmVpZjQwMCIsImEiOiJja3p6ZWlmYWYwMDM4M2NxYTI0aGJrZjU5In0.pnTWl4oodCv8Edjbw-n6aA';
            // Create a map in the div #map
            // L.marker is a low-level marker constructor in Leaflet.
            $rootScope.check_detail = true;
            $rootScope.map_detail = L.mapbox.map('map_detail')
            .setView([38.8, -0.5],9)
            .addLayer(L.mapbox.styleLayer('mapbox://styles/mapbox/streets-v11'));
        }
        console.log(detail)
        $rootScope.detail_maker = L.marker([detail[0].lat, detail[0].long], {
            icon: L.mapbox.marker.icon({
                'marker-size': 'large',
                'marker-symbol': 'car',
                'marker-color': '#f00'
            })
        }).addTo($rootScope.map_detail);

    }
});