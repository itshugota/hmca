<?php
$arr = array('1', '2');

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
         //$questionsData = $decoded->questionTitle;
         /*foreach($questionsData as $questionData) {
            $questionTitle = $questionData->questionTitle;
            $questionAnswers = $questionData->answers;
            $questionCorrectAnswer = $questionData->correctAnswer;
            $email = 'haha';
            $stmt = $db_con->prepare("INSERT INTO CauHoi(GiaiThich) VALUES ('haha :qID')");
                $stmt->execute(array(":qID"=>$email));
                $row = $stmt->fetch(PDO::FETCH_ASSOC);
                $count = $stmt->rowCount();
         }*/

     } catch (PDOException $e) {
         //echo json_encode($arr);
     }

     $dat2a = '{
	    "name": "Aragorn",
	    "race": "Human"
     }';
     //echo json_encode($dat2a->name);

     //echo json_encode($decoded);
     echo json_encode($decoded[0]["questionTitle"]);
     $character = json_decode($dat2a);
?>
