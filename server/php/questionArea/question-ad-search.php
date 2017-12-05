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
        $searchContent = $decoded["content"];
        $searchType = $decoded["type"];
        $searchSubject = $decoded["subject"];

        $sql= "SELECT HoTen, MaCH, DeBai, DeBaiLe, CacDapAn, Dang, MonHoc, GiaiThich, DapAnDung, RiengTu FROM DeBai NATURAL JOIN (CauHoi NATURAL JOIN MonHoc) NATURAL JOIN CauHoiTracNghiem NATURAL JOIN NguoiDung WHERE (DeBai LIKE '%{$searchContent}%' OR DeBaiLe LIKE '%{$searchContent}%')";
        if (!empty($searchType)) $sql .= " AND Dang LIKE '%{$searchType}%'";
        if (!empty($searchSubject)) $sql .= " AND MonHoc LIKE '%{$searchSubject}%'";
        $stmt = $db_con->prepare($sql);
        $stmt->execute();
        $count = $stmt->rowCount();
        $result = $stmt->fetchAll();

        $questions = array();
        foreach ($result as $row) {
            $tmpQuestion = NULL;
            if (!$row['RiengTu']) {
                $tmpQuestion->id = $row['MaCH'];
                $tmpQuestion->title = $row['DeBaiLe'] === NULL ? $row['DeBai'] : $row['DeBaiLe'];
                $tmpQuestion->answers = explode("//", $row['CacDapAn']);
                $tmpQuestion->correctAnswer = $row['DapAnDung'];
                $tmpQuestion->explanation = $row['GiaiThich'];
                $tmpQuestion->isPrivate = $row['RiengTu'];
                $tmpQuestion->type = $row['Dang'];
                $tmpQuestion->subject = $row['MonHoc'];
                $tmpQuestion->author = $row['HoTen'];

                array_push($questions, $tmpQuestion);
            }
        }
        echo json_encode($questions);
    } catch (PDOException $e) {
        echo json_encode($e);
    }

?>
