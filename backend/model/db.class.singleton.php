<?php

    class db
    {
        private $user;
        private $password;
        private $host;
        private $database;
        private $conection;
        private $play;
        private $array;
        static $_instance;
    
    private function __construct() {
        $this->SetConection();
        $this->conectar();
    }
    #Create functinos to access database
    private function SetConection() {
        require_once 'Conf.class.singleton.php';

        #We need to create a new instance
        $conf =  Conf::getInstance();
        #Later,save the information
        $this->user = $conf->getuser();
        $this->password = $conf->getpassw();
        $this->host = $conf->gethost();
        $this->database = $conf->getdb();
    }
    
    #Create instance
    public static function getInstance() {
        if (!(self::$_instance instanceof self)) {
                self::$_instance = new self();
            }
        return self::$_instance;
    }

    #Connect to database
    public function conectar() {
        $this->conection = new mysqli($this->host, $this->user, $this->password);
        #Command to do this
        $this->conection->select_db($this->database);
    }

    #Query for play some action in database (INSERT,DELETE,UPDATE)
    public function ejecutar($sql) {
        $this->play = $this->conection->query($sql);
        return $this->play;
    }

    public function obj($sql) {
        $this->play = $this->conection->query($sql)->fetch_object();
        $this->play =get_object_vars($this->play);
        return $this->play;
    }
    #QUery for play a SELECT
    public function listar($play) {
        $this->array = array();
        while ($row = $play->fetch_array(MYSQLI_ASSOC)) {
            array_push($this->array, $row);
        }
        return $this->array;
    }
}
    