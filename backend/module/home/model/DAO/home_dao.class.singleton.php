<?php
    class home_dao {
        static $_instance;

        public static function getInstance() {
            if(!(self::$_instance instanceof self)){
                self::$_instance = new self();
            }
            return self::$_instance;
        }

        public function select_data_carousel($db) {
            $sql = "SELECT * FROM `brand_car`";
            $stmt = $db->ejecutar($sql);
            return $db->listar($stmt);
        }
        public function select_data_type($db) {
            $sql = "SELECT * FROM `type`";
            $stmt = $db->ejecutar($sql);
            return $db->listar($stmt);
        }
        public function select_data_categories($db) {
            $sql = "SELECT * FROM `categories`";
            $stmt = $db->ejecutar($sql);
            return $db->listar($stmt);
        }
    }