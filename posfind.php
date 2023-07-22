<?php
// session_start();

// $servername = "localhost";
// $username = "root";
// $password = "";
// $dbname="ludo";
include("config.php");

$ghor= $_POST['ghuti'];
// $grpid = $_POST['grpid'];
// $seen = $_POST['seen'];
// $fromid =$_SESSION["id"];

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed:". $conn->connect_error);
}

$sql = "SELECT *  FROM position  where id='$ghor'";
// $sql = "UPDATE  grpchatseen SET seen=1    where toid='$fromid' AND grpid='$grpid'";
// $sql = "UPDATE  messages SET seento=1      where  grpid='$grpid' AND ";





$result = $conn->query($sql);

// if ($result->num_rows > 0) {
//     // output data of each row
//     while($row = $result->fetch_assoc()) {
//         echo "id: " . $row["id"]. " - Name: " . $row["username"]. " ". "<br>";
//     }
// } else {
//     echo "0 results";
// }
// $tname = array();
// $tpost= array();

        // $fromid =$_SESSION['id'];
        // $result=getmembers($n);
        // echo $ghor;
        $i=0;$temp="";
        if ($result->num_rows > 0) {
            while($row = $result->fetch_assoc()) {

                // $tname[$i]=$row["name"];
                // $tpost[$i]=$row["position"];

                // $i++;
                // $temp=$temp.'"'.$row["name"].'":'.'"'.$row["position"].'",';
                // $temp=$temp.$row["name"];
                // echo '';

                // echo $row["name"]."ui";
                // $temp=$temp.'<div   onclick="ghuti(`'.$row["name"].','.$row["position"].'`)" style="margin: auto; height: 50%;width:50%;background-image: url('.$row["name"].'.jpeg);background-size: cover;border: 5px solid black;"></div>';
                echo $row["position"].$row["name"];
            }

        }
        else{
            // echo `$ghor."ui"`;
        }
        // echo $temp."ui";
        
echo $temp;

$conn->close();
// return $ghor;

?>