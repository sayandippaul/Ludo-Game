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




        $sql1 = "SELECT *  FROM stat WHERE id=1";
$result = $conn->query($sql1);

// $temp1;
$dunusers= array();
// $dunusers1= array();

if ($result->num_rows > 0) {
    while($row = $result->fetch_assoc()) {
        
        $dunusers[1]=$row["g1"];
        $dunusers[2]=$row["g2"];
        $dunusers[3]=$row["g3"];
        $dunusers[4]=$row["g4"];
        $dunusers[5]=$row["g5"];
        $dunusers[6]=$row["g6"];
        $dunusers[7]=$row["gcuty"];
        $dunusers[8]=$row["gcutb"];
        $dunusers[9]=$row["gcutr"];
        $dunusers[10]=$row["gcutbb"];
        $dunusers[11]=$row["gcutby"];
        $dunusers[12]=$row["gcutbr"];
        $dunusers[13]=$row["r1"];
        $dunusers[14]=$row["r2"];
        $dunusers[15]=$row["r3"];
        $dunusers[16]=$row["r4"];
        $dunusers[17]=$row["r5"];
        $dunusers[18]=$row["r6"];
        $dunusers[19]=$row["rcutb"];
        $dunusers[20]=$row["rcutg"];
        $dunusers[21]=$row["rcuty"];
        $dunusers[22]=$row["rcutbb"];
        $dunusers[23]=$row["rcutbg"];
        $dunusers[24]=$row["rcutby"];
        $dunusers[25]=$row["b1"];
        $dunusers[26]=$row["b2"];
        $dunusers[27]=$row["b3"];
        $dunusers[28]=$row["b5"];
        $dunusers[29]=$row["b6"];
        $dunusers[30]=$row["bcutg"];
        $dunusers[31]=$row["bcutr"];
        $dunusers[32]=$row["bcuty"];
        $dunusers[33]=$row["bcutby"];
        $dunusers[34]=$row["bcutbg"];
        $dunusers[35]=$row["bcutbr"];
        $dunusers[36]=$row["y1"];
        $dunusers[37]=$row["y2"];
        $dunusers[38]=$row["y3"];
        $dunusers[39]=$row["y4"];
        $dunusers[40]=$row["y5"];
        $dunusers[41]=$row["y6"];
        $dunusers[42]=$row["ycutb"];
        $dunusers[43]=$row["ycutr"];
        $dunusers[44]=$row["ycutg"];
        $dunusers[45]=$row["ycutbb"];
        $dunusers[46]=$row["ycutbg"];
        $dunusers[47]=$row["ycutbr"];
        $dunusers[48]=$row["b4"];
        $dunusers[0]=0;

    }
}

    //    echo $temp;
    echo json_encode($dunusers); 
$conn->close();


?>
