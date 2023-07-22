var n, result;
var selectdun, selectkardun, selectfel;

// console.log(arrnew)
// console.log(pathobj);

// var proarr={};
// function createmainarr() {

// for(var i=1;i<=16;i++){
//     if(i==1){
//         arrpos[i]=exa1;
//     }
//     else if(i==2){
//         arrpos[i]=exa2;
//     }
//     else if(i==3){
//         arrpos[i]=exa3;
//     }
//     else if(i==4){
//         arrpos[i]=exa4;
//     }
//     else if(i==5){
//         arrpos[i]=exa5;
//     }
//     else if(i==6){
//         arrpos[i]=exa6;
//     }
//     else if(i==7){
//         arrpos[i]=exa7;
//     }
//     else if(i==8){
//         arrpos[i]=exa8;
//     }
//     else if(i==9){
//         arrpos[i]=exa9;
//     }
//     else if(i==10){
//         arrpos[i]=exa10;
//     }
//     else if(i==11){
//         arrpos[i]=exa11;
//     }
//     else if(i==12){
//         arrpos[i]=exa12;
//     }
//     else if(i==13){
//         arrpos[i]=exa13;
//     }
//     else if(i==14){
//         arrpos[i]=exa14;
//     }
//     else if(i==15){
//         arrpos[i]=exa15;
//     }
//     else if(i==16){
//         arrpos[i]=exa16;
//     }

// }
// }// alert(exa4);

// function createmainarr(){

// for (var i = 1; i <= 16; i++) {
//     // alert(exa4);
//     var gg="exa"+i;
//     // arrpos[i]=eval(gg);/
// }
// }
// // createmainarr();
// function anim(b,dun){
//     b=parseInt(b);
//     for(var i=b;i<=b+dun;i++){

