<?php
// session_start();

// $servername = "localhost";
// $username = "root";
// $password = "";
// $dbname="ludo";
include("config.php");

$dun= $_POST['dan'];
$name = $_POST['name'];
$cutname = $_POST['cutname'];

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed:". $conn->connect_error);
}

 $sql ="UPDATE  position SET position='$cutname' where name='$cutname'";

 $result = $conn->query($sql);
 

$conn->close();
return $result;

?>