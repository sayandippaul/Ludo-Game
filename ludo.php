<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>

    <style>
        table{
            border: 2px solid black;
        }
        #home {
width:30%;
height:20%;
background-color: red;
}

        td,
th {
    border: 1px solid black;
    padding: 10px;
    height: 30px;
    width:0.3%;
    table-layout: fixed;
    border-collapse: collapse;


}
table.fixed {
                table-layout: fixed;
            }
            table.fixed td {
                overflow: hidden;
            }

td {
    /* position: absolute; */
    /* position: relative; */
    text-align: center;
    font-weight: bolder;
    font-size:20px ;
    /* display:grid; */

    
    /* margin-top: -100px; */
   }

tr:nth-child(even) {
    background-color: #eee;
}

th[scope="col"] {
    background-color: #696969;
    color: #fff;
}

th[scope="row"] {
    background-color: #d7d9f2;
}

caption {
    padding: 10px;
    caption-side: bottom;
}

table {
    border-collapse: collapse;
    border: 2px solid rgb(200, 200, 200);
    letter-spacing: 1px;
    font-family: sans-serif;
    font-size: .8rem;
}
.homeuser td{
height: 140px;
width:140px
}

.homeuser1 td{
/* height: 60px; */
width:140px
}
.prob{
    height:150%;
}
#btn0{
    background-color:red;
}
#btn2{
    background-color:green;
}
#btn3{
    background-color:blue;
}
#btn4{
    background-color:yellow;
    color:black;
}
.cr{
    background-image: url('r1.jpeg');
  
}
.cg{
    background-image: url('g1.jpeg');
 
}
.cy{
    background-image: url('y1.jpeg');
 
}
.cb{
    background-image: url('b1.jpeg');
 
}
.user{

    background-image: linear-gradient(blue,black);
    /* box-shadow:2px 2px red; */
}
#username{
    /* background-color:black; */
    color:white;
    /* margin-left:30px; */
}

input[type="text"]:disabled {
  background: red;
  font-weight:bolder;
  height:40px;
  margin-left:20px;
  text-align:center;
  font-size:larger;
  width:170px;
  border-radius:15px;
  background-image: linear-gradient(black,blue);
  color:white;
  box-shadow: -2px -2px  white;

}
.inp{
    height:30px;
    width:290px;
  background-image: linear-gradient(to right,black,blue);
  color:white;
  padding-left:10px;
  box-shadow:-2px -2px white;
  /* box-shadow:2px 2px blue; */
  border-radius:10px;

    
}
.inp::placeholder {
    font-weight: bold;
    opacity: .5;
    color: white;
}
.showbutton1{
    height:35px;
    background-image: linear-gradient(to right,purple,pink);
  color:white;
  width:90px;
  margin-left:10px;
  /* padding-left:10px; */
  box-shadow:-2px -2px white;
  /* box-shadow:2px 2px blue; */
  border-radius:10px;

}
.sho2{
    display:inline-block;

    background-image: linear-gradient(to right,black,gold);
    color:white;
    padding-left:10px;
    padding-right:10px;

    /* padding-top:8px; */

    width:35px;
    margin-left:6px;
    margin-top:1px;
    height:20px;

    
}
.dund{
    margin-left:60px;
    height:25px;
    margin-top:5px;
    text-align:center;
    padding-top:2px;
    width:40%;
    background-color:gold;
    /* background-image: linear-gradient(gold); */

    color:black;
    box-shadow:2px 2px black;
}
.ycut{
    display:inline-block;
    flex-direction:row;
    height:20px;
    width:30px;
    padding:5px;
    background-color:yellow;
    color:black;
}
.gcut{
    /* display:flex;
     */
    display:inline-block;

    flex-direction:row;

    height:20px;
    width:30px;
    padding:5px;
    background-color:green;
    color:black;
}
.bcut{
    /* display:flex; */
    display:inline-block;

    height:20px;
    flex-direction:row;

    width:30px;
    padding:5px;
    background-color:rgb(55, 155, 223);
    color:black;
}
.rcut{
    /* display:flex; */
    display:inline-block;

    height:20px;
    flex-direction:column;

    width:30px;
    padding:5px;
    background-color:red;
    color:black;
}
.totalyourcut{
    margin-left:45px;
    margin-top:10px;
    font-weight:bolder;
}

.chat{
    height:auto;
    padding:5px;
    background-color:orange;
    margin:10px;
    color:black;
    box-shadow:2px 2px white;
    border-radius:10px;
}
.chatname{
    /* box-shadow:3px 3px black; */
    padding:2px;
}
.btnn{
    color:white;
}
/* body{
    background-color:black;
    color:white;
    /* border:2px solid white; */
 


    </style>
    <script>
    // var noofuser=4;
    var tname,tpost;
    // // alert("hi");
    

    
            // document.getElementById("3")).innerHTML="hi";
            // alert("hi");

    // if(noofuser==4){

    // }
    
    
</script>


<!-- <script src=""></script> -->
<script >

</script>

</head>
<body>
 <!-- <embed src="music/music.mp3" loop="true" autostart="true" width="2" height="0"> -->
 
 <!-- <audio src="music.mp3" autostart="true" > -->
<!-- <p>If you are reading this, it is because your browser does not support the audio element.</p> -->
<!-- </audio> -->
<div id="header" style="height:200px;width:620px;background-image:url('ludoup.jpg');background-repeat: no-repeat;background-size:800px 100%;">
<div style="height:60px;"></div>
<div id="showinput" style="height:40px;margin-top:90px;margin-left:106px;"> 
            <!-- <input type="text" id="c2">
            <button onclick="sendm(2)">send</button> -->

    </div>
