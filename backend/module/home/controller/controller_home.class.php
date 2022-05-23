<?php
#This has to connect to db for send the data to front-end
class controller_home {
    function carrousel_brand() {
        echo json_encode(common::load_model('home_model', 'get_carousel'));
    }
    function menu_types() {
        echo json_encode(common::load_model('home_model', 'get_tipos'));
    }
    function menu_categories() {
        echo json_encode(common::load_model('home_model', 'get_categoria'));
    }
}