//         setTimeout(showanim, 500);
//     }
// }
// function showanim(){
//     document.getElementById()
// }
var clast = 0;
function checkfinal(a) {
  clast = 0;
  // alert(a);
  // console.log(arrpos, "clast");

  // console.log(a, clast);
  if (a == "r") {
    for (var i = 1; i <= 4; i++) {
      if (arrpos[i][0] == "h") {
        clast++;
      }
    }
  } else if (a == "g") {
    for (var i = 9; i <= 12; i++) {
      if (arrpos[i][0] == "h") {
        clast++;
      }
    }
  } else if (a == "b") {
    for (var i = 5; i <= 8; i++) {
      if (arrpos[i][0] == "h") {
        clast++;
      }
    }
  } else if (a == "y") {
    for (var i = 13; i <= 16; i++) {
      if (arrpos[i][0] == "h") {
        clast++;
      }
    }
  }
  // console.log(a, clast);

  if (clast == 3) {
    if (a == "r") {
      techno = 1;
    } else if (a == "g") {
      techno = 2;
    } else if (a == "b") {
      techno = 3;
    } else if (a == "y") {
      techno = 4;
    }

    return 1;
  } else {
    return 0;
  }
}
var techno;
var mysound;
function ghuti(a, b) {
    // location.reload();//////////
  // alert(b);
  // a nam b position
  // anim(b,dun);
  cutid = 0;
  // alert(dun);
  if ((b[0] == "r" || b[0] == "b" || b[0] == "g" || b[0] == "y") && sid == 1) {
    // alert("first");
    //  mysound=
    mySound = new Audio("ghutiberono.mp3");
    mySound.play();
    if (b[0] == "r") {
      $.ajax({
        type: "POST",
        url: "dan.php",
        data: { dan: 2, name: a },

        success: function (result, status, xhr) {
          // $("#showproblem1").html(result);

          cleardiv();
          setpos();
        },
      });
    } else if (b[0] == "b") {
      $.ajax({
        type: "POST",
        url: "dan.php",
        data: { dan: 28, name: a },

        success: function (result, status, xhr) {
          // $("#showproblem1").html(result);

          cleardiv();
          setpos();
        },
      });
    } else if (b[0] == "g") {
      $.ajax({
        type: "POST",
        url: "dan.php",
        data: { dan: 15, name: a },

        success: function (result, status, xhr) {
          // $("#showproblem1").html(result);

          cleardiv();
          setpos();
        },
      });
    } else if (b[0] == "y") {
      $.ajax({
        type: "POST",
        url: "dan.php",
        data: { dan: 41, name: a },

        success: function (result, status, xhr) {
          // $("#showproblem1").html(result);

          cleardiv();
          setpos();
        },
      });
    }
    setdun2();
  } else if (b[0] != "r" && b[0] != "b" && b[0] != "g" && b[0] != "y") {
    // alert("helloedd");
    b = parseInt(b);

    dun = parseInt(dun);
    newbie(dun, a, b);

    dun = dun + b;

    // if()
    // alert(dun);
    if (dun > 52 && dun < 59 && a[0] != "r") {
      dun = dun - 52;
    }

    dun1 = dun;
    if (
      (dun == 58 && a[0] == "r") ||
      (dun == 76 && a[0] == "y") ||
      (dun == 70 && a[0] == "b") ||
      (dun == 64 && a[0] == "g")
    ) {
      dun1 = "h" + a;
      // console.log(arrpos1);
      var nowlast = checkfinal(a[0]);
      // console.log(nowlast);

      if (nowlast == 0) {
        mySound = new Audio("ghutidhoka.mp3");
        mySound.play();
        // console.log(dun1);
        if (a[0] == "r") {
          id = 1;
        } else if (a[0] == "g") {
          id = 2;
        } else if (a[0] == "b") {
          id = 3;
        } else if (a[0] == "y") {
          id = 4;
        }

        colgh(id);
      } else {
        mySound = new Audio("win.mp3");
        mySound.play();
        var namewin = document.getElementById("n" + techno).value;
        $.ajax({
          type: "POST",
          url: "setwin.php",
          data: { name: namewin },

          success: function (result, status, xhr) {
            // $("#showproblem1").html(result);
            // cleardiv();
            // // cleardiv();
            // setpos();
          },
        });
      }
    }
    // alert(dun);

    // console.log(a, b);
    if (
      pathobj[dun].v == 1 &&
      pathobj[dun].arg[0][0] != a[0] &&
      dun != 58 &&
      dun != 76 &&
      dun != 64 &&
      dun != 70
    ) {
      // b=parseInt(b);
      if (
        dun == 10 ||
        dun == 2 ||
        dun == 23 ||
        dun == 15 ||
        dun == 28 ||
        dun == 36 ||
        dun == 41 ||
        dun == 49
      ) {
        // alert("2");
        mySound = new Audio("safe.mp3");
        mySound.play();
        $.ajax({
          type: "POST",
          url: "dan.php",
          data: { dan: dun1, name: a },

          success: function (result, status, xhr) {
            // $("#showproblem1").html(result);
            cleardiv();
            setpos();
          },
        });
        setdun2();
      } else {
        var alu = pathobj[dun].arg[0];
        mySound = new Audio("ghutikata.mp3");
        mySound.play();
        $.ajax({
          type: "POST",
          url: "setstatcut.php",
          data: { cut: alu, cutby: a },

          success: function (result, status, xhr) {
            // $("#showproblem1").html(result);
          },
        });

        // alert("hi");
        $.ajax({
          type: "POST",
          url: "dancut.php",
          data: { dan: dun1, cutname: alu },

          success: function (result, status, xhr) {
            // $("#showproblem1").html(result);
            cutid = 1;
            if (a[0] == "r") {
              id = 1;
            } else if (a[0] == "g") {
              id = 2;
            } else if (a[0] == "b") {
              id = 3;
            } else if (a[0] == "y") {
              id = 4;
            }

            colgh(id);
            setdun2();
          },
        });
        $.ajax({
          type: "POST",
          url: "dan.php",
          data: { dan: dun1, name: a },

          success: function (result, status, xhr) {
            // $("#showproblem1").html(result);
            cleardiv();
            setpos();
          },
        });

        // alert("a[0]");
      }
    } else if (pathobj[dun].v == 1 && pathobj[dun].arg[0][0] == a[0]) {
      // var alu=pathobj[dun].arg[0];
      // alert("2");
      if (
        dun == 10 ||
        dun == 2 ||
        dun == 23 ||
        dun == 15 ||
        dun == 28 ||
        dun == 36 ||
        dun == 41 ||
        dun == 49
      ) {
        // alert("2");
        mySound = new Audio("safe.mp3");
        mySound.play();
      } else {
        mySound = new Audio("ghutimove.mp3");
        mySound.play();
      }
      $.ajax({
        type: "POST",
        url: "dan.php",
        data: { dan: dun1, name: a },

        success: function (result, status, xhr) {
          // $("#showproblem1").html(result);
          cleardiv();
          setpos();
        },
      });
      setdun2();
    } else if (
      pathobj[dun].v > 1 &&
      dun != 10 &&
      dun != 2 &&
      dun != 23 &&
      dun != 15 &&
      dun != 28 &&
      dun != 36 &&
      dun != 41 &&
      dun != 49
    ) {
      var divv =
        '<div style="height:auto;display:grid;grid-template-columns: repeat(' +
        pathobj[dun].v +
        ', auto);">';
      var divv1 = "";
      for (var i = 0; i < pathobj[dun].v; i++) {
        if (a[0] != pathobj[dun].arg[i][0]) {
          kotaghuti.push(pathobj[dun].arg[i]);
        }
      }
      if (kotaghuti.length > 0) {
        for (var i = 0; i < pathobj[dun].v; i++) {
          // kotaghuti[i]=pathobj[dun].arg[i];
          if (kotaghuti[i][0] == "r") {
            divv1 +=
              '<div class="cr" onclick="cutmany(`' +
              kotaghuti[i] +
              "`,`" +
              a +
              '`)" style="height:50px; width:100%;background-size: cover;"></div>';
          } else if (kotaghuti[i][0] == "g") {
            divv1 +=
              '<div class="cg" onclick="cutmany(`' +
              kotaghuti[i] +
              "`,`" +
              a +
              '`)" style="height:50px; width:100%;background-size: cover;"></div>';
          } else if (kotaghuti[i][0] == "y") {
            divv1 +=
              '<div class="cy" onclick="cutmany(`' +
              kotaghuti[i] +
              "`,`" +
              a +
              '`)" style="height:50px; width:100%;background-size: cover;"></div>';
          } else if (kotaghuti[i][0] == "b") {
            divv1 +=
              '<div class="cb" onclick="cutmany(`' +
              kotaghuti[i] +
              "`,`" +
              a +
              '`)" style="height:50px; width:100%;background-size: cover;"></div>';
          }
        }
        document.getElementById("showcut").innerHTML = divv + divv1 + "</div>";
        // console.log(kotaghuti);
      } else {
        if (
          dun == 10 ||
          dun == 2 ||
          dun == 23 ||
          dun == 15 ||
          dun == 28 ||
          dun == 36 ||
          dun == 41 ||
          dun == 49
        ) {
          // alert("2");
          mySound = new Audio("safe.mp3");
          mySound.play();
        } else {
          mySound = new Audio("ghutimove.mp3");
          mySound.play();
        }
        $.ajax({
          type: "POST",
          url: "dan.php",
          data: { dan: dun1, name: a },

          success: function (result, status, xhr) {
            // $("#showproblem1").html(result);
            cleardiv();
            setpos();
          },
        });
      }
      setdun2();
    } else {
      // console.log("hello");
      // alert("hello");
      // if(dun1==)
      if (
        dun == 10 ||
        dun == 2 ||
        dun == 23 ||
        dun == 15 ||
        dun == 28 ||
        dun == 36 ||
        dun == 41 ||
        dun == 49
      ) {
        // alert("2");
        mySound = new Audio("safe.mp3");
        mySound.play();
      } else {
        mySound = new Audio("ghutimove.mp3");
        mySound.play();
      }
      $.ajax({
        type: "POST",
        url: "dan.php",
        data: { dan: dun1, name: a },

        success: function (result, status, xhr) {
          // $("#showproblem1").html(result);
          cleardiv();
          // cleardiv();
          setpos();
          setdun2();
        },
      });
      // pathobj[dun].v=1;
    }
  }
  checkwin();
  // createarray(id);
  sid = 0;
  dun = 0;
  // console.log(id);
  cutid = 0;
  autoi = 1;
  // document.getElementsByClassName("btnn").disabled=false;
  document.getElementById(ghname).disabled = false;

  // arrnam1=[];
  //         arrpos1=[];
}
var kotaghuti = [];
var sid = 0;
var dun;
function cutmany(alu, a) {
  // alert(alu);
  mySound = new Audio("ghutikata.mp3");
  mySound.play();
  $.ajax({
    type: "POST",
    url: "dancut.php",
    data: { dan: dun1, cutname: alu },

    success: function (result, status, xhr) {
      // $("#showproblem1").html(result);
      cutid = 1;
      if (a[0] == "r") {
        id = 1;
      } else if (a[0] == "g") {
        id = 2;
      } else if (a[0] == "b") {
        id = 3;
      } else if (a[0] == "y") {
        id = 4;
      }

      colgh(id);
      setdun2();
    },
  });
  $.ajax({
    type: "POST",
    url: "dan.php",
    data: { dan: dun1, name: a },

    success: function (result, status, xhr) {
      // $("#showproblem1").html(result);
      cleardiv();
      setpos();
    },
  });
}
var dun2;
function setdun1() {
  $.ajax({
    type: "POST",
    url: "setdan1.php",
    data: { setdun: dun2, setid: id, fel: 1 },

    success: function (result, status, xhr) {
      // $("#showproblem1").html(result);
      // cleardiv();
      // // cleardiv();
      // setpos();
    },
  });
}
function setdun2() {
  // alert(id);
  // if(cutid==0){

  $.ajax({
    type: "POST",
    url: "setdan1.php",
    data: { setdun: 0, setid: id, fel: 0 },

    success: function (result, status, xhr) {
      // $("#showproblem1").html(result);
      // cleardiv();
      // // cleardiv();
      // dun=0;
      dhu = 1;
      // setpos();
    },
  });
  // }
  // else{
  //     id--;
  //     if(id==0){
  //         id=4;
  //     }
  //     $.ajax({
  //         type: "POST",
  //         url: "setdan1.php",
  //         data: { setdun: 0, setid: id, fel: 0 },

  //         success: function (result, status, xhr) {
  //             $("#showproblem1").html(result);
  //             // cleardiv();
  //             // // cleardiv();
  //             // setpos();

  //         }

  //     });

  // }
}
// console.log(arrnam[1][0]);
// alert(dun);
colgh(id);
if (fel == 0) {
  // alert("hi")
  document.getElementById("showdice").innerHTML = "roll dice";
  // kardun();
  colgh(id);
  // colgh(id);
} else {
  // alert(id);
  // cleardiv();
  // setpos();
  document.getElementById("showdice").innerHTML = "roll dice again";
  // document.getElementById("num").value = dun;

  // dan();
}
function setstatdun(dun, id) {
  $.ajax({
    type: "POST",
    url: "setstatdun.php",
    data: { dun10: dun, id10: id },

    success: function (result, status, xhr) {
      // $("#showproblem1").html(result);
      // cleardiv();
      // // cleardiv();
      // setpos();
    },
  });
}
function showchat() {
  $.ajax({
    type: "POST",
    url: "messages.php",
    // data: {dun10: dun, id10: id },

    success: function (result, status, xhr) {
      $("#showchat").html(result);
      // cleardiv();
      // // cleardiv();
      // setpos();
    },
  });
}
showchat();

