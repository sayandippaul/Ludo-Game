<?php


// $servername = "localhost";
// $username = "root";
// $password = "";
// $dbname="ludo";
include("config.php");

// $ghor= $_POST['ghuti'];
// $grpid = $_POST['grpid'];
// $seen = $_POST['seen'];
// $fromid =$_SESSION["id"];

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed:". $conn->connect_error);
}
$temp= array();
$temp1= array();


for($i=1;$i<17;$i++){
    // if()
    $sql = "SELECT *  FROM position  WHERE id=$i ";
$result = $conn->query($sql);

    if ($result->num_rows > 0) {
        while($row = $result->fetch_assoc()) {
    $temp[$i]=$row["position"];
    $temp1[$i]=$row["name"];


            
        }

    }
    

    
}
// $sql = "UPDATE  grpchatseen SET seen=1    where toid='$fromid' AND grpid='$grpid'";
// $sql = "UPDATE  messages SET seento=1      where  grpid='$grpid' AND ";






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
        echo json_encode($temp);
        $conn->close();
// return $ghor;

?>