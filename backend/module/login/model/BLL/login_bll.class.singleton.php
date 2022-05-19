<?php
	class login_bll {
		private $dao;
		private $db;
		static $_instance;

		function __construct() {
			$this->dao = login_dao::getInstance();
			$this->db = db::getInstance();
		}

		public static function getInstance() {
			if (!(self::$_instance instanceof self)) {
				self::$_instance = new self();
			}
			return self::$_instance;
		}
		
		public function get_register_BLL($args) {
			return $this -> dao -> select_data_register($this->db,$args[0],$args[1],$args[2]);
		}

		public function get_newuser_BLL($args) {
			return $this -> dao -> select_new_user($this->db,$args[0]);
		}
		public function get_log_BLL($args) {
			return $this -> dao -> select_logg_user($this->db,$args[0],$args[1]);
		}
		public function get_charge_user_BLL($args) {
			return $this -> dao -> select_charge_user($this->db,$args[0]);
		}
		public function get_check_mail_BLL($args) {
			return $this -> dao -> select_check_mail($this->db,$args[0]);
		}
		public function get_social_register_BLL($args) {
			return $this -> dao -> select_data_social_register($this->db,$args[0],$args[1],$args[2],$args[3]);
		}
		public function get_social_login_BLL($args) {
			return $this -> dao -> select_data_social_login($this->db,$args[0]);
		}
		public function get_set_new_password_BLL($args) {
			return $this -> dao -> select_new_password($this->db,$args[0],$args[1]);
		}
    }