setInterval(showchat, 500);
// setInterval(disableghuti, 500);

setInterval(setstatuser, 500);
// var noofuser = 4;
var autoi = 1;
function generateRandom(min, max) {
  // find diff
  let difference = max - min;

  // generate random number
  let rand = Math.random();

  // multiply with difference
  rand = Math.floor(rand * difference);

  // add with min value
  rand = rand + min;

  return rand;
}

// alert(noron);
var dhu = 0;
// endgame();
function dan() {
  // aray();
  createarrayevery();
  console.log(arrpos);
  // alert(dhu);
  arrnam1 = [];
  arrpos1 = [];

  // alert(dun);
  // cleardiv();
  // setpos();

  // var dun=  generateRandom(1,7);
  // document.getElementById("num").innerHTML=dun;

  if (dhu == 1) {
    dun = 0;
    dhu = 0;
  }

  if (dun != 0) {
    // document.getElementById("num").value = dun;
  } else {
    dun = generateRandom(1, 7);
    createarray(id);
    console.log(arrpos1, "h");
    for (var j = 1; j < 5; j++) {
      // if(arrpos1[j]==13 || arrpos1[j]==26 || arrpos1[j]==39 || arrpos1[j]==52){
      //     if(dun==6){
      //         dun=dun-1;
      //     }
      // }
    }
    // dun = document.getElementById("num").value;
    setstatdun(dun, id);
  }
  var dun45 = dun;

  dun2 = dun;
  dun = parseInt(dun);

  kardun();
  // document.getElementById("btn1").disabled=true;
  // document.getElementsBy("btnn").disabled=true;
  // document.querySelector('.btnn').disabled=true;
  // if(autoi==1){
  setdun1();

  mySound = new Audio("dice.mp3");
  mySound.play();
  if (noofuser == 4) {
    if (dun == 6) {
      sid = 1;
      colgh(id);
      var dun5 = dun;
      gbshow1(sid, id, dun5);
    } else {
      sid = 0;
      var dun5 = dun;
      gbshow1(sid, id, dun5);

      id++;
      if (id > 4) {
        id = 1;
      }
    }

    // console.log(count);
    if (count == 4) {
      // autoi=1;
      // document.getElementsByClassName("btnn").disabled=false;
      document.getElementById(ghname).disabled = false;
      if (sid == 1) {
        id++;
        if (id > 4) {
          id = 1;
        }
      }
    } else {
      // autoi=0;
      document.getElementById(ghname).disabled = true;
    }
  } else if (noofuser == 3) {
    if (dun == 6) {
      sid = 1;
      colgh(id);
      var dun5 = dun;
      gbshow1(sid, id, dun5);
    } else {
      sid = 0;
      var dun5 = dun;
      gbshow1(sid, id, dun5);

      id++;
      if (id > 3) {
        id = 1;
      }
    }
    if (count == 4) {
      // autoi=1;
      // document.getElementsByClassName("btnn").disabled=false;
      document.getElementById(ghname).disabled = false;
      if (sid == 1) {
        id++;
        if (id > 3) {
          id = 1;
        }
      }
    } else {
      document.getElementById(ghname).disabled = true;
    }
    // else{
    //     autoi=0;

    //     }
  } else if (noofuser == 2) {
    if (dun == 6) {
      sid = 1;
      colgh(id);
      var dun5 = dun;
      gbshow1(sid, id, dun5);
    } else {
      sid = 0;
      var dun5 = dun;
      gbshow1(sid, id, dun5);

      id = id + 2;
      if (id > 4) {
        id = 1;
      }
    }
    // console.log(count);
    console.log(count);
    if (count == 4) {
      // autoi=1;
      // document.getElementsByClassName("btnn").disabled=false;
      document.getElementById(ghname).disabled = false;
      if (sid == 1) {
        id = id + 2;
        if (id > 4) {
          id = 1;
        }
      }
    } else {
      // autoi=0;
      document.getElementById(ghname).disabled = true;
    }
  }

  autoincre(dun);
  dhu = 0;
  document.getElementById(ghname).disabled = true;
  // console.log(count);
  if (count == 4) {
    document.getElementById(ghname).disabled = false;
    setdun2();
    // alert(id);
  }
  count = 0;
  cutid = 0;
  // }
  var nodes = document.getElementsByClassName("btnn");
  var noron = nodes.length;

  for (var i = 0; i < noron; i++) {
    document.getElementsByClassName("btnn")[0].innerHTML = dun45;
  }
//   location.reload();
}
function createarrayevery() {
  // createarray(id);
  // console.log(arrpos1,'e');
  $.ajax({
    type: "POST",
    url: "createarray.php",
    // data: {name:name,id:a },

    success: function (result, status, xhr) {
      // $("#showproblem1").html(result);
      // userlist=result;
      // userlist=JSON.parse(userlist);
      arrpos = result;
      arrpos = JSON.parse(arrpos);

      // console.log(userlist);
      // alert(result);
      // showname();

      // sala();
      // h(i, a2, a1);/
      //  alert(n);

      //  document.getElementById(i).innerHTML=result;
    },
  });
}

var chome = 0,
  chome1 = 0;
