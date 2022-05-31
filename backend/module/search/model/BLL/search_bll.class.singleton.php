<?php
	class search_bll {
		private $dao;
		private $db;
		static $_instance;

		function __construct() {
			$this->dao = search_dao::getInstance();
			$this->db = db::getInstance();
		}

		public static function getInstance() {
			if (!(self::$_instance instanceof self)) {
				self::$_instance = new self();
			}
			return self::$_instance;
		}

		public function get_type_BLL() {
			return $this ->dao->select_data_type($this->db);
		}

		public function get_category_free_BLL() {
			return $this ->dao->select_data_category_free($this->db);
		}
		public function get_category_BLL($args) {
			return $this ->dao->select_data_category($this->db,$args[0]);
		}

		public function get_city_BLL($args) {
			return $this ->dao->select_data_city($this->db,$args[0],$args[1],$args[2]);
		}
    }