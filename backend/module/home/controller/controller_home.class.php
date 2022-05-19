<?php
#This has to connect to db for send the data to front-end
class controller_home {
    function carrousel_brand() {
        echo common::load_model('home_model', 'get_carousel');
    }
    // function tipo() {
    //     echo json_encode(common::load_model('home_model', 'get_tipos'));
    // }
    // function categoria() {
    //     echo json_encode(common::load_model('home_model', 'get_categoria'));
    // }
}