function autoincre(dun5) {
  createarray(id);
  // console.log(arrpos1);
  for (var i = 0; i < 4; i++) {
    if (arrpos1[i][0] == "h") {
      chome++;
    }
  }
  if (chome == 4) {
    // alert("chome");
    if (noofuser == 3) {
      id++;
      if (id > 3) {
        id = 1;
      }
    } else if (noofuser == 4) {
      id++;
      if (id > 4) {
        id = 1;
      }
      // console.log("id", id);
      createarray(id);
      // console.log(arrpos1);

      for (var i = 0; i < 4; i++) {
        if (arrpos1[i][0] == "h") {
          chome1++;
        }
      }
      if (chome1 == 4) {
        id++;
        if (id > 4) {
          id = 1;
        }
      }
    }
  }
  // }
  (chome = 0), (chome1 = 0);
  // console.log("auto reached");
  //     if (id == 1) {

  //         for (var i = 0; i < 4; i++) {
  //             checkred(i, dun5);
  //         }

  //     }

  //     else if (id == 2) {
  //         // setpos();
  //         for (var i = 0; i < 4; i++) {
  //             checkgreen(i, dun5);
  //         }

  //     }
  //     else if (id == 3) {
  //         for (var i = 0; i < 4; i++) {
  //             checkblue(i, dun5);
  //         }

  //     }
  //     else if (id == 4) {
  //         for (var i = 0; i < 4; i++) {
  //             checkyellow(i, dun5);
  //         }

  // }
  colgh(id);
}
// endgame();
var dun1;
// cleardiv();
function cleardiv() {
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
  document.getElementById("showdice").innerHTML = "Any Message Appear Here";

  // document.getElementById("r1").innerHTML = "";
  // document.getElementById("r2").innerHTML = "";
  // document.getElementById("r3").innerHTML = "";
  // document.getElementById("r4").innerHTML = "";
  // document.getElementById("g1").innerHTML = "";
  // document.getElementById("g2").innerHTML = "";
  // document.getElementById("g3").innerHTML = "";
  // document.getElementById("g4").innerHTML = "";
  // document.getElementById("b1").innerHTML = "";
  // document.getElementById("b2").innerHTML = "";
  // document.getElementById("b3").innerHTML = "";
  // document.getElementById("b4").innerHTML = "";
  // document.getElementById("y2").innerHTML = "";
  // document.getElementById("y1").innerHTML = "";
  // document.getElementById("y4").innerHTML = "";
  // document.getElementById("y3").innerHTML = "";

  // console.log(pathobj);
}
// var id = 1;
// kardun();
// document.getElementById("dice").style.backgroundColor = "#ffd633";

