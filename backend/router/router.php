<?php
    require_once('autoload.php');
    
    #First,I need to start session for cookies and buffer
    ob_start();
    session_start();
    $_POST = json_decode(file_get_contents('php://input'), true);
    


    #Create and instance for router for starting the home module

    class router {
        private $uriModule;
        private $uriFunction;
        private $nameModule;
        static $_instance;
        
        public static function getInstance() {
            if (!(self::$_instance instanceof self)) {
                self::$_instance = new self();
            }
            return self::$_instance;
        }
        #Charge the home module
        function __construct() {
            #If there ins't no one module,it's charge the default module which is home
            if(isset($_GET['page'])){
                $this -> uriModule = $_GET['page'];
            }else{
                $this -> uriModule = 'home';
            }
            if(isset($_GET['op'])){
                $this -> uriFunction = ($_GET['op'] === "") ? 'view' : $_GET['op'];
            }else{
                $this -> uriFunction = 'view';
            }
         
        }

        function routingStart() {
            #Now, I start to create the module and functions,if can't be possible,so it will    show error
            try {
                call_user_func(array($this->loadModule(), $this->loadFunction()));
            }catch(Exception $e) {
                #If there is some error, I show the error page
                echo $e;
            }
           
        }

        private function loadModule() {
            #Check if the folder exist
            if (file_exists('resources/modules.xml')) {
                $modules = simplexml_load_file('resources/modules.xml');
                #if the folder exist,it start to check all parts of xml
                foreach ($modules as $row) {
                    if (in_array($this -> uriModule, (Array) $row -> uri)) {
                        $path = Module . $row -> name . '/controller/controller_' . (String) $row -> name . '.class.php';
                        if (file_exists($path)) {
                            require_once($path);
                            $controllerName = 'controller_' . (String) $row -> name;
                            $this -> nameModule = (String) $row -> name;
                            #Return the name of controller for creating
                            return new $controllerName;
                        }
                    }
                }
            }
            throw new Exception('Not Module found.');
        }
        private function loadFunction() {
            $path = Module . $this -> nameModule . '/resources/function.xml';
            if (file_exists($path)) {
                $functions = simplexml_load_file($path);
                foreach ($functions as $row) {
                    if (in_array($this -> uriFunction, (Array) $row -> uri)) {
                        return (String) $row -> name;
                    }
                }
            }
            throw new Exception('Not Function found.');
        }
    }
    router::getInstance()-> routingStart();  
?>