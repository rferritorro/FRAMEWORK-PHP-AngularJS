<?php
    class common {
     
        public static function load_model($model, $function = null, $args = null) {

            $dir = explode('_', $model);
            $path = Module . $dir[0] . '/' . $dir[1] . '/' . $dir[1] . '/' .  $model . '.class.singleton.php';
            if (file_exists($path)) {
                require_once ($path);
                if (method_exists($model, $function)) {
                    $obj = $model::getInstance();
                    if ($args != null) {
                        return call_user_func(array($obj, $function), $args);
                    }
                    return call_user_func(array($obj, $function));
                }
            }
            throw new Exception();
        }
        
        public static function generate_token_secure($long){
            return bin2hex(openssl_random_pseudo_bytes($long));
        }
    }