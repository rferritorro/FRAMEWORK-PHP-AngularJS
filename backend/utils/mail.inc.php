<?php
    require 'vendor/autoload.php'; // If you're using Composer (recommended)
    use \Mailjet\Resources;
    class mail {
        public static function send_email($email) {
            $keys = parse_ini_file(Utils . 'mail.ini');
            $public_key = $keys['public_key'];
            $private_key = $keys['private_key'];
            $mj = new \Mailjet\Client($public_key,$private_key,true,['version' => 'v3.1']);
           
            $body = [
                'Messages' => [
                [
                    'From' => [
                    'Email' => "rferritorro@gmail.com",
                    'Name' => "Admin"
                    ],
                    'To' => [
                    [
                        'Email' => $email["email"],
                        'Name' => "User"
                    ]
                    ],
                    'Subject' => $email["asunto"],
                    'HTMLPart' => $email['mensaje'],
                ]
                ]
            ];
            $response = $mj->post(Resources::$Email, ['body' => $body]);
            // $response->success() && var_dump($response->getData());
            return true;
        }
        public static function verify_email($data) {
            $email["email"] = $data["email"];
            $email["asunto"] = "Verificación de Auto Shell";
            $path = "http://192.168.1.32/Proyecto_V.4-RafaFerri/home&registered&".$data['user_token'];
            $email["mensaje"] = "<a href='$path'>Verifica<a/>";
            mail::send_email($email);
            return true;
        }
        public static function recover_email($data) {
            $email["email"] = $data["email"];
            $email["asunto"] = "Verificación de Auto Shell";
            $path = "http://localhost/Proyecto_V.4-RafaFerri/home&recover&".$data['token'];
            $email["mensaje"] = "<a href='$path'>Change Password<a/>";
            mail::send_email($email);
            return true;
        }
    }