</div>
   <div id="body"  style="display:grid;grid-template-columns: 5fr 2fr 5fr;height: 100vh;width:300px;">
    <div id="left">
        <div style="display: grid;grid-template-columns: 5fr; height: 310px;" class="user">
           <div id="username">
            <!-- <input type="text" id="chat">
            <button>send</button> -->
            <!-- <input type="text" id="c2">
            <button onclick="sendm(2)">send</button>
     -->
            <!-- <br> -->
            <!-- <button>leave</button>
            <button>resque</button>
            <button>hello</button>
            <button>jaiho</button> -->
            <div class="dund"><strong >player 2</strong></div>
            <br>
            <span class="sho2"><strong class="sho">1: </strong> <span class="sho1" id="ug1">0</span></span>
            <span class="sho2"><strong class="sho">2: </strong> <span class="sho1" id="ug2">0</span></span>
            <span class="sho2"><strong class="sho">3: </strong> <span class="sho1" id="ug3">0</span></span>
            <br>
            <span class="sho2"><strong class="sho">4: </strong> <span class="sho1" id="ug4">0</span></span>
            <span class="sho2"><strong class="sho">5: </strong> <span class="sho1" id="ug5">0</span></span>
            <span class="sho2"><strong class="sho">6: </strong> <span class="sho1" id="ug6">0</span></span>
            <br>
            <!-- <strong>you cut</strong> -->
            <div class="dund"><strong >your cut</strong></div>

            <!-- <br> -->
            <div class="totalyourcut">
            <span><strong> </strong> <span class="ycut" id="ugcuty">0</span></span>
            <span><strong> </strong> <span class="bcut" id="ugcutb">0</span></span>
            <span><strong> </strong> <span class="rcut" id="ugcutr">0</span></span>
            <!-- <br> -->
            </div>
            <!-- <strong>others cut</strong> -->
            <div class="dund"><strong >others cut </strong></div>

            <!-- <br> -->
            <div class="totalyourcut">

            <span><strong> </strong> <span class="ycut" id="ugcutby">0</span></span>
            <span><strong> </strong> <span class="bcut" id="ugcutbb">0</span></span>
            <span><strong> </strong> <span class="rcut" id="ugcutbr">0</span></span>
            </div>
            <br>
            <!-- <br> -->
            <!-- <span><strong>red </strong> <span id=g3></span></span> -->
           
            <input type="text" id="n2" disabled placeholder="No user">
           </div>
           <!-- <div id="userpicture">
               <img src="" alt="hello">
           </div> -->
        </div>
        <table class="homeuser">
            <tr>
                <td id="g1"  style="background-color: rgb(54, 150, 54);"></td>
                <td id="g2"  style="background-color: rgb(54, 150, 54);"></td>
            
            </tr>
            <tr >
                <td id="g3"  style="background-color: rgb(54, 150, 54);"></td>
                <td id="g4"  style="background-color: rgb(54, 150, 54);"></td>
    
            </tr>
      <!-- {       -->
        </table >
         <table class="fixed"  style=" margin: auto;">
        <!-- <caption>Alien football stars</caption> -->
        <tr>
            <td >
                <div class="prob" id="14">14</div></td>
            <td  style="background-color: rgb(54, 150, 54);">
            <div class="prob" id="15">15</div></td>
            <td >
                <div class="prob" id="16">16</div></td>
            <td >
                <div class="prob" id="17">17</div></td>
            <td >
                <div class="prob" id="18">18</div></td>
            <td >
                <div class="prob" id="19">19</div></td>
        </tr>
        <tr>
            <td >
                <div id="13" class="prob"></div>
            </td>
            <td  style="background-color: rgb(54, 150, 54);">
                <div id="59" class="prob">59</div>
        
        </td>
            <td  style="background-color: rgb(54, 150, 54);">
                <div id="60" class="prob">60</div>
        
        </td>
            <td  style="background-color: rgb(54, 150, 54);">
                <div id="61" class="prob">61</div>
        
        </td>
            <td  style="background-color: rgb(54, 150, 54);">
                <div id="62" class="prob">62</div>
        
        </td>
            <td  style="background-color: rgb(54, 150, 54);">
                <div id="63" class="prob">63</div>
        
        </td>
        </tr>
        
        <tr>
            <!-- <th scope="row"></th> -->
            <!-- <td></td> -->
            
            <td  >
                <div class="prob" id="12">12</div></td>

            </td>
            <td  >
                <div class="prob" id="11">11</div></td>

            </td>
            <td  style="background-color: rgb(54, 150, 54);" style="font-size:25px;">
            <div class="prob" id="10">*</div></td>
        
        </td>
            <td >
                <div class="prob" id="9">09</div></td>

            </td>
            <td >
                <div class="prob" id="8">08</div></td>

            </td>
            <td >
                <div class="prob" id="7">07</div></td>

            </td>
            
        </tr>
        
    </table>
    <!-- } -->
    <table id="p1" class="homeuser">
        <tr>
            <td id="r1" style="background-color: red;">
            <!-- <div id="homered" style="margin: auto; height: 50px;width:40px;background-image: url('red1.jpeg');background-size: cover;border: 5px solid black;"></div></td> -->
            <td id="r2" style="background-color: red;">
            <!-- <div id="homered" style="margin: auto; height: 50px;width:40px;background-image: url('red2.jpeg');background-size: cover;border: 5px solid black;"></div></td> -->
        <!--  -->
        </tr>
        <tr >
            <td id="r3" style="background-color: red;">
            </td>
            <td id="r4" style="background-color: red;">
            <!-- <div id="homered" style="margin: auto; height: 50px;width:40px;background-image: url('red4.jpeg');background-size: cover;border: 5px solid black;"></div> -->
        </td> 

        </tr>
        
    </table>
    <div style="display: grid;grid-template-columns: 5fr ; height: 340px;" class="user">
        <div id="username">
         <input type="text" id="n1" disabled placeholder="NO USER">

         <!-- <input type="text" id="chat">
         <button>send</button> -->
         <!-- <input type="text" id="c1">
     <button onclick="sendm(1)">send</button> -->
    
         <br>
         <!-- <button>leave</button>
         <button>resque</button>
         <button>hello</button>
         <button>jaiho</button> -->
         <!-- <strong>your dun</strong> -->
         <div class="dund"><strong >player 1</strong></div>
         
         <br>
            <span  class="sho2"><strong>1: </strong> <span id="ur1">0</span></span>
            <span  class="sho2"><strong>2: </strong> <span id="ur2">0</span></span>
            <span  class="sho2"><strong>3: </strong> <span id="ur3">0</span></span>
            <span  class="sho2"><strong>4: </strong> <span id="ur4">0</span></span>
            <span  class="sho2"><strong>5: </strong> <span id="ur5">0</span></span>
            <span  class="sho2"><strong>6: </strong> <span id="ur6">0</span></span>
            <!-- <br> -->
            <!-- <strong>you cut</strong> -->
         <div class="dund"><strong >you cut</strong></div>

            <!-- <br> -->
            <div class="totalyourcut">

            <span><strong> </strong> <span class="ycut" id="urcuty">0</span></span>
            <span><strong> </strong> <span class="bcut" id="urcutb">0</span></span>
            <span><strong></strong> <span class="gcut" id="urcutg">0</span></span>
            <!-- <br> -->
      </div>
            <!-- <strong>others cut you </strong>
         -->
         <div class="dund"><strong >others cut</strong></div>

            <!-- <br> -->
            <div class="totalyourcut">

            <span><strong> </strong> <span class="ycut"  id="urcutby">0</span></span>
            <span><strong> </strong> <span class="bcut" id="urcutbb">0</span></span>
            <span><strong></strong> <span class="gcut" id="urcutbg">0</span></span>
            <!-- <br> -->
      </div>

            
        </div>
        <!-- <div id="userpicture">
            <img src="" alt="hello">
        </div> -->
     </div>
    
    
   </div>
   <!-- { -->
    <div id="mid">
        <div id="chatshow" style="height: 290px;width:200px;border: 2px solid grey;overflow-x: scroll;padding:10px;background-image:linear-gradient(black,rgb(50,205,50));">
            <div id="showchat" style=""></div>
            
        </div> 
        <table>
        <!-- <caption>Alien football stars</caption> -->
        <tr>
            <td >
                <div class="prob" id="25">25</div></td>

            </td>
            <td >
                <div class="prob" id="26">26</div></td>

            </td>
            <td >
                <div class="prob" id="27">27</div></td>

            </td>

            
        <tr>
            <td >
            <div class="prob" id="24">24</div></td>
                
            </td>
            <td style="background-color: rgb(55, 155, 223);" >
            <div class="prob" id="65">65</div></td>
        </td>
            <!-- <td id="28" style="background-color: rgb(55, 155, 223);">28</td> -->
            <td style="background-color: rgb(55, 155, 223);" >
            <div class="prob" id="28">28</div></td>
        </td>
        </tr>
        <tr>
            <td style="background-color: rgb(55, 155, 223);">
            <!-- <div style="position: fixed;font-size: 70px; margin-top: -20px;" >*</div>  -->
            <div class="prob" id="23">23</div></td>

            </td>
            <td style="background-color: rgb(55, 155, 223);" >
            <div class="prob" id="66">66</div></td>


            </td>
            <!-- <td id="29">29</td> -->
            <td >
            <div class="prob" id="29">29</div></td>
                
            </td>
            

        </tr>
        <tr>
            <!-- <td id="22">22</td> -->
            <td >
            <div class="prob" id="22">22</div></td>
                
            </td>
            
            <!-- <td style="background-color: rgb(55, 155, 223);"></td> -->
            <td style="background-color: rgb(55, 155, 223);" >
            <div class="prob" id="67">67</div></td>
        </td>

            <!-- <td id="30">30</td> -->
            <td >
            <div class="prob" id="30">30</div></td>
                
            </td>
            
        </tr>
        <tr>
            <!-- <td id="21">21</td> -->
            <td >
            <div class="prob" id="21">21</div></td>
                
            </td>
            
            <!-- <td style="background-color: rgb(55, 155, 223);"></td> -->
            <td style="background-color: rgb(55, 155, 223);" >
            <div class="prob" id="68">68</div></td>
        </td>

            <!-- <td id="31">31</td> -->
            <td >
            <div class="prob" id="31">31</div></td>
                
            </td>
            
        </tr>
        <tr style="height: 60px;">
            <!-- <td id="20">20</td> -->
            <td >
            <div class="prob" id="20">20</div></td>
                
            </td>
            
            <!-- <td style="background-color: rgb(55, 155, 223);"></td> -->
            <td style="background-color: rgb(55, 155, 223);" >
            <div class="prob" id="69">69</div></td>
        </td>

            <!-- <td id="32">32</td> -->
            <td >
            <div class="prob" id="32">32</div></td>
                
            </td>
            
        </tr>
        
    </table>
    <!-- <table class="homeuser1" style="margin-top: 0px;">
        <tr>
            <td style=" height: 55px;transform: rotate(45deg)"></td>
            <td style=" height: 55px;transform: rotate(45deg)"></td>
        
        </tr>

        <tr   >
            <td style="height: 56px;" ></td>
            <td style=" height: 56px; border-style: 45degree;"></td>

        </tr>
        
        
    </table>
    -->
    <div style="height:155px">
            <div   style="height:40px;display:grid;grid-template-columns: 1fr 4fr 1fr">
            <div style="height:10px;background-image:url('greenarrow.png');background-size:100% 100%"></div>
            <div style="height:40px;display:grid;grid-template-columns: 1fr 1fr 1fr 1fr">
            
            <div style="height:40px ;background-color: rgb(55, 155, 223);"id="hb1">b1</div>
            <div style="height:40px ;background-color: rgb(55, 155, 223);"id="hb2">b2</div>
            <div style="height:40px ;background-color: rgb(55, 155, 223);"id="hb3">b3</div>
            <div style="height:40px ;background-color: rgb(55, 155, 223);"id="hb4">b4</div>
                    
            </div>
            <div style="height:40px;background-image:url('bluearrow.png');background-size:100% 50%;background-repeat: no-repeat;"></div>

        </div>
    <div  style="height:75px ;display:grid;grid-template-columns: 1fr 4fr 1fr">
    
    <div style="height:115px ;width:30px;display:grid;grid-template-rows: 1fr 1fr 1fr 1fr;margin-top:-20px">

            <div style="width:30px;background-color: rgb(54, 150, 54);"id="hg1">g1</div>
            <div style="width:30px;background-color: rgb(54, 150, 54);"id="hg2">g2</div>
            <div style="width:30px;background-color: rgb(54, 150, 54);"id="hg3">g3</div>
            <div style="width:30px;background-color: rgb(54, 150, 54);"id="hg4">g4</div>
            

    </div>
    <div style="height:75px ;margin:auto; margin-top:15px">
            <div style="height:40px ;width:40px;margin:auto">
                    <div id="btn1">
                        <button id="btn0" class="btnn" onclick="dan()" style="height: 35px;width: 35px;border: 2px solid black; color:white" >DICE</button>
                </div>

            </div>
 </div>
    <!-- <div style="height:85px ;width:30px; display:grid;grid-template-rows: 1fr 1fr 1fr 1fr"> -->
    <div style="height:115px ;width:30px;display:grid;grid-template-rows: 1fr 1fr 1fr 1fr;margin-top:-20px">

            <div style="width:30px;background-color: yellow;"id="hy1">y1</div>
            <div style="width:30px;background-color: yellow;"id="hy2">y2</div>
            <div style="width:30px;background-color: yellow;"id="hy3">y3</div>
            <div style="width:30px;background-color: yellow;"id="hy4">y4</div>
           
    </div>

    </div>
    <div   style="height:40px;display:grid;grid-template-columns: 1fr 4fr 1fr">
            <div style="height:10px;background-image:url('redarrow.jpg');background-size:110% 160%;margin-top:25px"></div>
           
    <div  style="height:40px ;display:grid;grid-template-columns: 1fr 1fr 1fr 1fr">
            <div style="height:40px;background-color: red;"id="hr1">r1</div>
            <div style="height:40px;background-color: red;"id="hr2">r2</div>
            <div style="height:40px;background-color: red;"id="hr3">r3</div>
            <div style="height:40px;background-color: red;"id="hr4">r4</div>
           
            <div>
                
                </div>
            </div>
            <div style="height:40px;background-image:url('yellowarrow.png');background-size:110% 100%;"></div>

    <!-- <div></div> -->
    <!-- <div></div> -->
</div>
    </div>
    <table>
        <!-- <caption>Alien football stars</caption> -->
        <tr>
            <td >
            <div class="prob" id="6">06</div>

            </td>
            <!-- <td style="background-color: red;"></td> -->
            <td style="background-color: red;">
        
            <div class="prob" id="57">57</div>
        </td>

            <td >
            <div class="prob" id="46">46</div>

            </td>

            
        <tr>
            <td >
            <div class="prob" id="5">05</div>

            </td>
            <!-- <td style="background-color: red;"></td> -->
            <td style="background-color: red;">
        
            <div class="prob" id="56">56</div>
        </td>

            <td >
            <div class="prob" id="47">47</div>

            </td>
        </tr>
        <tr>
            <td >
            <div class="prob" id="4">04</div>

            </td>
            <!-- <td style="background-color: red;"></td> -->
            <td style="background-color: red;">
            <div class="prob" id="55">55</div>

        </td>

            <td id="48">48</td>
        </tr>
        <tr>
            <td id="3">03</td>
            <!-- <td style="background-color: red;"></td> -->
            <td style="background-color: red;">
            <div class="prob" id="54">54</div>
        </td>
        </td>

            <td  style="background-color: red;" >
            <div class="prob" id="49">49</div></td>

            <!-- <div style="position: fixed;font-size: 70px; margin-top: -20px;" >*</div>  -->

            </td>
        </tr>
        <tr>
            <td  style="background-color: red;">
            <div class="prob" id="2">02</div>

            </td>
            <td  style="background-color: red;">
            <div class="prob" id="53">53</div></td>
        </td>
            <td >
            <div class="prob" id="50">50</div></td>

            </td>
        </tr>
      <tr style="height: 67px;">
          <td >
                <div class="prob" id="1">01</div></td>

          </td>
          <td >
                <div class="prob" id="52">52</div></td>

          </td>
          <td >
                <div class="prob" id="51">51</div></td>

          </td>
      </tr>
    </table>
    <div id="win" class="user" style="height: 340px;border: 2px solid grey;">
    <div class="chat">
        <div id="showdice">any message will appear here</div>

    </div>
    <div id="showcut" ></div>

        <div id="settings">
            <div class="dund">settings</div>
            <br>
            <button class="showbutton1" onclick="changeb()">change theme</button>
            <button class="showbutton1" onclick="playm()">play bg music</button>
            <br>
            <br>
        <button class="showbutton1" id="seechat" >autoscroll chat- <span>off</span></button>
        <button class="showbutton1" onclick="endgame()">End Game</button>


        </div>
        <!-- <strong>win position:</strong> -->

            <div class="dund">win position</div>
            <div id="showin" style="height:80px;width:180px;margin:auto;background-color:gold;margin-top:5px;border-radius:10px;box-shadow:-3px -3px red;padding:10px">

            </div>
        
        <!-- <input type="text" id="num"> -->


       
    </div>
   
   </div>
<!-- } -->
   
    <div id="right">
        <div style="display: grid;grid-template-columns: 5fr; height: 310px;" class="user">
            <div id="username">
             <!-- <input type="text" id="c3">
     <button onclick="sendm(3)">send</button>
     -->
             <!-- <button>send</button> -->
             <!-- <br> -->
             <!-- <button>leave</button>
             <button>resque</button>
             <button>hello</button>
             <button>jaiho</button> -->
             <!-- <strong>your dun</strong> -->
         <div class="dund"><strong >player 3</strong></div>

         <br>
            <span class="sho2"><strong>1: </strong> <span id="ub1">0</span></span>
            <span class="sho2"><strong>2: </strong> <span id="ub2">0</span></span>
            <span class="sho2"><strong>3: </strong> <span id="ub3">0</span></span>
            <span class="sho2"><strong>4: </strong> <span id="ub4">0</span></span>
            <span class="sho2"><strong>5: </strong> <span id="ub5">0</span></span>
            <span class="sho2"><strong>6: </strong> <span id="ub6">0</span></span>
            <!-- <br> -->
            <!-- <strong>you cut</strong> -->
         <div class="dund"><strong >your cut</strong></div>

            <!-- <br> -->
            <div class="totalyourcut">

            <span><strong> </strong> <span class="ycut" id="ubcuty">0</span></span>
            <span><strong></strong> <span class="rcut" id="ubcutr">0</span></span>
            <span><strong></strong> <span class="gcut" id="ubcutg">0</span></span>
            <!-- <br> -->
   </div>   
            <!-- <strong>others cut you </strong> -->
         <div class="dund"><strong >others cut</strong></div>

            <!-- <br> -->
            <div class="totalyourcut">

            <span><strong> </strong> <span class="ycut" id="ubcutby">0</span></span>
            <span><strong></strong> <span class="rcut" id="ubcutbr">0</span></span>
            <span><strong></strong> <span class="gcut" id="ubcutbg">0</span></span>
            <!-- <br> -->
        </div>
        <br>
            <!-- <input type="text" id="chat"> -->
            <input type="text" id="n3" placeholder="your name shows here">
         
            </div>
            <!-- <div id="userpicture">
                <img src="" alt="hello">
            </div> -->
         </div>
 <!-- { -->

         <table class="homeuser">
        <tr>
            <td id="b1" style="background-color: rgb(55, 155, 223);"></td>
            <td id="b2" style="background-color: rgb(55, 155, 223);"></td>
        
        </tr>
        <tr >
            <td id="b3" style="background-color: rgb(55, 155, 223);"></td>
            <td id="b4" style="background-color: rgb(55, 155, 223);"></td>

        </tr>
        
    </table>
     <table  style="margin: auto;">
    <!-- <caption>Alien football stars</caption> -->
    <tr>
        <td >
                <div class="prob" id="33">33</div></td>

        </td>
        <td >
                <div class="prob" id="34">34</div></td>

        </td>
        <td >
                <div class="prob" id="35">35</div></td>

        </td>
        <td  style="background-color: yellow;" >
                <div class="prob"id="36">36</div></td>
                        <!-- <div style="position: fixed;font-size: 70px; margin-top: -20px;" >*</div>  -->
  </td
        >
        <td >
                <div class="prob" id="37">37</div></td>

        </td>
        <td >
                <div class="prob" id="38">38</3v></td>

        </td>
    </tr>
    <tr>
        <td style="background-color: yellow;">
        <div class="prob" id="75">75</div></td>
    </td>
        <td style="background-color: yellow;">
        <div class="prob" id="74">74</div></td>
    </td>
        <td style="background-color: yellow;">
        <div class="prob" id="73">73</div></td>
    </td>
        <td style="background-color: yellow;">
        <div class="prob" id="72">72</div></td>
    </td>
        <td style="background-color: yellow;">
        <div class="prob" id="71">71</div></td>
    </td>
        <td >
        <div class="prob" id="39">39</div></td>

        </td>
    </tr>
    
    <tr>
        <!-- <th scope="row"></th> -->
        <td >
                <div class="prob" id="45">45</div></td>

        </td>
        <td >
                <div class="prob" id="44">44</div></td>

        </td>
        <td >
                <div class="prob" id="43">43</div></td>

        </td>
        <td  >
                <div class="prob" id="42">42</div></td>

        </td>
        <td  style="background-color: yellow;">
        <div class="prob" id="41">41</div></td>
    
    </td>
        <td >
                <div class="prob" id="40">40</div></td>

        </td>
    </tr>
    
</table>
<table id="p1" class="homeuser">
    <tr>
        <td  id="y1"   style="background-color: yellow;"></td>
        <td  id="y2" style="background-color: yellow;"></td>
    
    </tr>
    <tr >
        <td id="y3"  style="background-color: yellow;"></td>
        <td  id="y4" style="background-color: yellow;"></td>

    </tr>
    
</table>
 <!-- }         -->

