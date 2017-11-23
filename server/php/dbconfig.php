<?php
     $db_host = "localhost";
     $db_name = "hmca";
     $db_user = "huytq";
     $db_pass = "1029384756a";

     try {
         $db_con = new PDO("mysql:host={$db_host};dbname={$db_name}", $db_user, $db_pass);
         $db_con->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
     } catch (PDOException $e) {
         //echo $e->getMessage();
     }

?>
