<?php
// session_start();

// $servername = "localhost";
// $username = "root";
// $password = "";
// $dbname="ludo";
include("config.php");

$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed:". $conn->connect_error);
}




        $sql1 = "SELECT *  FROM users";
$result = $conn->query($sql1);

// $temp1;
$users= array();
// $dunusers1= array();
$i=0;
if ($result->num_rows > 0) {
    while($row = $result->fetch_assoc()) {
        
$users[$i]=$row["userid"].$row["name"];
$i++;
    }
}

    //    echo $temp;
    echo json_encode($users); 
$conn->close();


?>
