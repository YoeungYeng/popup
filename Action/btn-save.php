<?php
    $id = $_POST['txt-id'];
    $name = $_POST['txt-name'];
    $od = $_POST['txt-od'];
    $status = $_POST['txt-status'];
    $language = $_POST['txt-language'];
    $img = $_POST['txt-img'];
    $des = $_POST['txt-des'];
    //connect to database
    $cn = new mysqli("localhost","root","","database_city");
    $sql ="INSERT INTO tbl_city VALUES(null,'$name','$img','$des','$od','$language','$status')";
    $cn->query($sql);
?>