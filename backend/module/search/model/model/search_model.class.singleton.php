<?php
class search_model {
        private $bll;
        static $_instance;
        
        function __construct() {
            $this -> bll = search_bll::getInstance();
        }

        public static function getInstance() {
            if (!(self::$_instance instanceof self)) {
                self::$_instance = new self();
            }
            return self::$_instance;
        }

        public function get_type() {
            return $this->bll->get_type_BLL();
        }
        
        public function get_category_free() {
            return $this->bll->get_category_free_BLL();
        }
        public function get_category($args) {
            return $this->bll->get_category_BLL($args);
        }

        public function get_city($args) { 
            return $this->bll->get_city_BLL($args);
        }
}
?>  