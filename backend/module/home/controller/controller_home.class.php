<?php
#This has to connect to db for send the data to front-end
class controller_home {
    function view() {
        common::load_view('top_page_home.php', Home_view . '/home.html');
    }
    function carousel() {
        echo json_encode(common::load_model('home_model', 'get_carousel'));
    }
    function tipo() {
        echo json_encode(common::load_model('home_model', 'get_tipos'));
    }
    function categoria() {
        echo json_encode(common::load_model('home_model', 'get_categoria'));
    }
}