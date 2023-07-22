<?php
// session_start();

// $servername = "localhost";
// $username = "root";
// $password = "";
// $dbname="ludo";
include("config.php");

$cut= $_POST['cut'];
$cutby= $_POST['cutby'];
// $fel= $_POST['fel'];

// $setdun= $_POST['set'];


$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed:". $conn->connect_error);
}
$sql1 = "SELECT *  FROM stat WHERE id=1";
$result = $conn->query($sql1);

if ($result->num_rows > 0) {
    while($row = $result->fetch_assoc()) {
        // if($id==1){
            // $temp="r".$dun;
            $temp1=$cut[0]."cutb".$cutby[0];
            $temp=$cutby[0]."cut".$cut[0];

            $temp2=$row[$temp]+1;
            $temp3=$row[$temp1]+1;
            $sql = "UPDATE    stat SET $temp=$temp2 ";
$result1 = $conn->query($sql);

$sql2 = "UPDATE    stat SET $temp1=$temp3 ";
$result2 = $conn->query($sql2);

}

}

//             }
//             else if($id==2){
//                 $temp="g".$dun;
//                     // $sql = "UPDATE    stat SET $temp=$id ";
//                     $temp1=$row[$temp];
//             $sql = "UPDATE    stat SET $temp=$temp1+1 ";
// $result = $conn->query($sql);


//                 }
//                 else if($id==3){
//                     $temp="b".$dun;
//                         // $sql = "UPDATE    stat SET $temp=$id ";
//                         $temp1=$row[$temp];
//             $sql = "UPDATE    stat SET $temp=$temp1+1 ";
// $result = $conn->query($sql);


//                     }
                    
//                     else if($id==4){
//                         $temp="y".$dun;
//                             // $sql = "UPDATE    stat SET $temp=$id ";
//                             $temp1=$row[$temp];
//             $sql = "UPDATE    stat SET $temp=$temp1+1 ";
// $result = $conn->query($sql);


                            
//                         }
    

// if($id==1){
// $temp="r".$dun;
//     $sql = "UPDATE    stat SET $temp= ";
// }
// else if($id==2){
//     $temp="g".$dun;
//         $sql = "UPDATE    stat SET $temp=$id ";
//     }
//     else if($id==3){
//         $temp="b".$dun;
//             $sql = "UPDATE    stat SET $temp=$id ";
//         }
        
//         else if($id==4){
//             $temp="y".$dun;
//                 $sql = "UPDATE    stat SET $temp=$id ";
//             }
            
               






     
$conn->close();
echo $temp1;

?>