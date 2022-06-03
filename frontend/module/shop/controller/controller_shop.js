app.controller('controller_shop', function($scope,$route,$rootScope,Allcars,DataFilters,service_map,service_shop,service_filter,service_detail) {    
    localStorage.setItem('limit',0);
    localStorage.setItem('filter',JSON.stringify({}));
    
    
    $rootScope.cars = Allcars[0];
    $scope.kilometres = [{id:1,value:"0-4999"},{id:2,value:"5000-9999"},{id:3,value:"10000-49999"},{id:4,value:"+50000"}]
    $scope.filters = DataFilters;
    $scope.body_details = true;
    
 
    var filter_search = JSON.parse(localStorage.getItem('filter_search'))

    var filter_home = JSON.parse(localStorage.getItem('filter_home'))

    if (filter_search && $scope.filters) {

        var filtros = JSON.parse(localStorage.getItem('filter'))

        if (filter_search.type) {
            $scope.type_data = filter_search.type;
            filtros.tipo = filter_search.type;
        }
        if (filter_search.brand) {
            $scope.brands = filter_search.brand;
            filtros.marca = filter_search.brand;
        }
         service_filter.resolve_filters(filtros);

    }
    if (filter_home && $scope.filters) {

        var filtros = JSON.parse(localStorage.getItem('filter'))

        if (filter_home.marca) {
            $scope.brands = filter_home.marca;
            filtros.marca = filter_home.marca;
        }
        if (filter_home.tipo) {
            $scope.type_data = filter_home.tipo;
            filtros.tipo = filter_home.tipo;
        }
        if (filter_home.categoria) {
            $scope.categorie_data = filter_home.categoria;
            filtros.categoria = filter_home.categoria;
        }

        service_filter.resolve_filters(filtros);

    }

    Allcars[1] > 8 ? $rootScope.pag_3 = false : $rootScope.pag_3 = true;
    
    if (Allcars[1] > 4) {
        $rootScope.pag_2 = false
        $rootScope.pag_right = false
    }
    
    service_map.map($rootScope.cars);


    $scope.dropdown = async function() {
        await service_shop.charge_model(this.brands)
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
        localStorage.removeItem('filter_search')
        localStorage.removeItem('filter_home')
        $route.reload();
        window.location.reload();
    }
    $scope.filtrado = async function(data = undefined) {  

        var filtros = JSON.parse(localStorage.getItem('filter'))
  
        if (this.brands) {
            filtros.marca = this.brands
            delete filtros.modelo 
        }
        if (data == 1) {
            filtros.modelo = this.model_data;
        }
        if (this.kilometre_data) {
            filtros.kilometros = this.kilometre_data.id;
        }

        if (this.first_number) {
            filtros.primer_precio = this.first_number;
        }
        if (this.second_number) {
            filtros.segundo_precio = this.second_number;
        }
        if (this.type_data) {
            filtros.tipo = this.type_data;
        }
        if (this.categorie_data) {
            filtros.categoria = this.categorie_data;
        }
        if (data == 0) {
            if (this.dataop == 1) {
            filtros.chasis= this.chasis.id   
            } else {
                delete filtros.chasis
            }
        }

        await service_filter.resolve_filters(filtros);
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
    $rootScope.show_detail = async function(id) {

        $scope.body_shop = true;
        $scope.body_details = false;
        $rootScope.header = true;

        await service_detail.show_detail(id);

        await service_detail.more_details(id);

        setTimeout(() => {  
            var galleryTop = new Swiper('.swiper-shop', {
                // Optional parameters
                centeredSlides: true,
                slidesPerView: 1,
              })
            
            var galleryThumbs = new Swiper('.gallery-thumbs', {

                direction: 'vertical',
                centeredSlides: true,
                touchRatio: 0.2,
                slideToClickedSlide: true,
                      loopedSlides: 4
              })
            
              galleryTop.controller.control = galleryThumbs;
              galleryThumbs.controller.control = galleryTop;
            },0)
    
    }

    $scope.return = function() {

        $scope.body_shop = false;
        $scope.body_details = true;
        $rootScope.header = false;

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
