<?php
class login_model {
        private $bll;
        static $_instance;
        
        function __construct() {
            $this -> bll = login_bll::getInstance();
        }

        public static function getInstance() {
            if (!(self::$_instance instanceof self)) {
                self::$_instance = new self();
            }
            return self::$_instance;
        }
        
        function get_register($args) {
            return $this->bll->get_register_BLL($args);
        }

        function get_newuser($args) {
            return $this->bll->get_newuser_BLL($args);
        }
        function get_log($args) {
            return $this->bll->get_log_BLL($args);
        }
        function get_charge_user($args) {
            return $this->bll->get_charge_user_BLL($args);
        }
        function get_check_mail($args) {
            return $this->bll->get_check_mail_BLL($args);
        }
        function get_social_register($args) {
            return $this->bll->get_social_register_BLL($args);
        }
        function get_social_login($args) {
            return $this->bll->get_social_login_BLL($args);
        }
        function get_set_new_password($args) {
            return $this->bll->get_set_new_password_BLL($args);
        }
}
?>