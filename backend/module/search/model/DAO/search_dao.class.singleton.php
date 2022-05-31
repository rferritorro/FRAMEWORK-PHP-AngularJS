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
            $sql ="SELECT DISTINCT b.id,c.brand_car brand FROM `cars` c INNER JOIN `brand_car` b ON c.brand_car = b.brand WHERE type = '$args'";
            $stmt = $db->ejecutar($sql);
            return $db->listar($stmt);
        }
        function select_data_category_free($db) {
            $sql ="SELECT id,brand FROM `brand_car`";
            $stmt = $db->ejecutar($sql);
            return $db->listar($stmt);
        }

        function select_data_city($db,$type,$brand,$city) {
            if ($type && $brand && $city) {

                $sql ="SELECT DISTINCT c.ciudad FROM cars cc INNER JOIN ciudades c ON cc.city = c.id WHERE cc.type = '$type' AND cc.brand_car = '$brand' AND c.ciudad LIKE '$city%'";
            
            } else if ($type && !$brand && $city) {
                
                $sql ="SELECT DISTINCT c.ciudad FROM cars cc INNER JOIN ciudades c ON cc.city = c.id WHERE cc.type = '$type' AND c.ciudad LIKE '$city%'";

            } else if (!$type && $brand && $city) {
               
                $sql ="SELECT DISTINCT c.ciudad FROM cars cc INNER JOIN ciudades c ON cc.city = c.id WHERE cc.brand_car = '$brand' AND c.ciudad LIKE '$city%'";

            } else if (!$type && !$brand && $city) {
                
                $sql ="SELECT DISTINCT c.ciudad FROM cars cc INNER JOIN ciudades c ON cc.city = c.id WHERE c.ciudad LIKE '$city%'";
            }
            $stmt = $db->ejecutar($sql);
            return $db->listar($stmt);
        }
}