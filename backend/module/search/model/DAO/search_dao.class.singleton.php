<?php
    class search_dao {
        static $_instance;

        public static function getInstance() {
            if(!(self::$_instance instanceof self)){
                self::$_instance = new self();
            }
            return self::$_instance;
        }

        function select_data_type($db) {
           $sql="SELECT * FROM `type`";
           $stmt = $db->ejecutar($sql);
           return $db->listar($stmt);
       }
       function select_data_category($db,$args) {
            $sql ="SELECT DISTINCT brand_car brand FROM `cars` WHERE type = '$args'";
            $stmt = $db->ejecutar($sql);
            return $db->listar($stmt);
        }
        function select_data_category_free($db) {
            $sql ="SELECT id,brand FROM `brand_car`";
            $stmt = $db->ejecutar($sql);
            return $db->listar($stmt);
        }

        function select_data_city($db,$type,$brand,$city) {
            $sql ="SELECT DISTINCT c.ciudad FROM cars cc INNER JOIN ciudades c ON cc.city = c.id WHERE cc.type = '$type' AND cc.brand_car = '$brand' AND c.ciudad LIKE '$city%'";
            $stmt = $db->ejecutar($sql);
            return $db->listar($stmt);
        }
        function select_data_only_city($db,$city) {
            $sql ="SELECT DISTINCT c.ciudad FROM cars cc INNER JOIN ciudades c ON cc.city = c.id WHERE c.ciudad LIKE '$city%'";
            $stmt = $db->ejecutar($sql);
            return $db->listar($stmt);
        }
        function select_data_without_city($db) {
            $sql ="SELECT DISTINCT id,ciudad FROM ciudades";
            $stmt = $db->ejecutar($sql);
            return $db->listar($stmt);
        }
        function select_data_without_type($db,$brand,$city) {
            $sql ="SELECT DISTINCT c.ciudad FROM cars cc INNER JOIN ciudades c ON cc.city = c.id WHERE cc.brand_car = '$brand' AND c.ciudad LIKE '$city%'";
            $stmt = $db->ejecutar($sql);
            return $db->listar($stmt);
        }
        function get_city_without_brand_BLL($db,$type,$city) {
            $sql ="SELECT DISTINCT c.ciudad FROM cars cc INNER JOIN ciudades c ON cc.city = c.id WHERE cc.type = '$type' AND c.ciudad LIKE '$city%'";
            $stmt = $db->ejecutar($sql);
            return $db->listar($stmt);
        }
}