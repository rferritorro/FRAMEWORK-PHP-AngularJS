<?php
#This has to connect to db for send the data to front-end
class controller_shop {
    function view() {
        common::load_view('top_page_shop.php', Shop_view . '/shop.html');
    }
    function filtros() {
        if ($_POST["marca"]) {
            echo json_encode(common::load_model('shop_model', 'get_filter_model',[$_POST["marca"]]));
        } else {
            echo json_encode(common::load_model('shop_model', 'get_filters'));
        }
    }
    function Coches() {
        if (empty($_POST["filtros"])) {
            echo json_encode(common::load_model('shop_model', 'get_cars',[$_POST["limit"]]));
        } else {
            echo json_encode(common::load_model('shop_model', 'get_filter_cars',[$_POST["limit"],$_POST["filtros"]]));
        }
    }
    function detalle_coche() {
        echo json_encode(common::load_model('shop_model', 'get_detail',[$_POST["id"]]));
    }

    function count() {
        echo json_encode(common::load_model('shop_model', 'get_count'));
    }

    function like() {
        echo json_encode(common::load_model('shop_model', 'get_like',[$_POST["info-id"],$_POST["info-color"],$_POST["token"]]));
    }
    function userlikes() {
        echo json_encode(common::load_model('shop_model', 'get_all_likes',[$_POST["info_token"]]));
    }
    function redireccionamiento() {
        echo json_encode(common::load_model('shop_model', 'get_redirect',[$_POST["brand"]]));
    }
}