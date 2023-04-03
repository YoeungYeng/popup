<?php
    //connect to database
    $cn = new mysqli("localhost","root","","database_city");
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <title>Admin</title>
</head>
<body>
    
        <div class="container">
            <header>
                <div class="btn-add">
                    + Add
                </div>
                <div class="MenuBar">
                    <ul>
                        <li><a href="home.php">Home</a></li>
                        <li><a href="#">Prey Veng</a></li>
                        <li><a href="City.php" class="active">PP</a></li>
                    </ul>
                </div>
            </header>
        </div>
    <table id="tbl_data">
        <thead>
            <tr>
                <th>
                    ID
                </th>
                <th>
                    Name
                </th>
                <th>
                    Image
                </th>
                <th>
                    Description
                </th>
                <th>
                    Orders
                </th>
                <th>
                    Language
                </th>
                <th>
                    Status
                </th>
            </tr>
        </thead>
        <tbody>
            <?php
                $sql ="SELECT *FROM tbl_city ORDER BY ID DESC";
                $rs = $cn->query($sql);
                //check condition
                if($rs -> num_rows > 0){
                    while( $row =$rs->fetch_array()){
                        ?>
                            <tr>
                                <td>
                                    <?php echo $row[0] ?> 
                                </td>
                                <td>
                                    <?php echo $row[1] ?> 
                                </td>
                                <td>
                                    <img src="Img/<?php echo $row[2] ?>" alt=""> 
                                </td>
                                <td>
                                    <?php echo $row[3] ?> 
                                </td>
                                <td>
                                    <?php echo $row[4] ?> 
                                </td>
                                <td>
                                    <?php echo $row[5] ?> 
                                </td>
                                <td>
                                    <?php echo $row[6] ?> 
                                </td>
                            </tr>

                        <?php
                    }
                }
            ?>
            
        </tbody>
    </table>
</body>

<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.4/jquery.min.js"></script>
<script src="App.js"></script>
</html>