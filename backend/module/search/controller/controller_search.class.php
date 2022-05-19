<?php
#This has to connect to db for send the data to front-end
class controller_search {
    function tipo() {
        echo json_encode(common::load_model('search_model','get_type'));
    }
    function categoria() {
        if (empty($_POST['value'])) {
            echo json_encode(common::load_model('search_model','get_category_free'));
        } else {
            echo json_encode(common::load_model('search_model','get_category',[$_POST['value']]));
        }
    }
    function autocompletar() {
        if ($_POST["type"] && $_POST["brand"]) {

            echo json_encode(common::load_model('search_model','get_city',[$_POST['type'],$_POST['brand'],$_POST['city']]));

        } else if (!$_POST["type"] && !$_POST["brand"]) {

            
            if ($_POST["city"]) {

                echo json_encode(common::load_model('search_model','get_only_city',[$_POST['city']]));

            } else if ( !$_POST["city"] || empty($_POST["city"])){

                echo json_encode(common::load_model('search_model','get_without_city'));

            }
        }
        if (!$_POST["type"] && $_POST["brand"]) {

            echo json_encode(common::load_model('search_model','get_city_without_type',[$_POST['brand'],$_POST['city']]));

        } else if ($_POST["type"] && !$_POST["brand"]) {

            echo json_encode(common::load_model('search_model','get_city_without_brand',[$_POST['type'],$_POST['city']]));

        }
    }

}   