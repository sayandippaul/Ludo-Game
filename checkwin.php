<?php
// session_start();

// $servername = "localhost";
// $username = "root";
// $password = "";
// $dbname="ludo";
include("config.php");

// $name= $_POST['name'];
// $id= $_POST['id'];
// $fel= $_POST['fel'];

// $setdun= $_POST['set'];


$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed:". $conn->connect_error);
}

$sql1 = "SELECT *  FROM win";


$result1 = $conn->query($sql1);

    $temp="";
        if ($result1->num_rows > 0) {
            while($row = $result1->fetch_assoc()) {

                $temp=$temp.'<div class="sw"><strong class="swp">position '.$row["id"].'  </strong><span class="swn"> : '.$row["name"]."<span></div>";
            }

        }
       echo $temp;
    // $temp="";
    //     if ($result->num_rows > 0) {
    //         while($row = $result->fetch_assoc()) {

    //             $temp=$row["kardun"].$row["dun"].$row["fel"];
    //         }

    //     }
    //    echo $temp; 
$conn->close();
// echo "hi";

?>