var ghname;
// 1 red 2 green 3 blue 4 yellow
function kardun() {
  // alert(id);
  if (id == 1) {
    // document.getElementById("dice").style.background="red";
    // document.getElementById("dice").style.backgroundColor = "#FF0000";
    // document.getElementById('btn1').style.backgroundColor = "rgb(255, 0, 0)";
    // document.getElementById('btn1').innerHTML="1";
    if (noofuser == 4) {
      ghname = "btn2";
      document.getElementById("btn1").innerHTML =
        ' <button class="btnn"  id="btn2" onclick="dan()" style="height: 35px;width: 35px;border: 2px solid black; color:white;" >DICE</button> ';
      document.getElementById("kr1").disabled = false;
      document.getElementById("kr2").disabled = false;
      document.getElementById("kr3").disabled = false;
      document.getElementById("kr4").disabled = false;

      document.getElementById("kg1").disabled = true;
      document.getElementById("kg2").disabled = true;
      document.getElementById("kg3").disabled = true;
      document.getElementById("kg4").disabled = true;

      document.getElementById("ky1").disabled = true;
      document.getElementById("ky2").disabled = true;
      document.getElementById("ky3").disabled = true;
      document.getElementById("ky4").disabled = true;

      document.getElementById("kb1").disabled = true;
      document.getElementById("kb2").disabled = true;
      document.getElementById("kb3").disabled = true;
      document.getElementById("kb4").disabled = true;
    } else if (noofuser == 3) {
      ghname = "btn2";

      document.getElementById("btn1").innerHTML =
        ' <button class="btnn"  id="btn2" onclick="dan()" style="height: 35px;width: 35px;border: 2px solid black; color:white;" >DICE</button> ';

      document.getElementById("kr1").disabled = false;
      document.getElementById("kr2").disabled = false;
      document.getElementById("kr3").disabled = false;
      document.getElementById("kr4").disabled = false;

      document.getElementById("kg1").disabled = true;
      document.getElementById("kg2").disabled = true;
      document.getElementById("kg3").disabled = true;
      document.getElementById("kg4").disabled = true;

      // document.getElementById('ky1').disabled = true;
      // document.getElementById('ky2').disabled = true;
      // document.getElementById('ky3').disabled = true;
      // document.getElementById('ky4').disabled = true;

      document.getElementById("kb1").disabled = true;
      document.getElementById("kb2").disabled = true;
      document.getElementById("kb3").disabled = true;
      document.getElementById("kb4").disabled = true;
    } else if (noofuser == 2) {
      ghname = "btn3";

      document.getElementById("btn1").innerHTML =
        ' <button class="btnn"  id="btn3" onclick="dan()" style="height: 35px;width: 35px;border: 2px solid black; color:white;" >DICE</button> ';

      document.getElementById("kr1").disabled = false;
      document.getElementById("kr2").disabled = false;
      document.getElementById("kr3").disabled = false;
      document.getElementById("kr4").disabled = false;

      // document.getElementById('kg1').disabled = true;
      // document.getElementById('kg2').disabled = true;
      // document.getElementById('kg3').disabled = true;
      // document.getElementById('kg4').disabled = true;

      // document.getElementById('ky1').disabled = true;
      // document.getElementById('ky2').disabled = true;
      // document.getElementById('ky3').disabled = true;
      // document.getElementById('ky4').disabled = true;

      document.getElementById("kb1").disabled = true;
      document.getElementById("kb2").disabled = true;
      document.getElementById("kb3").disabled = true;
      document.getElementById("kb4").disabled = true;
    }

    // document.body.style.backgroundColor = "red";
    // document.getElementById('kr1').disabled = false;
    // document.getElementById('kr2').disabled = false;
    // document.getElementById('kr3').disabled = false;
    // document.getElementById('kr4').disabled = false;

    // document.getElementById('kg1').disabled = true;
    // document.getElementById('kg2').disabled = true;
    // document.getElementById('kg3').disabled = true;
    // document.getElementById('kg4').disabled = true;

    // document.getElementById('ky1').disabled = true;
    // document.getElementById('ky2').disabled = true;
    // document.getElementById('ky3').disabled = true;
    // document.getElementById('ky4').disabled = true;

    // document.getElementById('kb1').disabled = true;
    // document.getElementById('kb2').disabled = true;
    // document.getElementById('kb3').disabled = true;
    // document.getElementById('kb4').disabled = true;
    // To re-enable:
    // document.getElementById('id').style.pointerEvents = 'auto';
  } else if (id == 2) {
    // alert("fghj");
    // document.getElementById('btn1').innerHTML="2";
    // document.getElementById('btn1').innerHTML = ' <div id="btn3" onclick="dan()" style="height: 35px;width: 35px;border: 2px solid black; " >fel</div> ';

    // document.getElementById("btn1").background = "rgb(0,255,0)";

    if (noofuser == 2) {
      ghname = "btn0";

      document.getElementById("btn1").innerHTML =
        ' <button class="btnn"  id="btn0" onclick="dan()" style="height: 35px;width: 35px;border: 2px solid black;  color:white;" >DICE</button> ';

      document.getElementById("kr1").disabled = true;
      document.getElementById("kr2").disabled = true;
      document.getElementById("kr3").disabled = true;
      document.getElementById("kr4").disabled = true;

      // document.getElementById('kg1').disabled = false;
      // document.getElementById('kg2').disabled = false;
      // document.getElementById('kg3').disabled = false;
      // document.getElementById('kg4').disabled = false;

      // document.getElementById('ky1').disabled = true;
      // document.getElementById('ky2').disabled = true;
      // document.getElementById('ky3').disabled = true;
      // document.getElementById('ky4').disabled = true;
      document.getElementById("kb1").disabled = true;
      document.getElementById("kb2").disabled = true;
      document.getElementById("kb3").disabled = true;
      document.getElementById("kb4").disabled = true;
    } else if (noofuser == 3) {
      ghname = "btn3";

      document.getElementById("btn1").innerHTML =
        ' <button class="btnn" id="btn3" onclick="dan()" style="height: 35px;width: 35px;border: 2px solid black;  color:white;" >DICE</button> ';

      document.getElementById("kr1").disabled = true;
      document.getElementById("kr2").disabled = true;
      document.getElementById("kr3").disabled = true;
      document.getElementById("kr4").disabled = true;

      document.getElementById("kg1").disabled = false;
      document.getElementById("kg2").disabled = false;
      document.getElementById("kg3").disabled = false;
      document.getElementById("kg4").disabled = false;

      // document.getElementById('ky1').disabled = true;
      // document.getElementById('ky2').disabled = true;
      // document.getElementById('ky3').disabled = true;
      // document.getElementById('ky4').disabled = true;
      document.getElementById("kb1").disabled = true;
      document.getElementById("kb2").disabled = true;
      document.getElementById("kb3").disabled = true;
      document.getElementById("kb4").disabled = true;
    } else if (noofuser == 4) {
      ghname = "btn3";

      document.getElementById("btn1").innerHTML =
        ' <button class="btnn" id="btn3" onclick="dan()" style="height: 35px;width: 35px;border: 2px solid black; color:white;" >DICE</button> ';

      document.getElementById("kr1").disabled = true;
      document.getElementById("kr2").disabled = true;
      document.getElementById("kr3").disabled = true;
      document.getElementById("kr4").disabled = true;

      document.getElementById("kg1").disabled = false;
      document.getElementById("kg2").disabled = false;
      document.getElementById("kg3").disabled = false;
      document.getElementById("kg4").disabled = false;

      document.getElementById("ky1").disabled = true;
      document.getElementById("ky2").disabled = true;
      document.getElementById("ky3").disabled = true;
      document.getElementById("ky4").disabled = true;
      document.getElementById("kb1").disabled = true;
      document.getElementById("kb2").disabled = true;
      document.getElementById("kb3").disabled = true;
      document.getElementById("kb4").disabled = true;
    }
  } else if (id == 3) {
    // document.getElementById("btn1").backgroundColor="blue";
    // document.getElementById('btn1').innerHTML="3";

    if (noofuser == 2) {
      ghname = "btn0";

      document.getElementById("btn1").innerHTML =
        ' <button class="btnn"  id="btn0" onclick="dan()" style="height: 35px;width: 35px;border: 2px solid black; color:white;" >DICE</button> ';

      document.getElementById("kr1").disabled = true;
      document.getElementById("kr2").disabled = true;
      document.getElementById("kr3").disabled = true;
      document.getElementById("kr4").disabled = true;

      // document.getElementById('kg1').disabled = true;
      // document.getElementById('kg2').disabled = true;
      // document.getElementById('kg3').disabled = true;
      // document.getElementById('kg4').disabled = true;

      // document.getElementById('ky1').disabled = true;
      // document.getElementById('ky2').disabled = true;
      // document.getElementById('ky3').disabled = true;
      // document.getElementById('ky4').disabled = true;

      document.getElementById("kb1").disabled = false;
      document.getElementById("kb2").disabled = false;
      document.getElementById("kb3").disabled = false;
      document.getElementById("kb4").disabled = false;
    } else if (noofuser == 3) {
      ghname = "btn0";

      document.getElementById("btn1").innerHTML =
        ' <button class="btnn" id="btnn" id="btn0" onclick="dan()" style="height: 35px;width: 35px;border: 2px solid black; color:white;" >DICE</button> ';

      document.getElementById("kr1").disabled = true;
      document.getElementById("kr2").disabled = true;
      document.getElementById("kr3").disabled = true;
      document.getElementById("kr4").disabled = true;

      document.getElementById("kg1").disabled = true;
      document.getElementById("kg2").disabled = true;
      document.getElementById("kg3").disabled = true;
      document.getElementById("kg4").disabled = true;

      // document.getElementById('ky1').disabled = true;
      // document.getElementById('ky2').disabled = true;
      // document.getElementById('ky3').disabled = true;
      // document.getElementById('ky4').disabled = true;

      document.getElementById("kb1").disabled = false;
      document.getElementById("kb2").disabled = false;
      document.getElementById("kb3").disabled = false;
      document.getElementById("kb4").disabled = false;
    } else if (noofuser == 4) {
      ghname = "btn4";

      document.getElementById("btn1").innerHTML =
        ' <button class="btnn"  id="btn4" onclick="dan()" style="height: 35px;width: 35px;border: 2px solid black; color:white;" >DICE</button> ';

      document.getElementById("kr1").disabled = true;
      document.getElementById("kr2").disabled = true;
      document.getElementById("kr3").disabled = true;
      document.getElementById("kr4").disabled = true;

      document.getElementById("kg1").disabled = true;
      document.getElementById("kg2").disabled = true;
      document.getElementById("kg3").disabled = true;
      document.getElementById("kg4").disabled = true;

      document.getElementById("ky1").disabled = true;
      document.getElementById("ky2").disabled = true;
      document.getElementById("ky3").disabled = true;
      document.getElementById("ky4").disabled = true;

      document.getElementById("kb1").disabled = false;
      document.getElementById("kb2").disabled = false;
      document.getElementById("kb3").disabled = false;
      document.getElementById("kb4").disabled = false;
    }
  } else {
    if (noofuser == 2) {
      ghname = "btn0";

      document.getElementById("btn1").innerHTML =
        ' <button class="btnn"  id="btn0" onclick="dan()" style="height: 35px;width: 35px;border: 2px solid black; color:white;" >DICE</button> ';

      document.getElementById("kr1").disabled = true;
      document.getElementById("kr2").disabled = true;
      document.getElementById("kr3").disabled = true;
      document.getElementById("kr4").disabled = true;

      // document.getElementById('kg1').disabled = true;
      // document.getElementById('kg2').disabled = true;
      // document.getElementById('kg3').disabled = true;
      // document.getElementById('kg4').disabled = true;

      // document.getElementById('ky1').disabled = false;
      // document.getElementById('ky2').disabled = false;
      // document.getElementById('ky3').disabled = false;
      // document.getElementById('ky4').disabled = false;

      document.getElementById("kb1").disabled = true;
      document.getElementById("kb2").disabled = true;
      document.getElementById("kb3").disabled = true;
      document.getElementById("kb4").disabled = true;
    } else if (noofuser == 3) {
      ghname = "btn0";

      document.getElementById("btn1").innerHTML =
        ' <button class="btnn" id="btn0" onclick="dan()" style="height: 35px;width: 35px;border: 2px solid black; color:white;" >DICE</button> ';

      document.getElementById("kr1").disabled = true;
      document.getElementById("kr2").disabled = true;
      document.getElementById("kr3").disabled = true;
      document.getElementById("kr4").disabled = true;

      document.getElementById("kg1").disabled = true;
      document.getElementById("kg2").disabled = true;
      document.getElementById("kg3").disabled = true;
      document.getElementById("kg4").disabled = true;

      // document.getElementById('ky1').disabled = false;
      // document.getElementById('ky2').disabled = false;
      // document.getElementById('ky3').disabled = false;
      // document.getElementById('ky4').disabled = false;

      document.getElementById("kb1").disabled = true;
      document.getElementById("kb2").disabled = true;
      document.getElementById("kb3").disabled = true;
      document.getElementById("kb4").disabled = true;
    } else if (noofuser == 4) {
      ghname = "btn0";

      document.getElementById("btn1").innerHTML =
        ' <button class="btnn"  id="btn0" onclick="dan()" style="height: 35px;width: 35px;border: 2px solid black; color:white;" >DICE</button> ';

      document.getElementById("kr1").disabled = true;
      document.getElementById("kr2").disabled = true;
      document.getElementById("kr3").disabled = true;
      document.getElementById("kr4").disabled = true;

      document.getElementById("kg1").disabled = true;
      document.getElementById("kg2").disabled = true;
      document.getElementById("kg3").disabled = true;
      document.getElementById("kg4").disabled = true;

      document.getElementById("ky1").disabled = false;
      document.getElementById("ky2").disabled = false;
      document.getElementById("ky3").disabled = false;
      document.getElementById("ky4").disabled = false;

      document.getElementById("kb1").disabled = true;
      document.getElementById("kb2").disabled = true;
      document.getElementById("kb3").disabled = true;
      document.getElementById("kb4").disabled = true;
    }
    // document.getElementById("btn1").backgroundColor="yellow";
  }
}
function colgh(i) {
  // alert(2);
  if (i == 1) {
    ghname = "btn0";

    document.getElementById("btn1").innerHTML =
      ' <button class="btnn"  id="btn0" onclick="dan()" style="height: 35px;width: 35px;border: 2px solid black; color:white;" >DICE</button> ';
  } else if (i == 2) {
    ghname = "btn2";

    document.getElementById("btn1").innerHTML =
      ' <button class="btnn"  id="btn2" onclick="dan()" style="height: 35px;width: 35px;border: 2px solid black;  color:white;" >DICE/button> ';
  } else if (i == 3) {
    ghname = "btn3";

    document.getElementById("btn1").innerHTML =
      ' <button class="btnn" id="btn3" onclick="dan()" style="height: 35px;width: 35px;border: 2px solid black; color:white;" >DICE</button> ';
  } else if (i == 4) {
    ghname = "btn4";

    document.getElementById("btn1").innerHTML =
      ' <button class="btnn"  id="btn4" onclick="dan()" style="height: 35px;width: 35px;border: 2px solid black; color:white;" >DICE</button> ';
  }
}
function newbie(i, gname, b) {
  i = i + b;
  //  alert(i,b);
  // console.log(i, b);

  if (gname[0] == "g" && i > 13 && i < 20 && b < 14) {
    i = i + 45;
    dun = i - b;
  } else if (gname[0] == "b" && i > 26 && i < 33 && b < 27) {
    i = i + 38;
    dun = i - b;
  } else if (gname[0] == "y" && i > 39 && i < 46 && b < 38) {
    i = i + 31;
    dun = i - b;
  }
}
var cutid = 0;
function createarray(id) {
  arrnam1 = [];
  arrpos1 = [];

  // console.log(arrpos);
  // alert("dh")
  // alert(id);
  // cleardiv();
  // setpos();
  // console.log(proarr);
  // var count=0;

  for (var i = 1; i <= 16; i++) {
    if (id == 1) {
      if (arrnam[i][0] == "r" || arrnam[i][1] == "r") {
        arrnam1.push(arrnam[i]);
        arrpos1.push(arrpos[i]);
      }
    } else if (id == 2) {
      if (arrnam[i][0] == "g" || arrnam[i][1] == "g") {
        // console.log(arrnam[i]);
        // var po6=arrnam[i];
        // alert(po6);

        arrnam1.push(arrnam[i]);
        arrpos1.push(arrpos[i]);
      }
    } else if (id == 3) {
      if (arrnam[i][0] == "b" || arrnam[i][1] == "b") {
        arrnam1.push(arrnam[i]);
        arrpos1.push(arrpos[i]);
      }
    } else if (id == 4) {
      if (arrnam[i][0] == "y" || arrnam[i][1] == "") {
        arrnam1.push(arrnam[i]);
        arrpos1.push(arrpos[i]);
      }
    }
  }
  // console.log(arrnam1, arrpos1);
}
var arrnam1 = [];
var arrpos1 = [];

