<?php
#This has to connect to db for send the data to front-end
class controller_shop {
    function filtros() {
        echo json_encode(common::load_model('shop_model', 'get_filters'));
       
    }
    function filtro_modelo() {
        echo json_encode(common::load_model('shop_model', 'get_filter_model',[$_POST["marca"]]));
    }
    function Coches() {
            echo json_encode(common::load_model('shop_model', 'get_cars',[$_POST["limit"]]));
    }
    function filter() {
        echo json_encode(common::load_model('shop_model', 'get_filter_cars',[$_POST["filter"],$_POST["limit"]]));
    }
    function detalle_coche() {
        echo json_encode(common::load_model('shop_model', 'get_detail',[$_POST["id"]]));
    }

    function like() {
        echo json_encode(common::load_model('shop_model', 'get_like',[$_POST["info_id"],$_POST["info_color"],$_POST["token"]]));
    }
    function userlikes() {
        echo json_encode(common::load_model('shop_model', 'get_all_likes',[$_POST["info_token"]]));
    }
    function redireccionamiento() {
        echo json_encode(common::load_model('shop_model', 'get_redirect',[$_POST]));
    }
}