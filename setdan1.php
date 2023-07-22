<?php
// session_start();

// $servername = "localhost";
// $username = "root";
// $password = "";
// $dbname="ludo";
include("config.php");

$setdun= $_POST['setdun'];
$setid= $_POST['setid'];
$fel= $_POST['fel'];

// $setdun= $_POST['set'];


$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed:". $conn->connect_error);
}

$sql = "UPDATE    ludoghor SET kardun=$setid , fel=$fel , dun=$setdun ";
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