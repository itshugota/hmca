<?php
    $db_host = "mysql.hostinger.com";
    $db_name = "u979146841_hmca";
    $db_user = "u979146841_hmca";
    $db_pass = "1029384756a";

     try {
         $db_con = new PDO("mysql:host={$db_host};dbname={$db_name}", $db_user, $db_pass);
         $db_con->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
     } catch (PDOException $e) {
         echo $e->getMessage();
     }

?>
