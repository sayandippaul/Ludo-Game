<?php
// session_start();

// $servername = "localhost";
// $username = "root";
// $password = "";
// $dbname="ludo";
include("config.php");

$a= $_POST['no'];


$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed:". $conn->connect_error);
}

$sql = "UPDATE `noofuser` SET `nouser` = '$a' WHERE `id` = 1";
$result = $conn->query($sql);





$conn->close();
$nouser=$a;
if($nouser==2){

    echo '<input type="text" id="ibox1" style=" width:45%;background-color:black;color:white;border:3px solid white;margin-top:5px;border-radius:20px;height:35px;padding:5px;font-weight:bolder;font-size:large" maxlength="15" id="name" placeholder="enter Red User`s name(max length 15) colour:Red">
    <button id="nb1" onclick="id1(1)" style="height:42px;border-radius:20px; width:20%;margin-left:5px;background-color:red;color:white">Save User</button>
    <br>
    <br>
    <input type="text" id="ibox3" style="width:45%;background-color:black;color:white;border:3px solid white;margin-top:5px;border-radius:20px;height:35px;padding:5px;font-weight:bolder;font-size:large" maxlength="15" id="name" placeholder="enter Blue User`s name(max length 15) colour:Blue">
    <button id="nb3" onclick="id1(3)" style="height:42px;border-radius:20px; width:20%;margin-left:5px;background-color:blue;color:white">Save User</button>
    
    <br>
    
    ';
}

else if($nouser==3){

    echo '<input type="text" id="ibox1" style=" width:45%;background-color:black;color:white;border:3px solid white;margin-top:5px;border-radius:20px;height:35px;padding:5px;font-weight:bolder;font-size:large" maxlength="15" id="name" placeholder="enter Red User`s name(max length 15) colour:Red">
    <button id="nb1" onclick="id1(1)" style="height:42px;border-radius:20px; width:20%;margin-left:5px;background-color:red;color:white">Save User</button>
    <br>
    <br>
    <input type="text" id="ibox2" style="width:45%;background-color:black;color:white;border:3px solid white;margin-top:5px;border-radius:20px;height:35px;padding:5px;font-weight:bolder;font-size:large" maxlength="15" id="name" placeholder="enter Green User`s name(max length 15) colour:Green">
    <button id="nb2" onclick="id1(2)" style="height:42px;border-radius:20px; width:20%;margin-left:5px;background-color:green;color:white">Save User</button>

    <br>
    <br>
    <input type="text" id="ibox3" style="width:45%;background-color:black;color:white;border:3px solid white;margin-top:5px;border-radius:20px;height:35px;padding:5px;font-weight:bolder;font-size:large" maxlength="15" id="name" placeholder="enter Blue User`s name(max length 15) colour:Blue">
    <button id="nb3" onclick="id1(3)" style="height:42px;border-radius:20px; width:20%;margin-left:5px;background-color:blue;color:white">Save User</button>
    
    <br>
    
    ';
}
else if($nouser==4){

    echo '<br>
    <input type="text" id="ibox1" style=" width:45%;background-color:black;color:white;border:3px solid white;margin-top:5px;border-radius:20px;height:35px;padding:5px;font-weight:bolder;font-size:large" maxlength="15" id="name" placeholder="enter Red User`s name(max length 15) colour:Red">
    <button id="nb1" onclick="id1(1)" style="height:42px;border-radius:20px; width:20%;margin-left:5px;background-color:red;color:white">Save User</button>
    <br>
    <br>
    <input type="text" id="ibox2" style="width:45%;background-color:black;color:white;border:3px solid white;margin-top:5px;border-radius:20px;height:35px;padding:5px;font-weight:bolder;font-size:large" maxlength="15" id="name" placeholder="enter Green User`s name(max length 15) colour:Green">
    <button id="nb2" onclick="id1(2)" style="height:42px;border-radius:20px; width:20%;margin-left:5px;background-color:green;color:white">Save User</button>

    <br>
    <br>
    <input type="text" id="ibox3" style="width:45%;background-color:black;color:white;border:3px solid white;margin-top:5px;border-radius:20px;height:35px;padding:5px;font-weight:bolder;font-size:large" maxlength="15" id="name" placeholder="enter Blue User`s name(max length 15) colour:Blue">
    <button id="nb3" onclick="id1(3)" style="height:42px;border-radius:20px; width:20%;margin-left:5px;background-color:blue;color:white">Save User</button>
    
    <br>
    <br>
    <input type="text" id="ibox4" style="width:45%;background-color:black;color:white;border:3px solid white;margin-top:5px;border-radius:20px;height:35px;padding:5px;font-weight:bolder;font-size:large" maxlength="15" id="name" placeholder="enter Yellow User`s name(max length 15) colour:Yellow">
    <button id="nb4" onclick="id1(4)" style="height:42px;border-radius:20px; width:20%;margin-left:5px;background-color:yellow;color:black">Save User</button>
    
    <br>
    ';
}


?>