<?php
#This has to connect to db for send the data to front-end
class controller_search {
    function tipo() {
        echo json_encode(common::load_model('search_model','get_type'));
    }
    function categoria() {
        echo json_encode(common::load_model('search_model','get_category_free'));
    }
    function change_categoria() {
        echo json_encode(common::load_model('search_model','get_category',[$_POST['value']]));
    }
    function city() {
        echo json_encode(common::load_model('search_model','get_city',[$_POST['type'],$_POST['categorie'],$_POST['word']]));
    }
}   