<div style="display: grid;grid-template-columns: 5fr ; height: 340px;" class="user">
    <div id="username">
     <input type="text" id="n4" disabled placeholder="No User">

     <!-- <input type="text" id="c4">
     <button onclick="sendm(4)">send</button> -->
     <!-- <br> -->
     <!-- <button>leave</button>
     <button>resque</button>
     <button>hello</button>
      <button onclick="dan()">jaiho</button>
   <button onclick="gbshow1()" >kocxvbnm,ire</button> -->
   <!-- <strong>your dun</strong> -->
   <div class="dund"><strong >player 4</strong></div>

         <br>
            <span class="sho2"><strong>1: </strong> <span id="uy1">0</span></span>
            <span class="sho2"><strong>2: </strong> <span id="uy2">0</span></span>
            <span class="sho2"><strong>3: </strong> <span id="uy3">0</span></span>
            <span class="sho2"><strong>4: </strong> <span id="uy4">0</span></span>
            <span class="sho2"><strong>5: </strong> <span id="uy5">0</span></span>
            <span class="sho2"><strong>6: </strong> <span id="uy6">0</span></span>
            <br>
            <!-- <strong>you cut</strong> -->
         <div class="dund"><strong >your cut</strong></div>

            <!-- <br> -->
            <div class="totalyourcut">

            <span><strong> </strong> <span class="bcut" id="uycutb">0</span></span>
            <span><strong></strong> <span class="rcut" id="uycutr">0</span></span>
            <span><strong></strong> <span class="gcut" id="uycutg">0</span></span>
            <!-- <br> -->
            <!-- <strong>others cut you </strong> -->
        </div>
         <div class="dund"><strong >others cut</strong></div>

            <!-- <br> -->
            <div class="totalyourcut">

            <span><strong> </strong> <span class="bcut" id="uycutbb">0</span></span>
            <span><strong></strong> <span class="rcut" id="uycutbr">0</span></span>
            <span><strong></strong> <span class="gcut" id="uycutbg">0</span></span>
            <br>
 </div>

    </div>
    <!-- <div id="userpicture">
        <img src="" alt="hello">
    </div> -->
 </div>


   </div>
   </div> 
    

   <div style="display:none" id="showproblem">
