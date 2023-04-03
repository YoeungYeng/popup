<?php
    $cn = new mysqli("localhost","root","","database_city");
    $id = $_POST['txt-id'];
    $name = $cn->real_escape_string(trim($_POST['txt-name']));
    $od = $_POST['txt-od'];
    $status = $_POST['txt-status'];
    $language = $_POST['txt-language'];
    $img = $_POST['txt-photo'];
    $des = trim($_POST['txt-des']);
    $des = str_replace("/n","<b>",$des);
    //connect to database
    
    $sql ="INSERT INTO tbl_city VALUES(null,'$name','$img','$des','$od','$language','$status')";
    $cn->query($sql);

    $msg['last_id'] = $cn->insert_id;
    
    echo json_encode($msg);
?>
