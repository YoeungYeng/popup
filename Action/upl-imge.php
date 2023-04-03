<?php
    // $data['msg'] ="Yeng Love Sokrong";
    $file = $_FILES['txt-file'];
    $tmp_file = $file['tmp_name'];
    // $data['tmp1'] = $tmp_file;
    $file_name = $file['name'];
    $ext = pathinfo($file_name,PATHINFO_EXTENSION);
    $img_name = time().mt_rand(10000,99999).'.'.$ext;
    
    move_uploaded_file($tmp_file,'../Img/'. $img_name); 
    //tranform to the client
    $data['img-box'] =$img_name;
    echo json_encode($data);
?>