</div> 
<div  id="showproblem1">

   
   </div>



   <div id="76">
   </div>
   <div id="70"></div>
   <div id="64"></div>
   <div id="58"></div>

</body>
</html>
<?php
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
        $conn->close();
// return $ghor;

?>
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

$sql = "SELECT *  FROM ludoghor WHERE id=1";
// $sql = "UPDATE  grpchatseen SET seen=1    where toid='$fromid' AND grpid='$grpid'";
// $sql = "UPDATE  messages SET seento=1      where  grpid='$grpid' AND ";





$result = $conn->query($sql);

    $kardun;
    $dun;
    $fel;


    


        if ($result->num_rows > 0) {
            while($row = $result->fetch_assoc()) {

                // $temp=..?;
                $kardun=$row["kardun"];
                $dun=$row["dun"];
                $fel=$row["fel"];

            }

        }




        $sql1 = "SELECT *  FROM stat WHERE id=1";
$result1 = $conn->query($sql1);

// $temp1;
$dunusers= array();
// $dunusers1= array();

if ($result->num_rows > 0) {
    while($row = $result1->fetch_assoc()) {
        
        // $dunusers[1]=$row["g1"];
        // $dunusers[2]=$row["g2"];
        // $dunusers[3]=$row["g3"];
        // $dunusers[4]=$row["g4"];
        // $dunusers[5]=$row["g5"];
        // $dunusers[6]=$row["g6"];
        // $dunusers[7]=$row["gcuty"];
        // $dunusers[8]=$row["gcutb"];
        // $dunusers[9]=$row["gcutr"];
        // $dunusers[10]=$row["gcutbb"];
        // $dunusers[11]=$row["gcutby"];
        // $dunusers[12]=$row["gcutbr"];
        // $dunusers[13]=$row["r1"];
        // $dunusers[14]=$row["r2"];
        // $dunusers[15]=$row["r3"];
        // $dunusers[16]=$row["r4"];
        // $dunusers[17]=$row["r5"];
        // $dunusers[18]=$row["r6"];
        // $dunusers[19]=$row["rcutb"];
        // $dunusers[20]=$row["rcutg"];
        // $dunusers[21]=$row["rcuty"];
        // $dunusers[22]=$row["rcutbb"];
        // $dunusers[23]=$row["rcutbg"];
        // $dunusers[24]=$row["rcutby"];
        // $dunusers[25]=$row["b1"];
        // $dunusers[26]=$row["b2"];
        // $dunusers[27]=$row["b3"];
        // $dunusers[28]=$row["b5"];
        // $dunusers[29]=$row["b6"];
        // $dunusers[30]=$row["bcutg"];
        // $dunusers[31]=$row["bcutr"];
        // $dunusers[32]=$row["bcuty"];
        // $dunusers[33]=$row["bcutby"];
        // $dunusers[34]=$row["bcutbg"];
        // $dunusers[35]=$row["bcutbr"];
        // $dunusers[36]=$row["y1"];
        // $dunusers[37]=$row["y2"];
        // $dunusers[38]=$row["y3"];
        // $dunusers[39]=$row["y4"];
        // $dunusers[40]=$row["y5"];
        // $dunusers[41]=$row["y6"];
        // $dunusers[42]=$row["ycutb"];
        // $dunusers[43]=$row["ycutr"];
        // $dunusers[44]=$row["ycutg"];
        // $dunusers[45]=$row["ycutbb"];
        // $dunusers[46]=$row["ycutbg"];
        // $dunusers[47]=$row["ycutbr"];
        // $dunusers[48]=$row["b4"];
        // $dunusers[0]=0;

    }
}

    //    echo $temp; 
