<?php
	class shop_bll {
		private $dao;
		private $db;
		static $_instance;

		function __construct() {
			$this->dao = shop_dao::getInstance();
			$this->db = db::getInstance();
		}

		public static function getInstance() {
			if (!(self::$_instance instanceof self)) {
				self::$_instance = new self();
			}
			return self::$_instance;
		}

		public function get_filters_BLL() {

			return $this -> dao -> select_data_filters($this->db);
		}
        public function get_filter_model_BLL($args) {

			return $this -> dao -> select_data_filter_model($this->db,$args[0]);
		}

        public function get_cars_BLL($args) {
            return $this -> dao -> select_data_cars($this->db,$args[0]);

        }

        public function get_filter_cars_BLL($args) {
            return $this -> dao -> select_filter_cars_cars($this->db,$args[0],$args[1]);

        }
        public function get_detail_BLL($args) {
            return $this -> dao -> select_detail_car($this->db,$args[0]);
        }
		
		public function get_count_BLL() {
            return $this -> dao -> select_count($this->db);
        }
		public function get_like_BLL($args) {
			return $this -> dao -> change_like($this->db,$args[0],$args[1],$args[2]);
		}
		public function get_all_likes_BLL($args) {
			return $this -> dao -> charge_all_likes($this->db,$args[0]);
		}
        public function get_redirect_BLL($args) {
            return $this -> dao -> select_redirect($this->db,$args[0]);
        }
    }