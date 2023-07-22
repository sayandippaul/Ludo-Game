<?php
// session_start();

// $servername = "localhost";
// $username = "root";
// $password = "";
// $dbname="ludo";
include("config.php");

// $dun= $_POST['dan'];
// $name = $_POST['name'];
// $seen = $_POST['seen'];
// $froamid =$_SESSION["id"];

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed:". $conn->connect_error);
}

// // $sql = "SELECT *  FROM position";
// if($dun=='58'){
//     // $dun="";
//     // $dun=$dun.'h'.$name;
//     $sql = `UPDATE  position SET position=`.'h'.$name `  where name='$name'`;
// }
// else{
    // $sql = "UPDATE  position SET position='$dun'  where name='$name'";

// }
// $sql = "UPDATE  messages SET seento=1      where  grpid='$grpid' AND ";
$sql="UPDATE `position` SET `position` = 'r1' WHERE `position`.`id` = 1";
$result = $conn->query($sql);

$sql="UPDATE `position` SET `position` = 'r2' WHERE `position`.`id` = 2";
$result = $conn->query($sql);
$sql="UPDATE `position` SET `position` = 'r3' WHERE `position`.`id` = 3";
$result = $conn->query($sql);
$sql="UPDATE `position` SET `position` = 'r4' WHERE `position`.`id` = 4";
$result = $conn->query($sql);
$sql="UPDATE `position` SET `position` = 'b1' WHERE `position`.`id` = 5";
$result = $conn->query($sql);
$sql="UPDATE `position` SET `position` = 'b2' WHERE `position`.`id` = 6";
$result = $conn->query($sql);
$sql="UPDATE `position` SET `position` = 'b3' WHERE `position`.`id` = 7";
$result = $conn->query($sql);
$sql="UPDATE `position` SET `position` = 'b4' WHERE `position`.`id` = 8";
$result = $conn->query($sql);
$sql="UPDATE `position` SET `position` = 'g1' WHERE `position`.`id` = 9";
$result = $conn->query($sql);
$sql="UPDATE `position` SET `position` = 'g2' WHERE `position`.`id` = 10";
$result = $conn->query($sql);
$sql="UPDATE `position` SET `position` = 'g3' WHERE `position`.`id` = 11";
$result = $conn->query($sql);
$sql="UPDATE `position` SET `position` = 'g4' WHERE `position`.`id` = 12";
$result = $conn->query($sql);
$sql="UPDATE `position` SET `position` = 'y1' WHERE `position`.`id` = 13";
$result = $conn->query($sql);
$sql="UPDATE `position` SET `position` = 'y2' WHERE `position`.`id` = 14";
$result = $conn->query($sql);
$sql="UPDATE `position` SET `position` = 'y3' WHERE `position`.`id` = 15";
$result = $conn->query($sql);
$sql="UPDATE `position` SET `position` = 'y4' WHERE `position`.`id` = 16";
$result = $conn->query($sql);
$result = $conn->query($sql);
$sql1= "TRUNCATE TABLE `chat` ";
$result1 = $conn->query($sql1);
$sql2= "TRUNCATE TABLE `users` ";
$result2 = $conn->query($sql2);
$sql3= "TRUNCATE TABLE `win` ";
$result3 = $conn->query($sql3);
$sql4="UPDATE `ludoghor` SET `kardun` = '1', `dun` = '0', `fel` = '0' WHERE `ludoghor`.`id` = 1";
$result4 = $conn->query($sql4);
$sql5="UPDATE `stat` SET `g1` = '0', `g2` = '0', `g3` = '0', `g4` = '0', `g5` = '0', `g6` = '0', `gcuty` = '0', `gcutb` = '0', `gcutr` = '0', `gcutbb` = '0', `gcutby` = '0', `gcutbr` = '0', `r1` = '0', `r2` = '0', `r3` = '0', `r4` = '0', `r5` = '0', `r6` = '0', `rcutb` = '0', `rcutg` = '0', `rcuty` = '0', `rcutbb` = '0', `rcutbg` = '0', `rcutby` = '0', `b1` = '0', `b2` = '0', `b3` = '0', `b5` = '0', `b6` = '0', `bcutg` = '0', `bcutr` = '0', `bcuty` = '0', `bcutby` = '0', `bcutbg` = '0', `bcutbr` = '0', `y1` = '0', `y2` = '0', `y3` = '0', `y4` = '0', `y5` = '0', `y6` = '0', `ycutb` = '0', `ycutr` = '0', `ycutg` = '0', `ycutbb` = '0', `ycutbg` = '0', `ycutbr` = '0' WHERE `stat`.`id` = 1";
$result5 = $conn->query($sql5);

$sql6 = "UPDATE `noofuser` SET `nouser` = '0' WHERE `id` = 1";
$result = $conn->query($sql6);






echo 2;
$conn->close();
// return $result;

?>