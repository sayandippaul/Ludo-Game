<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>LUDO</title>
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
<style>
    #b1{
        margin-top:50px;
        background-color:red;
        height:60px;
        width:60px;
        margin-left:30px;
    }
    #b2{
        margin-top:50px;

        background-color:green;
        height:60px;
        width:60px;
        margin-left:30px;

    }
    #b3{
        margin-top:50px;

        background-color:blue;
        height:60px;
        width:60px;
        margin-left:30px;

    }
    #b4{
        margin-top:50px;

        background-color:yellow;
        height:60px;
        width:60px;
        margin-left:30px;

    }
    button:disabled,
button[disabled]{
  /* border: 1px solid #999999;
  background-color: #cccccc; */
  color: white;
}


</style>
</head>
<body style="background-image: url('ludob.jpg');background-repeat: no-repeat;background-size: cover;">
    <div id="body" style=" margin-top:00px;margin-left:25%" >
        <div style="color:white;width:70%;margin-right:100px;font-size:25px;font-weight:bolder">Welcome To Ludo</div>
        <button onclick="endnow()" style=" margin-left:80%;margin-top:-50px; height:42px;border-radius:20px; width:20%;background-color:red;color:white">End Game</button>
        <!-- <input type="text" id="nouser" placeholder="enter no of users"> -->
        <label for="nouser" style="color:white;" ></label>

        <?php
// session_start();

// $servername = "localhost";
// $username = "root";
// $password = "";
// $dbname="ludo";
include("config.php");
// $a= $_POST['noofuser'];


$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed:". $conn->connect_error);
}

$sql = "SELECT *  FROM noofuser WHERE id='1' ";
      $result = $conn->query($sql);
      $tmp=0;

                                      if ($result->num_rows > 0) {
                                          while($row = $result->fetch_assoc()) {
                                              if($row["nouser"]!=0){

                                                  $tmp=1;
                                                  $nouser=$row["nouser"];
                                              }
                                          }
                                        }
                                        // echo $tmp;
                                        if($tmp==0){
                                            // echo 'class="btn btn-success"  onclick="applycarrer('.$row["id"].')">Apply Now';
                                            // return 0;
                                            echo '<h3 style="color:white;"><strong >Set Number Of Users: </strong></h3>

                                            <select  id="nouser" style="display:flex; background-color:black;color:white;border:3px solid white;border-radius:20px;height:35px;padding:5px;font-weight:bolder;font-size:large" placeholder="select between 2 and 4">
                                            
                                              <option value="2" selected>2 users</option>
                                              <option value="3">3 users</option>
                                              <option value="4">4 users</option>
                                              <!-- <option value="audi">Audi</option> -->
                                            </select>';
                                            
                                        }
                                        else{
                                            // echo ' class="btn btn-info"  >Applied';
                                            // return 1;
                                            echo '<input style="display:none" value="'.$nouser.'" id="nouser"/>
                                            <span style="color:white">no of users= '.$nouser.'</span>';


                                        
                                        }




$conn->close();
// echo "hi";

?>
        
        <!-- <br>
        <input type="text" style="background-color:black;color:white;border:3px solid white;margin-top:5px;border-radius:20px;height:35px;padding:5px;font-weight:bolder;font-size:large" maxlength="15" id="name" placeholder="enter name(max length 15)">
        <br> -->
        <button id="snumber" style="background-color:black;color:white;border:3px solid white;border-radius:20px;width:40%;height:45px;padding:5px;font-weight:bolder;font-size:large;box-shadow:3px 3px  blue" onclick="entry()">Save Number Of Users</button>
        <div id="show"></div>
    </div>
    <div id="showproblem" style="color:white"></div>


    
</body>
</html>
<script>
    var name,id,noofuser;
    function entry(){

        //  name=document.getElementById("name").value;

         noofuser=document.getElementById("nouser").value;
         $.ajax({
            type: "POST",
            url: "setnoofuser.php",
            data: {no:noofuser },

            success: function (result, status, xhr) {
                $("#show").html(result);
                // alert(result);
                // gopage();
                // sala();
                // h(i, a2, a1);/
                //  alert(n);
                
                //  document.getElementById(i).innerHTML=result;
            }
        });
        document.getElementById("snumber").style.display="none";
        // gopage();

        // if(noofuser==2){
        //     // document.getElementById("show").innerHTML=""
        //     document.getElementById("show").innerHTML='<button id="b1" onclick="id1(1)">red</button><button id="b3" onclick="id1(3)">blue</button> ';

        // }
        // else  if(noofuser==3){
        //     document.getElementById("show").innerHTML='<button id="b1" onclick="id1(1)">red</button><button id="b2" onclick="id1(2)">green</button><button id="b3" onclick="id1(3)">blue</button> ';

        // }
        // else  if(noofuser==4){
        //     document.getElementById("show").innerHTML='<button id="b1" onclick="id1(1)">red</button><button id="b2" onclick="id1(2)">green</button><button id="b3" onclick="id1(3)">blue</button><button id="b4" onclick="id1(4)">yellow</button>';

        // }
        // check();
        // for(var i=0;i<userlist.length;i++){
        //     var showid="b"+parseInt(userlist[i][0]);
        //     document.getElementById(showid).disabled=true;
        //     // console.log(userlist[i].substring(1));
        //     document.getElementById(showid).innerHTML+="<br><hr><strong>"+userlist[i].substring(1)+"</strong>";

            
        // }

        
    }
    function id1(a){
        document.getElementById("nb"+a).disabled=true;
        document.getElementById("nb"+a).innerHTML="User Saved";
        document.getElementById("ibox"+a).disabled=true;
        var name=document.getElementById("ibox"+a).value;
        // document.getElementById("b"+a).innerHTML+='<br><hr ><strong >'+name+'</strong>';


        // alert(name);
            $.ajax({
            type: "POST",
            url: "setname.php",
            data: {name:name,id:a },

            success: function (result, status, xhr) {
                // $("#showproblem").html(result);
                // alert(result);
                gopage();
                // sala();
                // h(i, a2, a1);/
                //  alert(n);
                
                //  document.getElementById(i).innerHTML=result;
            }
        });
    
    }
    var userlist;
    function check(){
        $.ajax({
            type: "POST",
            url: "checkuser.php",
            // data: {name:name,id:a },

            success: function (result, status, xhr) {
                // $("#showproblem").html(result);
                userlist=result;
                userlist=JSON.parse(userlist);
                console.log(userlist.length);
                // alert(result);

                // sala();
                // h(i, a2, a1);/
                //  alert(n);
                
                //  document.getElementById(i).innerHTML=result;
            }
        });
    }
    check();
setInterval(check, 500);
setInterval(gopage, 500);

function gopage(){
    // alert(userlist.length);
    if(noofuser==userlist.length){
        var mysound=new Audio('gamestart.mp3');
        mysound.play();
        window.location = "ludo.php";
        // alert("hi");
        // console.log("hi");
    }
}
function endnow() {
  $.ajax({
    type: "POST",
    url: "endgame.php",
    // data: { setdun: 0, setid: id, fel: 0 },

    success: function (result, status, xhr) {
      alert("match ended");
      window.location = "firstpage.php";
      // window.location = "index.php";

      // $("#showproblem1").html(result);
      // cleardiv();
      // // cleardiv();
      // dun=0;
      // dhu=1;
      // setpos();
    },
  });
}

// gopage();

    
</script>