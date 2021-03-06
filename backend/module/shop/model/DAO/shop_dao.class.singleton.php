<?php
    class shop_dao {
        static $_instance;

        public static function getInstance() {
            if(!(self::$_instance instanceof self)){
                self::$_instance = new self();
            }
            return self::$_instance;
        }

        public function select_data_filters($db) {
            $occur = array();
     
            $sql = "SELECT id,brand FROM `brand_car`";
            $stmt = $db->ejecutar($sql);
            $occur[0] = $db->listar($stmt);

            $sql = "SELECT id,nom FROM `type`";
            $stmt = $db->ejecutar($sql);
            $occur[1] = $db->listar($stmt);
         
            $sql = "SELECT id,nom FROM `categories`";
            $stmt = $db->ejecutar($sql);
            $occur[2] = $db->listar($stmt);

            $sql = "SELECT id,bodywork FROM `filter_bodywork`";
            $stmt = $db->ejecutar($sql);
            $occur[3] = $db->listar($stmt);
          

            return $occur;
        
        }
        public function select_data_filter_model($db,$brand) {
            $sql = "SELECT m.id,m.model_car FROM model_cars m WHERE m.brand_car='$brand'";
            $stmt = $db->ejecutar($sql);
            return $db->listar($stmt);
        }

        public function select_data_cars($db,$limit) {
            $sql ="SELECT c.id id,c.brand_car brand_car,c.model_car model_car,c.price price,c.kilometres kilometres,c.img img,f.bodywork,cd.lat,cd.long,cd.ciudad
            FROM cars c 
            INNER JOIN filter_bodywork f ON c.bodywork = f.id
            INNER JOIN ciudades cd ON c.city = cd.id
            ORDER BY count DESC,c.brand_car ASC LIMIT $limit,4";

             $stmt = $db->ejecutar($sql);
             $result[0] = $db->listar($stmt);

             $sql ="SELECT c.id id,c.brand_car brand_car,c.model_car model_car,c.price price,c.kilometres kilometres,c.img img,f.bodywork,cd.lat,cd.long,cd.ciudad
             FROM cars c 
             INNER JOIN filter_bodywork f ON c.bodywork = f.id
             INNER JOIN ciudades cd ON c.city = cd.id
             ORDER BY count DESC,c.brand_car";
            $stmt = $db->ejecutar($sql);
             $result[1] = $stmt->num_rows;
             return $result;
        }

        public function select_detail_car($db,$id) {
            $occur = array();
            $sql ="SELECT c.id id,c.car_plate car_plate,c.frame_number frame_number,c.brand_car brand_car,c.model_car model_car,c.CV CV,c.price price,c.kilometres kilometres,c.date date,c.color color,cc.nom categories,t.nom type,c.img img,cd.lat,cd.long,cd.ciudad,c.description description 
            FROM cars c 
            INNER JOIN categories cc ON c.categories = cc.id 
            INNER JOIN type t ON c.type = t.id 
            INNER JOIN ciudades cd ON cd.id = c.city
            WHERE c.id='$id'";

            $occur[0]= $db->obj($sql);
        
            $sql = "SELECT id,img FROM img_cars WHERE id_car='$id'";
            $stmt = $db->ejecutar($sql);

            $row_select = $stmt->num_rows;


            if ($row_select < 1) {
                $occur[1] = [-1,"view/img/img_cars/dummies_not_available.jpeg"];
            } else {
               
                $occur[1] = $db->listar($stmt);
            }

            return $occur;
        }
        public function select_redirect($db,$value) {
           $id = $value["id"];
            if ($value["tipo"]) {
                $type = $value["tipo"];
                $sql = "SELECT c.id,t.nom att,c.img FROM cars c INNER JOIN type t ON  c.type = t.id WHERE t.nom = '$type' AND c.id != '$id' LIMIT 0,4";
            } else if ($value["marca"]) {

                $brand = $value["marca"];
                $sql = "SELECT id,brand_car att ,img FROM cars WHERE brand_car ='$brand' AND c.id != '$id' LIMIT 0,4";

            } else if ($value["categoria"]) {
                $categorie = $value["categoria"];
                $sql = "SELECT c.id,cc.nom att ,c.img FROM cars c INNER JOIN categories cc ON  c.categories = cc.id WHERE cc.nom = '$categorie' AND c.id != '$id' LIMIT 0,4";
            }

            $stmt = $db->ejecutar($sql);
            return $db->listar($stmt);
        }
        public function select_filter_cars($db,$filters,$limit) {
            $sql_siltered = array();

            if ($filters["marca"]) {
                $value = $filters["marca"];
                array_push($sql_siltered,"bc.id='$value'");
    
            }
            if ($filters["modelo"]) {
                $value = $filters["modelo"];
                array_push($sql_siltered," mc.id='$value'");
            }
            if ($filters["kilometros"]) {
                if ($filters["kilometros"] == 4) {
                    $km_1 = 50000;
                    array_push($sql_siltered," kilometres >=".$km_1);
                    
                } else {
                    if ($filters["kilometros"] == 1) {
                        $km_1 = 0;
                        $km_2 = 4999; 
                    } else if ($filters["kilometros"] == 2) {
                        $km_1 = 5000;
                        $km_2 = 9999;
                    } else if ($filters["kilometros"] == 3) {
                        $km_1 = 10000;
                        $km_2 = 49999;
                    } 
                    array_push($sql_siltered," kilometres BETWEEN ".$km_1." AND ".$km_2);   
                }
            }
            if ($filters["primer_precio"] && $filters["segundo_precio"]) {
                
                array_push($sql_siltered," price BETWEEN ".$filters["segundo_precio"]." AND ".$filters["precio_2"]);
                
            } else if ($filters["primer_precio"]) {
                
                array_push($sql_siltered," price >= ".$filters["primer_precio"]);
                
            } else if ($filters["segundo_precio"]) {
                array_push($sql_siltered," price <= ".$filters["segundo_precio"]);
            }
            if ($filters["tipo"]) {
                array_push($sql_siltered," type=".$filters["tipo"]);
            }
            if ($filters["categoria"]) {
                array_push($sql_siltered," categories=".$filters["categoria"]);
            }   
            if ($filters["chasis"]) {
                array_push($sql_siltered," c.bodywork=".$filters["chasis"]);
            }
            if ($filters["ciudad"]) {
                $value = $filters["ciudad"];
                array_push($sql_siltered," cd.ciudad='$value'");
            }
            if ($filters["ordenar"]) {
                $value = $filters["ordenar"];
                if ($value == 0) {
                    $order =" ORDER BY count DESC,c.brand_car ASC LIMIT $limit,4";
                } else if ($value == 1) {
                    $order =" ORDER BY price DESC,c.brand_car ASC LIMIT $limit,4";
    
                } else if ($value == 2) {
                    $order =" ORDER BY kilometres DESC,c.brand_car ASC LIMIT $limit,4";
                }
            } else {
                $order =" ORDER BY count DESC,c.brand_car ASC LIMIT $limit,4";
            }

            $sql = "SELECT c.id id,c.brand_car brand_car,c.model_car model_car,c.price price,c.kilometres kilometres,c.img img,f.bodywork,cd.lat,cd.long,cd.ciudad
            FROM cars c
            INNER JOIN brand_car bc ON c.brand_car = bc.brand
            INNER JOIN model_cars mc ON c.model_car = mc.model_car
            INNER JOIN filter_bodywork f ON c.bodywork = f.id
            INNER JOIN ciudades cd ON c.city = cd.id WHERE ";
             
             for ( $i=0; $i < sizeof($sql_siltered) ; $i++) {
                 if ($i == sizeof($sql_siltered)-1) {
                     $sql = $sql. $sql_siltered[$i];
                    } else {
                        $sql = $sql. $sql_siltered[$i] . " AND";
                    }
                }
                $stmt = $db->ejecutar($sql);
                $result[1] = $stmt->num_rows;

                $sql = $sql. $order;
                $stmt = $db->ejecutar($sql);
                $result[0] = $db->listar($stmt);
                return $result;
        }
        function select_count($db) {
            $sql = "SELECT COUNT(*) count FROM cars";
            $stmt = $db->ejecutar($sql);
            return $db->listar($stmt);
        }
        function change_like($db,$car_id,$color,$token) {
            $username = middleware_auth::decode_jwt($token);
            if ( $color == 1) {
                $sql = "INSERT INTO `like`(user,car) VALUES ('$username','$car_id')";
            } else if ( $color == 0) {
                $sql = "DELETE FROM `like` WHERE user='$username' AND car='$car_id'";
            } else {
                return "error";
            }
            $db->ejecutar($sql);
            return true;
        }
        function charge_all_likes($db,$token) {
            
            $username = middleware_auth::decode_jwt($token);
            $sql = "SELECT car FROM `like` WHERE user='$username'";
            $stmt = $db->ejecutar($sql);
            return $db->listar($stmt);
        }
    }