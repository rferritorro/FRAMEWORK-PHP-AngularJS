<?php
#Define root path
    define('Project','/Proyecto_V.5-RafaFerri/backend/');

    define('ROOT',$_SERVER['DOCUMENT_ROOT'] . Project);

#Define localhost path
    define('LC', 'http://' . $_SERVER['HTTP_HOST'] . Project);


#Define model path
    define('Model', ROOT . 'model/');

#Define module path
    define('Module', ROOT . 'module/');

    #Define home module path
    define('Module_home', Module . 'home/');

        #Define all folders into home
            #controller
            define('Home_controller', Module_home . 'controller/');
            
            #model
            define('Home_model', Module_home . 'model/');

            #resources
            define('Home_resources', Module_home . 'resources/');


          

    #Define shop module path
    define('Module_shop', Module . 'shop/');

      #Define all folders into shop
            #controller
            define('Shop_controller', Module_shop . 'controller');
            
            #model
            define('Shop_model', Module_shop . 'model');

            #resources
            define('Shop_resources', Module_shop . 'resources');


         

    #Define contact module path
    define('Module_contact', Module . 'contact/');
    
         #Define all folders into contact
            #controller
            define('Contact_controller', Module_contact . 'controller');
            
            #resources
            define('Contact_resources', Module_contact . 'resources');

 ;

    #Define search module path
    define('Module_search', Module . 'search/');

    #Define all folders into search
            #controller
            define('Search_controller', Module_search . 'controller');
            
            #model
            define('Search_model', Module_search . 'model');

            #resources
            define('Search_resources', Module_search . 'resources');

       

    #Define login module path

    define('Module_login', Module . 'login/');

       #view
       define('Login_view', Module_login . 'view');


#Define resources path
    define('Resources', ROOT . 'resources/');

#Define utils path
    define('Utils', ROOT . 'utils/');

#Define view path

    define('View', ROOT . 'view/');

    #Define folders into view
        #css
        define('View_css', View . 'css');
        #img
        define('View_img', View . 'img');
        #inc
        define('View_inc', View . 'inc/');
        #js
        define('View_js', View . 'js');
        #lang
        define('View_lang', View . 'lang');
        #scss
        define('View_scss', View . 'scss');

#Allow friendly url

define('URL_FRIENDLY', TRUE);
