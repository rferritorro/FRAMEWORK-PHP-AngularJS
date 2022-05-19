<?php
    class Conf {
        #Creamos el Objeto Conf
        private $db_user;
        private $db_passw;
        private $db_host;
        private $db;
        static $_instance;

        #Creamos las variables de nuestro constructor

        private function __construct() {
            $conf = parse_ini_file(Model . 'db.ini');
            
            $this->db_user = $conf['user'];
            $this->db_passw = $conf['passw'];
            $this->db_host = $conf['host'];
            $this->db = $conf['db'];

        }
        public static function getInstance() {
            if (!(self::$_instance instanceof self)) {
                    self::$_instance = new self();
                }
            return self::$_instance;
        }

        public function getuser() {
            $user = $this->db_user;
            return $user;
        }
        public function getpassw() {
            $passw = $this->db_passw;
            return $passw;
        }
        public function gethost() {
            $host = $this->db_host;
            return $host;
        }
        public function getdb() {
            $db = $this->db;
            return $db;
        }
    }