$conn->close();


?>
<!-- ?> -->
<script>
    function playm(){
        var mySound = new Audio('bgmusic.mp3');
 mySound.play();

    }
    // window.load(){

// window.onload = function(){
// playm();
// setTimeout(playm, 2000);

    // }
    // playm();
    var dunusers={};
    var arrpos;
    var arrnam;
    function aray(){

    
     arrpos=<?php echo json_encode($temp); ?>;
     arrnam=<?php echo json_encode($temp1); ?>;
    }
    aray();
// setInterval(aray, 500);

    // var dunusers=<?php echo json_encode($dunusers); ?>;


    var id=<?php echo $kardun; ?>;
    var dun=<?php echo $dun; ?>;
    var fel=<?php echo $fel; ?>;
    
    var userid=1;
    document.getElementById("showinput").innerHTML='<input type="text" placeholder="Type Your Message Here" class="inp" id="c'+userid+'"><button class="showbutton1" onclick="sendm('+userid+')">send</button> ';
    
    
    var pathobj = {};
for (var i = 1; i <= 76; i++) {
    pathobj[i] = {
        v: 0,
        arg: []
    };
}


var dunusers1=[];
dunusers1[1]="g1";
dunusers1[2]="g2";
dunusers1[3]="g3";
dunusers1[4]="g4";
dunusers1[5]="g5";
dunusers1[6]="g6";
dunusers1[7]="gcuty";
dunusers1[8]="gcutb";
dunusers1[9]="gcutr";
dunusers1[10]="gcutbb";
dunusers1[11]="gcutby";
dunusers1[12]="gcutbr";
dunusers1[13]="r1";
dunusers1[14]="r2";
dunusers1[15]="r3";
dunusers1[16]="r4";
dunusers1[17]="r5";
dunusers1[18]="r6";
dunusers1[19]="rcutb";
dunusers1[20]="rcutg";
dunusers1[21]="rcuty";
dunusers1[22]="rcutbb";
dunusers1[23]="rcutbg";
dunusers1[24]="rcutby";
dunusers1[25]="b1";
dunusers1[26]="b2";
dunusers1[27]="b3";
dunusers1[28]="b5";
dunusers1[29]="b6";
dunusers1[30]="bcutg";
dunusers1[31]="bcutr";
dunusers1[32]="bcuty";
dunusers1[33]="bcutby";
dunusers1[34]="bcutbg";
dunusers1[35]="bcutbr";
dunusers1[36]="y1";
dunusers1[37]="y2";
dunusers1[38]="y3";
dunusers1[39]="y4";
dunusers1[40]="y5";
dunusers1[41]="y6";
dunusers1[42]="ycutb";
dunusers1[43]="ycutr";
dunusers1[44]="ycutg";
dunusers1[45]="ycutbb";
dunusers1[46]="ycutbg";
dunusers1[47]="ycutbr";
dunusers1[48]="b4";
// console.log(dunusers1)
for (var i = 1; i <= 76; i++) {
        if (i != 64 && i != 76 && i != 70 && i != 58) {

            document.getElementById(i).innerHTML = "";
        }
        pathobj[i].v = 0;
        pathobj[i].arg = [];

        // document.getElementById(i).style.display="block";

    }
    document.getElementById("r1").innerHTML = "";
    document.getElementById("r2").innerHTML = "";
    document.getElementById("r3").innerHTML = "";
    document.getElementById("r4").innerHTML = "";
    document.getElementById("g1").innerHTML = "";
    document.getElementById("g2").innerHTML = "";
    document.getElementById("g3").innerHTML = "";
    document.getElementById("g4").innerHTML = "";
    document.getElementById("b1").innerHTML = "";
    document.getElementById("b2").innerHTML = "";
    document.getElementById("b3").innerHTML = "";
    document.getElementById("b4").innerHTML = "";
    document.getElementById("y2").innerHTML = "";
    document.getElementById("y1").innerHTML = "";
    document.getElementById("y4").innerHTML = "";
    document.getElementById("y3").innerHTML = "";

    document.getElementById("hr1").innerHTML = "";
    document.getElementById("hr2").innerHTML = "";
    document.getElementById("hr3").innerHTML = "";
    document.getElementById("hr4").innerHTML = "";
    document.getElementById("hg1").innerHTML = "";
    document.getElementById("hg2").innerHTML = "";
    document.getElementById("hg3").innerHTML = "";
    document.getElementById("hg4").innerHTML = "";
    document.getElementById("hb1").innerHTML = "";
    document.getElementById("hb2").innerHTML = "";
    document.getElementById("hb3").innerHTML = "";
    document.getElementById("hb4").innerHTML = "";
    document.getElementById("hy2").innerHTML = "";
    document.getElementById("hy1").innerHTML = "";
    document.getElementById("hy4").innerHTML = "";
    document.getElementById("hy3").innerHTML = "";
    document.getElementById("showcut").innerHTML = "";
    // document.getElementById("showdice").innerHTML = "";
    // endgame();

    // $a= $_POST['noofuser'];
    <?php
    include("config.php");
