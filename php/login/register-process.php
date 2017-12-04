<?php
 require_once '../dbconfig.php';

 //if (isset($_POST['btn-login'])) {
     $email = trim($_POST['register-user-email']);
     $password = trim($_POST['register-user-password']);
     $role = $_POST['register-user-role'] == "student" ? "Học sinh" : "Giáo viên";

     try {
         $stmt = $db_con->prepare("SELECT * FROM NguoiDung WHERE Email=:email");
         $stmt->execute(array(":email"=>$email));
         //$row = $stmt->fetch(PDO::FETCH_ASSOC);
         $count = $stmt->rowCount();

         if ($count == 0) {
             $stmt = $db_con->prepare("INSERT INTO NguoiDung(Email, MatKhau, ChucVu) VALUES(:email, :pass, :role)");
             $stmt->bindParam(":email", $email);
             $stmt->bindParam(":pass", $password);
             $stmt->bindParam(":role", $role);

             if ($stmt->execute()) {
                 echo "OK";
             } else {
                 echo "Query could not execute";
             }
         } else {
             echo "Duplicate";
         }
     } catch (PDOException $e) {
         echo $e->getMessage();
     }

?>