function gbshow1(sid, id, dun5) {
  // var arr
  createarray(id);
  // console.log(arrpos1);
  //    if(id==1){
  //     for(var i=0;i<4;i++){
  //         checkred(i);
  //     }

  //    }
  //   else if(id==1){
  //     for(var i=0;i<4;i++){
  //         checkred(i);
  //     }

  //    }
  //   else if(id==1){
  //     for(var i=0;i<4;i++){
  //         checkred(i);
  //     }

  //    }
  //   else if(id==1){
  //     for(var i=0;i<4;i++){
  //         checkred(i);
  //     }

  count = 0;
  //    }
  if (id == 1) {
    for (var i = 0; i < 4; i++) {
      checkred(i, dun5);
    }
  } else if (id == 2) {
    // setpos();
    for (var i = 0; i < 4; i++) {
      checkgreen(i, dun5);
    }
  } else if (id == 3) {
    for (var i = 0; i < 4; i++) {
      checkblue(i, dun5);
    }
  } else if (id == 4) {
    for (var i = 0; i < 4; i++) {
      checkyellow(i, dun5);
    }
  }
}

function checkred(i, d) {
  if (sid == 1) {
    // alert("hi");
    // if(arrpos1[i][0]=='r' || arrpos1[i][0]=='h' ){
    // alert("j");
    // console.log("rag");

    if (arrpos1[i][0] == "r") {
      // alert("rag");
      // console.log("rag2");
      var rp = "k" + arrnam1[i];
      document.getElementById(rp).disabled = false;
      document.getElementById(rp).style.boxShadow = "10px 20px 30px blue";
    } else if (arrpos1[i][0] == "h") {
      // var rp=arrpos1[i];
      var rp = "k" + arrnam1[i];

      document.getElementById(rp).disabled = true;
      count++;
    }
    // }
    else {
      // var rp=arrpos1[i];
      var rp1 = parseInt(arrpos1[i]);
      var d = parseInt(d);

      if (rp1 + d < 59) {
        var rp = "k" + arrnam1[i];

        document.getElementById(rp).disabled = false;
        document.getElementById(rp).style.boxShadow = "10px 20px 30px blue";
      } else {
        var rp = "k" + arrnam1[i];

        document.getElementById(rp).disabled = true;
        count++;
      }
    }
  } else {
    if (arrpos1[i][0] == "r") {
      // var rp=arrpos1[i];
      var rp = "k" + arrnam1[i];

      document.getElementById(rp).disabled = true;
      count++;
    } else if (arrpos1[i][0] == "h") {
      var rp = "k" + arrnam1[i];

      document.getElementById(rp).disabled = true;
      count++;
    } else {
      // var rp=arrpos1[i];
      // var rp='k'+arrnam1[i];

      // document.getElementById(rp).disabled=false;
      // document.getElementById(rp).style.boxShadow = "10px 20px 30px blue";
      var rp1 = parseInt(arrpos1[i]);
      var d = parseInt(d);

      if (rp1 + d < 59) {
        var rp = "k" + arrnam1[i];

        document.getElementById(rp).disabled = false;
        document.getElementById(rp).style.boxShadow = "10px 20px 30px blue";
      } else {
        var rp = "k" + arrnam1[i];
        count++;

        document.getElementById(rp).disabled = true;
      }
    }
  }
  // console.log(count);
}

