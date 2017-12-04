<?php
header("Content-Type: text/json; charset=utf8");

 session_start();
 require_once '../dbconfig.php';

 //if (isset($_POST['btn-login'])) {
     $email = trim($_POST['login-user-email']);
     $password = trim($_POST['login-user-password']);

     try {
         $stmt = $db_con->prepare("SELECT * FROM NguoiDung WHERE Email=:email");
         $stmt->execute(array(":email"=>$email));
         $row = $stmt->fetch(PDO::FETCH_ASSOC);
         $count = $stmt->rowCount();

         if ($count > 0) {
             if ($row['MatKhau']==$password) {
                 echo "OK"; // log in
                 $_SESSION['userID'] = $row['MaND'];
             } else {
                 echo "Wrong password"; // wrong details
             }
         } else {
            echo "Email doesn't exist";
         }
     } catch (PDOException $e) {
         echo $e->getMessage();
     }

?>
