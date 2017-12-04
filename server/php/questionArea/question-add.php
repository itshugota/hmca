<?php
    session_start();
    require_once '../dbconfig.php';

 if(strcasecmp($_SERVER['REQUEST_METHOD'], 'POST') != 0){
     throw new Exception('Request method must be POST!');
 }

 //Make sure that the content type of the POST request has been set to application/json
 $contentType = isset($_SERVER["CONTENT_TYPE"]) ? trim($_SERVER["CONTENT_TYPE"]) : '';
 if(strcasecmp($contentType, 'application/json') != 0){
     throw new Exception('Content type must be: application/json');
 }

 //Receive the RAW post data.
 $content = trim(file_get_contents("php://input"));

 //Attempt to decode the incoming RAW post data from JSON.
 $decoded = json_decode($content, true);

 //If json_decode failed, the JSON is invalid.
 if(!is_array($decoded)){
     throw new Exception('Received content contained invalid JSON!');
 }

 try {

     foreach($decoded as $questionData) {
        $questionTitle = $questionData["questionTitle"];
        $questionAnswers = $questionData["answers"];
        $questionCorrectAnswer = $questionData["correctAnswer"];
        $questionIsPrivate = $questionData["privacy"] == "private" ? 1 : 0;
        $questionType = $questionData["questionType"];
        $questionExplanation = $questionData["questionExplanation"];

        $stmt = $db_con->prepare("INSERT INTO DeBai(DeBai) VALUES ('{$questionTitle}')");
        $stmt->execute();
        $count = $stmt->rowCount();

        $userID = 'ND00000000';
        $subjectID = 'MH00000000';

        $stmt = $db_con->prepare("SELECT * FROM DeBai_lastIndex");
        $stmt->execute();
        $row = $stmt->fetch(PDO::FETCH_ASSOC);
        $questionTitleID = "DB" . str_pad($row['LastIndex'], 8, "0", STR_PAD_LEFT);

        $stmt = $db_con->prepare("INSERT INTO CauHoi(MaND, MaDB, MaMH, Dang, RiengTu) VALUES ('{$userID}', '{$questionTitleID}', '{$subjectID}', '{$questionType}', '{$questionIsPrivate}')");
        $stmt->execute();
        $count = $stmt->rowCount();

        $stmt = $db_con->prepare("SELECT * FROM CauHoi_lastIndex");
        $stmt->execute();
        $row = $stmt->fetch(PDO::FETCH_ASSOC);
        $questionID = "CH" . str_pad($row['LastIndex'], 8, "0", STR_PAD_LEFT);

        $allAnswers = '';
        foreach($questionAnswers as $answer) {
            $allAnswers .= $answer['content'] . "//";
        }
        $allAnswers = substr($allAnswers, 0, -2);

        $stmt = $db_con->prepare("INSERT INTO CauHoiTracNghiem(MaCH, SLDapAn, CacDapAn, DapAnDung, GiaiThich) VALUES ('{$questionID}', '4', '{$allAnswers}', '{$questionCorrectAnswer}', '{$questionExplanation}')");
        $stmt->execute();
        $count = $stmt->rowCount();

     }
     echo json_encode($decoded);

 } catch (PDOException $e) {
     echo json_encode($e);
 }

?>
