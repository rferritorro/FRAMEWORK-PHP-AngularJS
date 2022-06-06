<?php
#This has to connect to db for send the data to front-end
class controller_login {
    function register() {
        echo json_encode(common::load_model('login_model', 'get_register',[$_POST["username"],$_POST["Password"],$_POST["email"]]));
    }
    function sendverify() {
        $check = mail::verify_email($_POST);
		    echo json_encode($check);
    }
    function sendrecover() {
      $check = mail::recover_email($_POST);
		  echo json_encode($check);
    }
    function newuser() {
     
      echo json_encode(common::load_model('login_model', 'get_newuser',[$_POST["token"]]));
        
    }
    function logger() {
      echo json_encode(common::load_model('login_model', 'get_log',[$_POST["user"],$_POST["password"]]));
    }
    function secure_login() {
      echo json_encode(middleware_auth::encode_jwt($_POST[""],1));
    }
    function chargeuser() {
      echo json_encode(common::load_model('login_model', 'get_charge_user',$_POST["token"]));
    }
    function checkermail() {
      echo json_encode(common::load_model('login_model', 'get_check_mail',[$_POST["email"]]));
    }
    function socialregister() {
      echo json_encode(common::load_model('login_model', 'get_social_register',[$_POST["profile"]["nickname"],$_POST["profile"]["email"],$_POST["profile"]["sub"],$_POST["profile"]["type"]]));
    }
    function sociallogin() {
      echo json_encode(common::load_model('login_model', 'get_social_login',[$_POST["profile"]["sub"]]));
    }
    function setnewpassword() {
      echo json_encode(common::load_model('login_model', 'get_set_new_password',[$_POST["password"],$_POST["token"]]));
    }
}