$nouser=0;
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
                                        




$conn->close();
// echo "hi";

?>

var noofuser=<?php echo $nouser; ?>;
    function setpos() {
        if(noofuser==4){

        
        // alert(hi);
        for (var i = 1; i <= 16; i++) {

            p(i);
            // console.log(n);
            // h(i,n);
        }
        // alert(id)
        // createmainarr();
    //  dunusers=<?php echo json_encode($dunusers); ?>;
    //  console.log(dunusers);
    setstatuser(); 
    }
    else if(noofuser==3){
        for (var i = 1; i <= 12; i++) {

p(i);
// console.log(n);
// h(i,n);
}
// alert(id)
// createmainarr();
//  dunusers=<?php echo json_encode($dunusers); ?>;
//  console.log(dunusers);
setstatuser();  
    }
    else if(noofuser==2){
        for (var i = 1; i <= 8; i++) {

p(i);
// console.log(n);
// h(i,n);
}
// alert(id)
// createmainarr();
//  dunusers=<?php echo json_encode($dunusers); ?>;
//  console.log(dunusers);
setstatuser();  
    }

    }
    // setInterval(setstatuser,500);

    function setstatuser(){
        $.ajax({
            type: "POST",
            url: "getstat.php",
            // data: { },

            success: function (result, status, xhr) {
                // $("#showproblem").html(result);
                // alert(result);
                // sala();
                dunusers=result;
                dunusers=JSON.parse(dunusers);
                // console.log(dunusers[3]);


                dhur();
                // h(i, a2, a1);/
                //  alert(n);
                
                //  document.getElementById(i).innerHTML=result;
            }
        });
    
}