function checkgreen(i, d) {
  // console.log(arrpos1,2)
  // alert(d);
  if (sid == 1) {
    // alert("hi");
    // if(arrpos1[i][0]=='r' || arrpos1[i][0]=='h' ){
    // alert("j");
    // console.log("rag");

    if (arrpos1[i][0] == "g") {
      // alert("rag");
      // console.log("rag2");
      var rp = "k" + arrnam1[i];
      document.getElementById(rp).disabled = false;
      document.getElementById(rp).style.boxShadow = "10px 20px 30px blue";
    } else if (arrpos1[i][0] == "h") {
      // var rp=arrpos1[i];
      var rp = "k" + arrnam1[i];
      count++;

      document.getElementById(rp).disabled = true;
    }
    // }
    else {
      // var rp=arrpos1[i];
      var rp1 = parseInt(arrpos1[i]);
      var d = parseInt(d);

      if (rp1 + d < 65) {
        var rp = "k" + arrnam1[i];
        document.getElementById(rp).disabled = false;
        document.getElementById(rp).style.boxShadow = "10px 20px 30px blue";
      } else {
        var rp = "k" + arrnam1[i];
        count++;

        document.getElementById(rp).disabled = true;
      }
    }
  } else {
    if (arrpos1[i][0] == "g" || arrpos1[i][0] == "h") {
      // var rp=arrpos1[i];
      var rp = "k" + arrnam1[i];
      count++;

      document.getElementById(rp).disabled = true;
    } else {
      // var rp=arrpos1[i];
      // var rp='k'+arrnam1[i];

      // document.getElementById(rp).disabled=false;
      // document.getElementById(rp).style.boxShadow = "10px 20px 30px blue";
      var rp1 = parseInt(arrpos1[i]);
      var d = parseInt(d);

      if (rp1 + d < 65) {
        var rp = "k" + arrnam1[i];
        // console.log(rp);
        // document.getElementById("kg1").innerHTML="tyuio0";

        document.getElementById(rp).disabled = false;
        document.getElementById(rp).style.boxShadow = "10px 20px 30px blue";
      } else {
        var rp = "k" + arrnam1[i];
        count++;

        document.getElementById(rp).disabled = true;
      }
    }
  }
}

function checkblue(i, d) {
  // count = 0;
  if (sid == 1) {
    // alert("hi");
    // if(arrpos1[i][0]=='r' || arrpos1[i][0]=='h' ){
    // alert("j");
    // console.log("rag");

    if (arrpos1[i][0] == "b") {
      // alert("rag");
      // console.log("rag2");
      var rp = "k" + arrnam1[i];
      document.getElementById(rp).disabled = false;
      document.getElementById(rp).style.boxShadow = "10px 20px 30px blue";
    } else if (arrpos1[i][0] == "h") {
      // var rp=arrpos1[i];
      var rp = "k" + arrnam1[i];
      count++;

      document.getElementById(rp).disabled = true;
    }
    // }
    else {
      // var rp=arrpos1[i];
      var rp1 = parseInt(arrpos1[i]);
      var d = parseInt(d);

      if (rp1 + d < 71) {
        var rp = "k" + arrnam1[i];

        document.getElementById(rp).disabled = false;
        document.getElementById(rp).style.boxShadow = "10px 20px 30px blue";
      } else {
        var rp = "k" + arrnam1[i];
        count++;

        document.getElementById(rp).disabled = true;
      }
    }
  } else {
    if (arrpos1[i][0] == "b" || arrpos1[i][0] == "h") {
      // var rp=arrpos1[i];
      var rp = "k" + arrnam1[i];
      count++;

      document.getElementById(rp).disabled = true;
    } else {
      // var rp=arrpos1[i];
      // var rp='k'+arrnam1[i];

      // document.getElementById(rp).disabled=false;
      // document.getElementById(rp).style.boxShadow = "10px 20px 30px blue";
      var rp1 = parseInt(arrpos1[i]);
      var d = parseInt(d);

      if (rp1 + d < 71) {
        var rp = "k" + arrnam1[i];

        document.getElementById(rp).disabled = false;
        document.getElementById(rp).style.boxShadow = "10px 20px 30px blue";
      } else {
        var rp = "k" + arrnam1[i];
        count++;

        document.getElementById(rp).disabled = true;
      }
    }
  }
  // console.log(count);
}

function checkyellow(i, d) {
  // count = 0;
  if (sid == 1) {
    // alert("hi");
    // if(arrpos1[i][0]=='r' || arrpos1[i][0]=='h' ){
    // alert("j");
    // console.log("rag");

    if (arrpos1[i][0] == "y") {
      // alert("rag");
      // console.log("rag2");
      var rp = "k" + arrnam1[i];
      document.getElementById(rp).disabled = false;
      document.getElementById(rp).style.boxShadow = "10px 20px 30px blue";
    } else if (arrpos1[i][0] == "h") {
      // var rp=arrpos1[i];
      var rp = "k" + arrnam1[i];
      count++;

      document.getElementById(rp).disabled = true;
    }
    // }
    else {
      // var rp=arrpos1[i];
      var rp1 = parseInt(arrpos1[i]);
      var d = parseInt(d);

      if (rp1 + d < 77) {
        var rp = "k" + arrnam1[i];

        document.getElementById(rp).disabled = false;
        document.getElementById(rp).style.boxShadow = "10px 20px 30px blue";
      } else {
        var rp = "k" + arrnam1[i];
        count++;

        document.getElementById(rp).disabled = true;
      }
    }
  } else {
    if (arrpos1[i][0] == "y" || arrpos1[i][0] == "h") {
      // var rp=arrpos1[i];
      var rp = "k" + arrnam1[i];
      count++;

      document.getElementById(rp).disabled = true;
    } else {
      // var rp=arrpos1[i];
      // var rp='k'+arrnam1[i];

      // document.getElementById(rp).disabled=false;
      // document.getElementById(rp).style.boxShadow = "10px 20px 30px blue";
      var rp1 = parseInt(arrpos1[i]);
      var d = parseInt(d);

      if (rp1 + d < 77) {
        var rp = "k" + arrnam1[i];

        document.getElementById(rp).disabled = false;
        document.getElementById(rp).style.boxShadow = "10px 20px 30px blue";
      } else {
        var rp = "k" + arrnam1[i];
        count++;

        document.getElementById(rp).disabled = true;
      }
    }
  }
}

// function danfrom(){
//     $.ajax({
//         type: "POST",
//         url: "selectdan.php",
//         // data: {dan:dun1,name:a},

