<?php
// session_start();

// $servername = "localhost";
// $username = "root";
// $password = "";
// $dbname="ludo";
include("config.php");

$name= $_POST['name'];
$body= $_POST['body'];
// $fel= $_POST['fel'];

// $setdun= $_POST['set'];


$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed:". $conn->connect_error);
}

$sql = "INSERT INTO    chat   (name,body) VALUES ('$name' , '$body') ";
// $sql = "UPDATE  grpchatseen SET seen=1    where toid='$fromid' AND grpid='$grpid'";
// $sql = "UPDATE  messages SET seento=1      where  grpid='$grpid' AND ";





$result = $conn->query($sql);

    // $temp="";
    //     if ($result->num_rows > 0) {
    //         while($row = $result->fetch_assoc()) {

    //             $temp=$row["kardun"].$row["dun"].$row["fel"];
    //         }

    //     }
    //    echo $temp; 
$conn->close();
echo "hi";

?>