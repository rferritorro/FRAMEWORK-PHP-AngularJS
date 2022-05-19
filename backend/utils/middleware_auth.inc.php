<?php
class middleware_auth {
    public static function decode_jwt($token,$option = 0) {

        $ini_array = parse_ini_file(Utils . 'secret.ini');
        
        require_once Model . 'jwt.class.php';
        
        $secret = $ini_array["secret"];
        
        
        $JWT = new JWT;
        
        $json = $JWT->decode($token, $secret);  
        $json = json_decode($json, true);

        if ($option == 1) {
            $json = $json["exp"];
        } else {
            $json = $json["name"];
        }
        return $json;
        
    }
    public static function encode_jwt($user) {
        $ini_array = parse_ini_file(Utils . 'secret.ini');
            
        require_once Model . 'jwt.class.php';

        $header = $ini_array["header"];

        $secret = $ini_array["secret"]; 
        $time = time();
        $time_wait = time()+(60*60);
        $payload = '{"iat":'.$time.',"exp":'.$time_wait.',"name":"'.$user.'"}';
        
        $JWT = new JWT;
        $token = $JWT->encode($header, $payload, $secret);

        return $token;
    }
}

?>