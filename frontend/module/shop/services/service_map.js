app.factory('service_map', function($rootScope) {
    let service = {map: map,map_detail:map_detail};
    return service;

    function map(data) {
        if (!$rootScope.check) {
            L.mapbox.accessToken = 'pk.eyJ1IjoicmVpZjQwMCIsImEiOiJja3p6ZWlmYWYwMDM4M2NxYTI0aGJrZjU5In0.pnTWl4oodCv8Edjbw-n6aA';
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

        }
        
        ).addTo($rootScope.map);

        var content = '<img style="width:200px;height:150px" src="frontend/'+ object.img +'"></img>'+
                        '<i id="show_info_map" style="position:absolute;top:12px;left:15px" id='+object.id+' class="fas fa-eye btn btn-danger" onclick="document.getElementById('+object.id+').click()"></i>'

        maker.bindPopup(L.popup({maxWidth:500}).setContent(content)).addTo($rootScope.map);

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
        $rootScope.detail_maker = L.marker([detail[0].lat, detail[0].long], {
            icon: L.mapbox.marker.icon({
                'marker-size': 'large',
                'marker-symbol': 'car',
                'marker-color': '#f00'
            })
        }).addTo($rootScope.map_detail);

        var content = '<img style="width:200px;height:150px" src="frontend/'+ detail[0].img +'"></img>'+'<h2 style="color:black">'+detail[0].ciudad+'</h2>'+'<h3>'+detail[0].long+ '  '+detail[0].lat+ '</h3>'

        $rootScope.detail_maker.bindPopup(L.popup({maxWidth:500}).setContent(content)).addTo($rootScope.map_detail);
    }
});