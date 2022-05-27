localStorage.setItem('limit',0);
localStorage.setItem('filter',JSON.stringify({}));
app.controller('controller_shop', function($scope,$route,$rootScope,Allcars,DataFilters,service_map,service_shop) {    

    $rootScope.cars = Allcars[0];
    Allcars[1] > 8 ? $rootScope.pag_3 = false : $rootScope.pag_3 = true;
    if (Allcars[1] > 4) {
        $rootScope.pag_2 = false
        $rootScope.pag_right = false
    }
    $scope.filters = DataFilters;
    $scope.kilometres = [{id:0,value:"0-4999"},{id:1,value:"5000-9999"},{id:2,value:"10000-49999"},{id:3,value:"+50000"}]
    
    service_map.map($rootScope.cars);


    $scope.dropdown = async function(event) {
        await service_shop.charge_model(event).then((data) => {
            $scope.modelo = data;
        })
    }
    $scope.change_opacity = async function() {
        if (this.dataop == 0) {
            this.dataop=1
            this.myStyle = {opacity:1}
        } else {
            this.dataop=0
            this.myStyle = {opacity:0.2}
        }
    }
    $scope.clean_filters = function() {
        localStorage.setItem('limit',0);
        localStorage.setItem('filter',JSON.stringify({}));
        $route.reload();
    }
    $scope.filtrado = async function(data,value) {
        var filtros = JSON.parse(localStorage.getItem('filter'))
        if (data == 'marca') {
            filtros.marca = value;
            delete filtros.modelo
        }
        if (data == 'modelo') {
            filtros.modelo = value;
        }
        if (data == 'kilometros') {
            filtros.kilometros = value;
        }
        if (data == 'primer_precio') {
            filtros.primer_precio = $scope.first_number;
        }
        if (data == 'segundo_precio') {
            filtros.segundo_precio = $scope.second_number;
        }
        if (data == 'tipo') {
            filtros.tipo = value;
        }
        if (data == 'categoria') {
            filtros.categoria = value;
        }
        if (data == 'chasis') {
            if (this.dataop == 1) {
            filtros.chasis= value   
            } else {
                delete filtros.chasis
            }
        }
        localStorage.setItem('filter',JSON.stringify(filtros))
        var limit = localStorage.getItem('limit');

        await service_shop.filtrar(filtros,limit)
        await service_map.map($rootScope.cars);

    }
    $scope.allcars = async function(index) {

        if (index == -1) {
            index = localStorage.getItem('limit');
            index = (index-4)
        } else if (index == -2) {
            index = localStorage.getItem('limit');
            index = (parseFloat(index)+4)
        }
        
        
        var filtros = JSON.parse(localStorage.getItem('filter'))
        localStorage.setItem('limit',index);

        await service_shop.filtrar(filtros,index)
        await service_map.map($rootScope.cars);

    }
})

function map(lat,long,ciudad) {
    mapboxgl.accessToken = '';
        var map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v11',
        center:[long,lat],
        zoom: 12
});
map.addControl(new mapboxgl.NavigationControl());
var geojson = {
    type: 'FeatureCollection',
    features: [{
        type: 'Feature',
        geometry: {
            type: 'Point',
            coordinates: [long,lat]
        },
        properties: {
            title: ciudad,
        }
    }]
};
geojson.features.forEach(function(marker) {
  var el = document.createElement('div');
  el.className = "marker";
  new mapboxgl.Marker(el)
    .setLngLat(marker.geometry.coordinates)
    .setPopup(
        new mapboxgl.Popup({ offset: 25 }) // add popups
        .setHTML( 
            `<h4>${marker.properties.title}</h4>`          )
      )
    .addTo(map);    
    });
}
// Function map which is list,it's array

function map_array(array) {
    mapboxgl.accessToken = 'pk.eyJ1IjoicmVpZjQwMCIsImEiOiJja3p6ZWlmYWYwMDM4M2NxYTI0aGJrZjU5In0.pnTWl4oodCv8Edjbw-n6aA';
    var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    center:[-0.6166700 , 38.8166700],
    zoom: 9
});
map.addControl(new mapboxgl.NavigationControl());

var newstring = [];

for ( var i in array) {
    newstring.push({
        type: 'Feature',
        geometry: 
            {
                type: 'Point',
                coordinates: [array[i].long,array[i].lat]
            },
        properties: {
                title:array[i].city,
                img: array[i].img
            }
        }
    )
}
}
