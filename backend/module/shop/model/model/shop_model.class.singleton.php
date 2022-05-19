<?php
class shop_model {
        private $bll;
        static $_instance;
        
        function __construct() {
            $this -> bll = shop_bll::getInstance();
        }

        public static function getInstance() {
            if (!(self::$_instance instanceof self)) {
                self::$_instance = new self();
            }
            return self::$_instance;
        }

        public function get_filters() {
            return $this -> bll -> get_filters_BLL();
        }
        public function get_filter_model($args) {
            return $this -> bll -> get_filter_model_BLL($args);
        }

        public function get_cars($args) {
            return $this -> bll -> get_cars_BLL($args);
        }

        public function get_filter_cars($args) {
            return $this -> bll -> get_filter_cars_BLL($args);
        }


        public function get_detail($args) {
            return $this -> bll -> get_detail_BLL($args);
        }
        
        public function get_count() {
            return $this -> bll -> get_count_BLL();

        }
        public function get_like($args) {
            return $this -> bll -> get_like_BLL($args);
        }
        public function get_all_likes($args) {
            return $this -> bll -> get_all_likes_BLL($args);
        }
        public function get_redirect($args) {
            return $this -> bll -> get_redirect_BLL($args);

        }

}
?>