//         success: function (result, status, xhr){
//             // $("#showproblem1").html(result);
//             // alert(result);
//             selectdun=result[1];
//             selectkardun=result[0];
//             selectfel=result[2];
//             alert(selectkardun);
//             if(selectfel!=0){
//                 makedun();
//                 setpos();
//             }
//             else{
//                 id=parseInt(selectkardun);
//                 dun=selectdun;
//                 document.getElementById("showdice").innerHTML="roll dice";
//                 setpos();

//             }
//         }

//     });

// }
// danfrom();

// function makedun(){
//     // alert(1);
//     // alert(selectkardun);
//     id=selectkardun;
//     dun=selectdun;
//     // colgh(id);
//     // alert(id);
//     if(dun!=0){

//         dan();

//     }
//     // }
//    if(id==1){
//        document.getElementById("").disabled=true;
//    }
//    else if(id==1){
//     document.getElementById("").disabled=true;
//    }
//    else if(id==1){
//     document.getElementById("").disabled=true;
//    }
//    else if(id==1){
//     document.getElementById("").disabled=true;
//    }
var count = 0;
// function checkghuti(){
//     console.log(arrpos1);
//     for(i=0;i<4;i++){
//         if(id==1){

//             if(arrpos1[i][0]=='r' || arrpos1[i][1]=='r'){
//                 count++;
//             }
//             else{
//                 var a1=dun+parseInt(arrpos1[i]);
//                 if(a1>)
//             }
//         }
//     }
// }
// console.log(arrpos[1]);

function changeb() {
  // document.getElementsByTagName("table").style.backgroundcolor="black";
  // body.style.backgroundcolor="black";
  for (var i = 1; i <= 76; i++) {
    if (
      i != 64 &&
      i != 76 &&
      i != 70 &&
      i != 15 &&
      i != 10 &&
      i != 23 &&
      i != 28 &&
      i != 36 &&
      i != 41 &&
      i != 49 &&
      i != 2
    ) {
      // document.getElementById(i).innerHTML = "";
      if (i > 52 && i < 76) {
        // 1 = 1;
      } else {
        // document.getElementById(i).style.backgroundColor = "black";
      }
    }
    // pathobj[i].v = 0;
    // pathobj[i].arg = [];

    // document.getElementById(i).style.display="block";
  }
}

var cr = 0,
  cb = 0,
  cy = 0,
  cg = 0;
function checkwin() {
  $.ajax({
    type: "POST",
    url: "checkwin.php",
    // data: { d },

    success: function (result, status, xhr) {
      $("#showin").html(result);
      // cleardiv();
      // // cleardiv();
      // setpos();
    },
  });

  (cr = 0), (cb = 0), (cy = 0), (cg = 0);
  if (noofuser == 2) {
    for (i = 1; i <= 4; i++) {
      if (arrpos[i][0] == "h") {
        cr++;
      }
    }
    for (i = 5; i <= 8; i++) {
      if (arrpos[i][0] == "h") {
        cb++;
      }
    }
    if (cr == 4 || cb == 4) {
      // alert("match ended");
      endgame();
    }
  } else if (noofuser == 3) {
    for (i = 1; i <= 4; i++) {
      if (arrpos[i][0] == "h") {
        cr++;
      }
    }
    for (i = 5; i <= 8; i++) {
      if (arrpos[i][0] == "h") {
        cb++;
      }
    }
    for (i = 9; i <= 12; i++) {
      if (arrpos[i][0] == "h") {
        cg++;
      }
    }

    if ((cr == 4 && cg == 4) || (cb == 4 && cg == 4) || (cr == 4 && cb == 4)) {
      // alert("match ended");
      endgame();
    }
  } else if (noofuser == 4) {
    for (i = 1; i <= 4; i++) {
      if (arrpos[i][0] == "h") {
        cr++;
      }
    }
    for (i = 5; i <= 8; i++) {
      if (arrpos[i][0] == "h") {
        cb++;
      }
    }
    for (i = 9; i <= 12; i++) {
      if (arrpos[i][0] == "h") {
        cg++;
      }
    }
    for (i = 13; i <= 16; i++) {
      if (arrpos[i][0] == "h") {
        cy++;
      }
    }
    // console.log(cr, cg, cb, cy);
    if (
      (cr == 4 && cg == 4 && cb == 4) ||
      (cr == 4 && cg == 4 && cy == 4) ||
      (cb == 4 && cg == 4 && cy == 4) ||
      (cr == 4 && cb == 4 && cy == 4)
    ) {
      endgame();
      // alert("match ended");
      // console.log("matchended")
    }
  }
}
setInterval(checkwin, 500);
function re(){
    location.reload();
}
// setInterval(re, 1000);

setInterval(createarrayevery, 500);
// endgame();
function endgame() {
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
// $.ajax({
//     type: "POST",
//     url: "endgame.php",
//     // data: { setdun: 0, setid: id, fel: 0 },

//     success: function (result, status, xhr) {
//         // $("#showproblem1").html(result);
//         // cleardiv();
//         // // cleardiv();
//         // dun=0;
//         // dhu=1;
//         // setpos();

//     }

// });

// alert(ghname);
// var userid=2;
// function disableghuti(){

// if(userid!=id){

//     document.getElementById(ghname).disabled=true;
//     if(noofuser==4){

//     document.getElementById("kr1").disabled=true;
//     document.getElementById("kr2").disabled=true;
//     document.getElementById("kr3").disabled=true;
//     document.getElementById("kr4").disabled=true;
//     document.getElementById("kg1").disabled=true;
//     document.getElementById("kg2").disabled=true;
//     document.getElementById("kg3").disabled=true;
//     document.getElementById("kg4").disabled=true;
//     document.getElementById("kb1").disabled=true;
//     document.getElementById("kb2").disabled=true;
//     document.getElementById("kb3").disabled=true;
//     document.getElementById("kb4").disabled=true;
//     document.getElementById("ky1").disabled=true;
//     document.getElementById("ky3").disabled=true;
//     document.getElementById("ky4").disabled=true;
//     document.getElementById("ky2").disabled=true;
//     }
//     else if(noofuser==3){
//         document.getElementById("kr1").disabled=true;
//     document.getElementById("kr2").disabled=true;
//     document.getElementById("kr3").disabled=true;
//     document.getElementById("kr4").disabled=true;
//     document.getElementById("kg1").disabled=true;
//     document.getElementById("kg2").disabled=true;
//     document.getElementById("kg3").disabled=true;
//     document.getElementById("kg4").disabled=true;
//     document.getElementById("kb1").disabled=true;
//     document.getElementById("kb2").disabled=true;
//     document.getElementById("kb3").disabled=true;
//     document.getElementById("kb4").disabled=true;

//     }
//     else if(noofuser==2){
//         document.getElementById("kr1").disabled=true;
//     document.getElementById("kr2").disabled=true;
//     document.getElementById("kr3").disabled=true;
//     document.getElementById("kr4").disabled=true;
//     document.getElementById("kb1").disabled=true;
//     document.getElementById("kb2").disabled=true;
//     document.getElementById("kb3").disabled=true;
//     document.getElementById("kb4").disabled=true;

//     }

//     // document.getElementById("kr1").disabled=true;

// }
// else{
//     document.getElementById(ghname).disabled=false;

// }
// }
// endgame();
// function checkcolor(){
//   var laststep=document.getElementsByClassName("btnn").style.backgroundColor;
// console.log("hi"+laststep);
// }
// setInterval(checkcolor,500);
