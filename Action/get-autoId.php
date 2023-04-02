<?php
    $cn = new mysqli("localhost","root","","database_city");
    $sql ="SELECT ID FROM tbl_city ORDER BY ID DESC";
    $rs =$cn->query($sql);
    $msg["id"] =1;
    if($rs ->num_rows > 0){
        $row = $rs->fetch_array();
        $msg["id"] = $row[0];
    }
    echo json_encode($msg)
?>