function dhur(){
    for(var k=1;k<=48;k++){
        var posnew="u"+dunusers1[k];
        // console.log(dunusers);
        document.getElementById(posnew).innerHTML=parseInt(dunusers[k]);
    }
}

    // console.log(arrposu);

    // setpos();
    // document.getElementById('btn1').style.backgroundColor = 'Red';

    function p(i) {
        // $.ajax({
        //     type: "POST",
        //     url: "namefind.php",
        //     data: {ghuti:i},

        //     success: function (result, status, xhr){
        //         // $("#showproblem").html(result);
        //         // alert(result);
        //         // sala();
        //         nae=result;
        //         //  alert(n);
        //         // console.log(n);
        //         //  document.getElementById(i).innerHTML=result;
        //         // h(i,n);
        //     }
        // });

        $.ajax({
            type: "POST",
            url: "posfind.php",
            data: { ghuti: i },

            success: function (result, status, xhr) {
                // $("#showproblem").html(result);
                // alert(result);
                // sala();
                n = result;
                var a1 = n.substring(n.length - 2);
                var a2 = n.slice(0, -2);
                // arrposu.push(i);

                // namefind(i);
                // if(i==1){
                //     exa1=g;
                // }
                // else if(i==2){
                //     exa2=g;
                // }
                // else if(i==3){
                //     exa3=g;
                // }
                // else if(i==4){
                //     exa4=g;
                // }
                // else if(i==5){
                //     exa5=g;
                // }
                // else if(i==6){
                //     exa6=g;
                // }
                // else if(i==7){
                //     exa7=g;
                // }
                // else if(i==8){
                //     exa8=g;
                // }
                // else if(i==9){
                //     exa9=g;
                // }
                // else if(i==10){
                //     exa10=g;
                // }
                // else if(i==11){
                //     exa11=g;
                // }
                // else if(i==12){
                //     exa12=g;
                // }
                // else if(i==13){
                //     exa13=g;
                // }
                // else if(i==14){
                //     exa14=g;
                // }
                // else if(i==15){
                //     exa15=g;
                // }
                // else if(i==16){
                //     exa16=g;
                // }
               
                // arrpos.push(a2);


                h(i, a2, a1);
                //  alert(n);
                
                //  document.getElementById(i).innerHTML=result;
            }
        });
    }
    var nae, exa1, exa2, exa3, exa4, exa5, exa10, exa9, exa8, exa7, exa6, exa11, exa12, exa13, exa14, exa15, exa16;
    function h(i, g, a1a) {
        $.ajax({
            type: "POST",
            url: "pos.php",
            data: { ghuti: i },

            success: function (result, status, xhr) {
                // $("#showproblem").html(result);
                // alert(result);
                // sala();
                //  n=result;
                // alert(g);
                // console.log(g);
                // alert(i);
                // createproarr(i,g,a1a);
                // setTimeout(function() {
                // alert(g);
                // var pro="exa"+i;
                // pro=g;
                // eval('var ' + "exa" + i + '= ' + g + ';');
                // for(var j=1;j<=16;j++){
                //     if(i==j){
                //         arrpos[i]=g;
                //     }
                // }
                // console.log(arrpos[i][0]);
                // console.log(  eval('var ' + "exa" + i + '= ' + g + ';') );
                // // alert()
                //   }, 500);/
                // break;
                // console.log(g);

                // arrpos.push(g);
                // arrnam[i] = a1a;
                if (g[0] != 'r' && g[0] != 'b' && g[0] != 'g' && g[0] != 'y' && g[0] != 'h') {

                    document.getElementById(g).style.width = "auto";

                    if ((g >= 20 && g <= 32) || (g >= 46 && g <= 57) || (g >= 1 && g <= 6) || (g >= 65 && g <= 69)) {

                        document.getElementById(g).style.display = "flex";
                        // grid-auto-flow: column;

                        document.getElementById(g).innerHTML += result;
                        pathobj[g].v++;
                        //  var pr=pathobj[g].v;
                        //  pathobj[g].arg[pr-1]=(nae);
                        pathobj[g].arg.push(a1a);

                    }
                    else {
                        document.getElementById(g).style.display = "flex";

                        pathobj[g].v++;
                        pathobj[g].arg.push(a1a);

                        // document.getElementById(g).style.display="inline-block";
                        // document.getElementById(g).style.gridTemplateRows = "auto auto";
                        document.getElementById(g).style.transform = "rotate(270deg)";
                        document.getElementById(g).innerHTML += result;

                    }
                    // nae="";
                }

                else {
                    document.getElementById(g).innerHTML += result;

                }
            }
        });
        // alert(arrpos.length);

    };
    // function createproarr(i,g,a1a){
    //     // alert(g);
    //     proarr[i].ap=g;
    //     proarr[i].an=a1a;

    //     // alert(arrnam[i]);

    // }

    
