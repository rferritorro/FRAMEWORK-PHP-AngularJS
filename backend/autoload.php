<?php 
    require_once("paths.php");

    spl_autoload_extensions('.php,.inc.php,.class.php,.class.singleton.php');
    spl_autoload_register('loadClasses');

    #This function charge all models,modules and extensions when I create a instance

    function loadClasses($className) {
        $breakClass = explode('_', $className);
        $modelName = "";
        
        if (isset($breakClass[1])) {
            $modelName = strtoupper($breakClass[1]);
        }

        if (file_exists(ROOT . 'module/' . $breakClass[0] . '/model/'. $modelName . '/' . $className . '.class.singleton.php')) {
            set_include_path('module/' . $breakClass[0] . '/model/' . $modelName.'/');
            spl_autoload($className);
        }else if (file_exists(ROOT . 'model/' . $className . '.class.singleton.php')){
            set_include_path(ROOT . 'model/');
            spl_autoload($className);
        }else if (file_exists(ROOT . 'model/' . $className . '.class.php')){
            set_include_path(ROOT . 'model/');
            spl_autoload($className);
        }else if (file_exists(ROOT . 'utils/' . $className . '.inc.php')) {
            set_include_path(ROOT . 'utils/');
            spl_autoload($className);
        }
    };