<?php
    session_start();
    error_reporting(0);
    require_once '../dbconfig.php';

    if(strcasecmp($_SERVER['REQUEST_METHOD'], 'POST') != 0){
     throw new Exception('Request method must be POST!');
    }
    $contentType = isset($_SERVER["CONTENT_TYPE"]) ? trim($_SERVER["CONTENT_TYPE"]) : '';
    if(strcasecmp($contentType, 'application/json') != 0){
     throw new Exception('Content type must be: application/json');
    }
    $content = trim(file_get_contents("php://input"));
    $decoded = json_decode($content, true);
    if(!is_array($decoded)){
     throw new Exception('Received content contained invalid JSON!');
    }

    try {
        $questionID = $decoded["id"];

        $sql= "DELETE FROM CauHoi WHERE MaCH='{$questionID}'";
        $stmt = $db_con->prepare($sql);
        $stmt->execute();
        $count = $stmt->rowCount();
        echo ("Deleted " . $count);
    } catch (PDOException $e) {
        echo json_encode($e);
    }

?>