// }
setpos();


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
                // console.log(userlist);
                // alert(result);
                showname();

                // sala();
                // h(i, a2, a1);/
                //  alert(n);
                
                //  document.getElementById(i).innerHTML=result;
            }
        });
    }

check();
function showname(){
    for(var i=0;i<userlist.length;i++){
        var showid="n"+parseInt(userlist[i][0]);
        document.getElementById(showid).disabled=true;
        // console.log(userlist[i].substring(1));
        document.getElementById(showid).value=userlist[i].substring(1);

        
    }
}
function sendm(a){
    var chatname=document.getElementById("n"+a).value;
    var chatbody=document.getElementById("c"+a).value;
    chatbody=chatbody.trim();
    // alert(chatbody);
    if(chatbody!=""){

    
    document.getElementById("c"+a).value="";
// console.log(chatname,chatbody);
    $.ajax({
            type: "POST",
            url: "sendmessage.php",
            data: {name:chatname,body:chatbody },

            success: function (result, status, xhr) {
                $("#showproblem1").html(result);
                // userlist=result;
                // userlist=JSON.parse(userlist);
                // console.log(userlist);
                // // alert(result);
                // showname();

                // sala();
                // h(i, a2, a1);/
                //  alert(n);
                
                //  document.getElementById(i).innerHTML=result;
            }
        });
    }
}



//     window.onload = function(){
// var script = document.createElement("script");
//   script.src = "ludonew0.js";
//   document.body.appendChild(script);
// };
window.onload = function(){
    // playm();
    // console.log(arrpos);
    // console.log(arrnam);

    
var script = document.createElement("script");
  script.src = "ludonew0.js";
  document.body.appendChild(script);
  
};


</script>






