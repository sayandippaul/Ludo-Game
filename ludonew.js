var n, result;
var selectdun, selectkardun, selectfel;


var pathobj = {};
for (var i = 1; i <= 76; i++) {
    pathobj[i] = {
        v: 0,
        arg: []
    };
}
console.log(pathobj);

var arrpos = [];
var arrnam = [];
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




    function setpos() {
        // alert(hi);
        for (var i = 1; i <= 16; i++) {

            p(i);
            // console.log(n);
            // h(i,n);
        }
        // alert(id)
        // createmainarr();
        console.log(arrpos);

    }

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

                arrpos.push(g);
                // console.log(g);

                arrnam[i] = a1a;
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
// function createmainarr(){


// for (var i = 1; i <= 16; i++) {
//     // alert(exa4);
//     var gg="exa"+i;
//     // arrpos[i]=eval(gg);/
// }
// }
// createmainarr();

function ghuti(a, b) {
    // alert(b);
    // a nam b position
    cutid = 0;
    // alert(sid);
    if ((b[0] == 'r' || b[0] == 'b' || b[0] == 'g' || b[0] == 'y') && sid == 1) {
        // alert("first");
        if (b[0] == 'r') {
            $.ajax({
                type: "POST",
                url: "dan.php",
                data: { dan: 2, name: a },

                success: function (result, status, xhr) {
                    // $("#showproblem1").html(result);

                    cleardiv();
                    setpos();

                }

            });

        }
        else if (b[0] == 'b') {
            $.ajax({
                type: "POST",
                url: "dan.php",
                data: { dan: 28, name: a },

                success: function (result, status, xhr) {
                    // $("#showproblem1").html(result);

                    cleardiv();
                    setpos();

                }

            });

        }
        else if (b[0] == 'g') {
            $.ajax({
                type: "POST",
                url: "dan.php",
                data: { dan: 15, name: a },

                success: function (result, status, xhr) {
                    // $("#showproblem1").html(result);

                    cleardiv();
                    setpos();

                }

            });

        }
        else if (b[0] == 'y') {
            $.ajax({
                type: "POST",
                url: "dan.php",
                data: { dan: 41, name: a },

                success: function (result, status, xhr) {
                    // $("#showproblem1").html(result);

                    cleardiv();
                    setpos();

                }

            });

        }

    }
    else if (b[0] != 'r' && b[0] != 'b' && b[0] != 'g' && b[0] != 'y') {
        // alert("helloedd");
        b = parseInt(b);




        dun = parseInt(dun);
        newbie(dun, a, b);

        dun = dun + b;


        // if()
        // alert(dun);
        if (dun > 52 && dun < 59 && a[0] != 'r') {
            dun = dun - 52;
        }

        dun1 = dun;
        if ((dun == 58 && a[0] == 'r') || (dun == 76 && a[0] == 'y') || (dun == 70 && a[0] == 'b') || (dun == 64 && a[0] == 'g')) {
            dun1 = 'h' + a;
            console.log(dun1);
        }
        // alert(dun);

        console.log(a, b);
        if (pathobj[dun].v == 1 && pathobj[dun].arg[0][0] != a[0] && (dun != 58 && dun != 76 && dun != 64 && dun != 70)) {
            // b=parseInt(b);
            if (dun == 10 || dun == 2 || dun == 23 || dun == 15 || dun == 28 || dun == 36 || dun == 41 || dun == 49) {
                // alert("2");
                $.ajax({
                    type: "POST",
                    url: "dan.php",
                    data: { dan: dun1, name: a },

                    success: function (result, status, xhr) {
                        // $("#showproblem1").html(result);
                        cleardiv();
                        setpos();

                    }

                });

            }
            else {
                var alu = pathobj[dun].arg[0];
                $.ajax({
                    type: "POST",
                    url: "dancut.php",
                    data: { dan: dun1, cutname: alu },

                    success: function (result, status, xhr) {
                        // $("#showproblem1").html(result);
                        cutid = 1;
                        if (a[0] == 'r') {
                            id = 1;
                        }
                        else if (a[0] == 'g') {
                            id = 2;
                        }
                        else if (a[0] == 'b') {
                            id = 3;
                        }
                        else if (a[0] == 'y') {
                            id = 4;
                        }

                        colgh(id);
                    }

                });
                $.ajax({
                    type: "POST",
                    url: "dan.php",
                    data: { dan: dun1, name: a },

                    success: function (result, status, xhr) {
                        // $("#showproblem1").html(result);
                        cleardiv();
                        setpos();

                    }

                });

                // alert("a[0]");

            }
        }
        else if (pathobj[dun].v == 1 && pathobj[dun].arg[0][0] == a[0]) {
            // var alu=pathobj[dun].arg[0];
            // alert("2");

            $.ajax({

                type: "POST",
                url: "dan.php",
                data: { dan: dun1, name: a },

                success: function (result, status, xhr) {
                    // $("#showproblem1").html(result);
                    cleardiv();
                    setpos();

                }

            });


        }
        else if (pathobj[dun].v > 1 && (dun != 10 && dun != 2 && dun != 23 && dun != 15 && dun != 28 && dun != 36 && dun != 41 && dun != 49)) {
            var divv = '<div style="height:auto;display:grid;grid-template-columns: repeat(' + pathobj[dun].v + ', auto);">'
            var divv1 = "";
            for (var i = 0; i < pathobj[dun].v; i++) {
                if (a[0] != pathobj[dun].arg[i][0]) {
                    kotaghuti.push(pathobj[dun].arg[i]);
                }
            }
            if (kotaghuti.length > 0) {


                for (var i = 0; i < pathobj[dun].v; i++) {
                    // kotaghuti[i]=pathobj[dun].arg[i];
                    if (kotaghuti[i][0] == 'r') {
                        divv1 += '<div class="cr" onclick="cutmany(`' + kotaghuti[i] + '`,`' + a + '`)" style="height:50px; width:100%;background-size: cover;"></div>'

                    }
                    else if (kotaghuti[i][0] == 'g') {
                        divv1 += '<div class="cg" onclick="cutmany(`' + kotaghuti[i] + '`,`' + a + '`)" style="height:50px; width:100%;background-size: cover;"></div>'

                    }
                    else if (kotaghuti[i][0] == 'y') {
                        divv1 += '<div class="cy" onclick="cutmany(`' + kotaghuti[i] + '`,`' + a + '`)" style="height:50px; width:100%;background-size: cover;"></div>'

                    }
                    else if (kotaghuti[i][0] == 'b') {
                        divv1 += '<div class="cb" onclick="cutmany(`' + kotaghuti[i] + '`,`' + a + '`)" style="height:50px; width:100%;background-size: cover;"></div>'

                    }


                }
                document.getElementById("showcut").innerHTML = divv + divv1 + '</div>'
                console.log(kotaghuti);
            }
            else {
                $.ajax({
                    type: "POST",
                    url: "dan.php",
                    data: { dan: dun1, name: a },

                    success: function (result, status, xhr) {
                        // $("#showproblem1").html(result);
                        cleardiv();
                        setpos();

                    }

                });

            }

        }
        else {
            console.log("hello");
            // alert("hello");

            $.ajax({
                type: "POST",
                url: "dan.php",
                data: { dan: dun1, name: a },

                success: function (result, status, xhr) {
                    // $("#showproblem1").html(result);
                    cleardiv();
                    // cleardiv();
                    setpos();

                }

            });
            // pathobj[dun].v=1;
        }
    }

    sid = 0;
    dun = 0;
    // setdun2();
    // arrnam1=[];
    //         arrpos1=[];

}
var kotaghuti = [];
var sid = 0;
var dun;
function cutmany(alu, a) {
    alert(alu);
    $.ajax({
        type: "POST",
        url: "dancut.php",
        data: { dan: dun1, cutname: alu },

        success: function (result, status, xhr) {
            // $("#showproblem1").html(result);
            cutid = 1;
            if (a[0] == 'r') {
                id = 1;
            }
            else if (a[0] == 'g') {
                id = 2;
            }
            else if (a[0] == 'b') {
                id = 3;
            }
            else if (a[0] == 'y') {
                id = 4;
            }

            colgh(id);
        }

    });
    $.ajax({
        type: "POST",
        url: "dan.php",
        data: { dan: dun1, name: a },

        success: function (result, status, xhr) {
            // $("#showproblem1").html(result);
            cleardiv();
            setpos();

        }

    });


}
var dun2;
function setdun1() {
    $.ajax({
        type: "POST",
        url: "setdan1.php",
        data: { setdun: dun2, setid: id, fel: 1 },

        success: function (result, status, xhr) {
            $("#showproblem1").html(result);
            // cleardiv();
            // // cleardiv();
            // setpos();

        }

    });

}
function setdun2() {
    $.ajax({
        type: "POST",
        url: "setdan1.php",
        data: { setdun: 0, setid: id, fel: 0 },

        success: function (result, status, xhr) {
            $("#showproblem1").html(result);
            // cleardiv();
            // // cleardiv();
            // setpos();

        }

    });

}
console.log(arrpos);
function dan() {
    // alert(dun);
    // cleardiv();
    // setpos();
    // if(dun!=0){
    //     document.getElementById("num").value=dun;

    // }
    dun = document.getElementById("num").value;
    //    dun2=dun;
    // setdun1();
    dun = parseInt(dun);
    kardun();
    if (dun == 6) {
        sid = 1;
        colgh(id);
        var dun5 = dun;
        gbshow1(sid, id, dun5);
    }
    else {
        sid = 0;
        var dun5 = dun;
        gbshow1(sid, id, dun5);

        id++;
        if (id > 4) {
            id = 1;
        }
    }
    cutid = 0;
}
var dun1;
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

    console.log(pathobj);


}
var id = 1;
// kardun();
// document.getElementById("dice").style.backgroundColor = "#ffd633";


// 1 red 2 green 3 blue 4 yellow
function kardun() {

    if (id == 1) {

        // document.getElementById("dice").style.background="red";
        // document.getElementById("dice").style.backgroundColor = "#FF0000";
        // document.getElementById('btn1').style.backgroundColor = "rgb(255, 0, 0)";
        // document.getElementById('btn1').innerHTML="1";
        document.getElementById('btn1').innerHTML = ' <div id="btn2" onclick="dan()" style="height: 35px;width: 35px;border: 2px solid black; " >fel</div> ';

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
    }
    else if (id == 2) {
        // alert("fghj");
        // document.getElementById('btn1').innerHTML="2";
        document.getElementById('btn1').innerHTML = ' <div id="btn3" onclick="dan()" style="height: 35px;width: 35px;border: 2px solid black; " >fel</div> ';


        document.getElementById("btn1").background = "rgb(0,255,0)";

        // document.getElementById('kr1').disabled = true;
        // document.getElementById('kr2').disabled = true;
        // document.getElementById('kr3').disabled = true;
        // document.getElementById('kr4').disabled = true;

        // document.getElementById('kg1').disabled = false;
        // document.getElementById('kg2').disabled = false;
        // document.getElementById('kg3').disabled = false;
        // document.getElementById('kg4').disabled = false;

        // document.getElementById('ky1').disabled = true;
        // document.getElementById('ky2').disabled = true;
        // document.getElementById('ky3').disabled = true;
        // document.getElementById('ky4').disabled = true;
        // document.getElementById('kb1').disabled = true;
        // document.getElementById('kb2').disabled = true;
        // document.getElementById('kb3').disabled = true;
        // document.getElementById('kb4').disabled = true;

    }
    else if (id == 3) {
        // document.getElementById("btn1").backgroundColor="blue";
        // document.getElementById('btn1').innerHTML="3";
        document.getElementById('btn1').innerHTML = ' <div id="btn4" onclick="dan()" style="height: 35px;width: 35px;border: 2px solid black; " >fel</div> ';



        // document.getElementById('kr1').disabled = true;
        // document.getElementById('kr2').disabled = true;
        // document.getElementById('kr3').disabled = true;
        // document.getElementById('kr4').disabled = true;

        // document.getElementById('kg1').disabled = true;
        // document.getElementById('kg2').disabled = true;
        // document.getElementById('kg3').disabled = true;
        // document.getElementById('kg4').disabled = true;

        // document.getElementById('ky1').disabled = true;
        // document.getElementById('ky2').disabled = true;
        // document.getElementById('ky3').disabled = true;
        // document.getElementById('ky4').disabled = true;

        // document.getElementById('kb1').disabled = false;
        // document.getElementById('kb2').disabled = false;
        // document.getElementById('kb3').disabled = false;
        // document.getElementById('kb4').disabled = false;

    }
    else {
        // document.getElementById("btn1").backgroundColor="yellow";
        // document.getElementById('btn1').innerHTML=' <div id="btn0" onclick="dan()" style="height: 35px;width: 35px;border: 2px solid black; " >fel</div> ';            
        // document.getElementById('kr1').disabled = true;
        // document.getElementById('kr2').disabled = true;
        // document.getElementById('kr3').disabled = true;
        // document.getElementById('kr4').disabled = true;

        // document.getElementById('kg1').disabled = true;
        // document.getElementById('kg2').disabled = true;
        // document.getElementById('kg3').disabled = true;
        // document.getElementById('kg4').disabled = true;

        // document.getElementById('ky1').disabled = false;
        // document.getElementById('ky2').disabled = false;
        // document.getElementById('ky3').disabled = false;
        // document.getElementById('ky4').disabled = false;

        // document.getElementById('kb1').disabled = true;
        // document.getElementById('kb2').disabled = true;
        // document.getElementById('kb3').disabled = true;
        // document.getElementById('kb4').disabled = true;


    }
}
function colgh(i) {
    // alert(2);
    if (i == 1) {
        document.getElementById('btn1').innerHTML = ' <div id="btn0" onclick="dan()" style="height: 35px;width: 35px;border: 2px solid black; " >fel</div> ';

    }
    else if (i == 2) {
        document.getElementById('btn1').innerHTML = ' <div id="btn2" onclick="dan()" style="height: 35px;width: 35px;border: 2px solid black; " >fel</div> ';

    }
    else if (i == 3) {
        document.getElementById('btn1').innerHTML = ' <div id="btn3" onclick="dan()" style="height: 35px;width: 35px;border: 2px solid black; " >fel</div> ';

    }
    else if (i == 4) {
        document.getElementById('btn1').innerHTML = ' <div id="btn4" onclick="dan()" style="height: 35px;width: 35px;border: 2px solid black; " >fel</div> ';

    }
}
function newbie(i, gname, b) {
    i = i + b;
    //  alert(i,b);
    console.log(i, b);

    if (gname[0] == 'g' && (i > 13 && i < 20) && b < 14) {
        i = i + 45;
        dun = i - b;
    }
    else if (gname[0] == 'b' && (i > 26 && i < 33) && b < 27) {
        i = i + 38;
        dun = i - b;

    }
    else if (gname[0] == 'y' && (i > 39 && i < 46) && b < 38) {
        i = i + 31;
        dun = i - b;

    }

}
var cutid = 0;
function createarray(id) {
    // console.log(arrpos);
    // alert("dh")
    // alert(id);
    // cleardiv();
    // setpos();
    // console.log(proarr);
    for (var i = 0; i < 16; i++) {

        if (id == 1) {
            if (arrnam[i][0] == 'r' || arrnam[i][1] == 'r') {
                arrnam1.push(arrnam[i]);
                arrpos1.push(arrpos[i]);
            }
        }
        else if (id == 2) {
            if (arrnam[i][0] == 'g' || arrnam[i][1] == 'g') {
                arrnam1.push(arrnam[i]);
                arrpos1.push(arrpos[i]);
            }
        }
        else if (id == 3) {
            if (arrnam[i][0] == 'b' || arrnam[i][1] == 'b') {
                arrnam1.push(arrnam[i]);
                arrpos1.push(arrpos[i]);
            }
        } else if (id == 4) {
            if (arrnam[i][0] == 'y' || arrnam[i][1] == '') {
                arrnam1.push(arrnam[i]);
                arrpos1.push(arrpos[i]);
            }
        }

    }
}
var arrnam1 = [];
var arrpos1 = [];

function gbshow1(sid, id, dun5) {
    createarray(id);
    console.log(arrpos1);
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


    //    }
    if (id == 1) {


        for (var i = 0; i < 4; i++) {
            checkred(i, dun5);
        }


    }


    else if (id == 2) {
        for (var i = 0; i < 4; i++) {
            checkgreen(i, dun5);
        }


    }
    else if (id == 3) {
        for (var i = 0; i < 4; i++) {
            checkblue(i, dun5);
        }


    }
    else if (id == 4) {
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

        if (arrpos1[i][0] == 'r') {
            // alert("rag");
            console.log("rag2");
            var rp = 'k' + arrnam1[i];
            document.getElementById(rp).disabled = false;
            document.getElementById(rp).style.boxShadow = "10px 20px 30px blue";

        }
        else if (arrpos1[i][0] == 'h') {
            // var rp=arrpos1[i];
            var rp = 'k' + arrnam1[i];

            document.getElementById(rp).disabled = true;

        }
        // }
        else {
            // var rp=arrpos1[i];
            var rp1 = parseInt(arrpos1[i]);
            var d = parseInt(d);

            if ((rp1 + d) < 59) {


                var rp = 'k' + arrnam1[i];

                document.getElementById(rp).disabled = false;
                document.getElementById(rp).style.boxShadow = "10px 20px 30px blue";
            }
            else {
                var rp = 'k' + arrnam1[i];

                document.getElementById(rp).disabled = true;

            }
        }
    }
    else {

        if (arrpos1[i][0] == 'r') {
            // var rp=arrpos1[i];
            var rp = 'k' + arrnam1[i];

            document.getElementById(rp).disabled = true;


        }
        else if (arrpos1[i][0] == 'h') {
            var rp = 'k' + arrnam1[i];

            document.getElementById(rp).disabled = true;

        }
        else {
            // var rp=arrpos1[i];
            // var rp='k'+arrnam1[i];

            // document.getElementById(rp).disabled=false;
            // document.getElementById(rp).style.boxShadow = "10px 20px 30px blue";
            var rp1 = parseInt(arrpos1[i]);
            var d = parseInt(d);

            if ((rp1 + d) < 59) {


                var rp = 'k' + arrnam1[i];

                document.getElementById(rp).disabled = false;
                document.getElementById(rp).style.boxShadow = "10px 20px 30px blue";
            }
            else {
                var rp = 'k' + arrnam1[i];

                document.getElementById(rp).disabled = true;

            }
        }
    }

}


function checkgreen(i, d) {
    if (sid == 1) {
        // alert("hi");
        // if(arrpos1[i][0]=='r' || arrpos1[i][0]=='h' ){
        // alert("j");
        // console.log("rag");

        if (arrpos1[i][0] == 'g') {
            // alert("rag");
            console.log("rag2");
            var rp = 'k' + arrnam1[i];
            document.getElementById(rp).disabled = false;
            document.getElementById(rp).style.boxShadow = "10px 20px 30px blue";

        }
        else if (arrpos1[i][0] == 'h') {
            // var rp=arrpos1[i];
            var rp = 'k' + arrnam1[i];

            document.getElementById(rp).disabled = true;

        }
        // }
        else {
            // var rp=arrpos1[i];
            var rp1 = parseInt(arrpos1[i]);
            var d = parseInt(d);

            if ((rp1 + d) < 65) {


                var rp = 'k' + arrnam1[i];

                document.getElementById(rp).disabled = false;
                document.getElementById(rp).style.boxShadow = "10px 20px 30px blue";
            }
            else {
                var rp = 'k' + arrnam1[i];

                document.getElementById(rp).disabled = true;

            }
        }
    }
    else {

        if (arrpos1[i][0] == 'g' || arrpos1[i][0] == 'h') {
            // var rp=arrpos1[i];
            var rp = 'k' + arrnam1[i];

            document.getElementById(rp).disabled = true;


        }
        else {
            // var rp=arrpos1[i];
            // var rp='k'+arrnam1[i];

            // document.getElementById(rp).disabled=false;
            // document.getElementById(rp).style.boxShadow = "10px 20px 30px blue";
            var rp1 = parseInt(arrpos1[i]);
            var d = parseInt(d);

            if ((rp1 + d) < 65) {


                var rp = 'k' + arrnam1[i];

                document.getElementById(rp).disabled = false;
                document.getElementById(rp).style.boxShadow = "10px 20px 30px blue";
            }
            else {
                var rp = 'k' + arrnam1[i];

                document.getElementById(rp).disabled = true;

            }
        }
    }

}


function checkblue(i, d) {
    if (sid == 1) {
        // alert("hi");
        // if(arrpos1[i][0]=='r' || arrpos1[i][0]=='h' ){
        // alert("j");
        // console.log("rag");

        if (arrpos1[i][0] == 'b') {
            // alert("rag");
            console.log("rag2");
            var rp = 'k' + arrnam1[i];
            document.getElementById(rp).disabled = false;
            document.getElementById(rp).style.boxShadow = "10px 20px 30px blue";

        }
        else if (arrpos1[i][0] == 'h') {
            // var rp=arrpos1[i];
            var rp = 'k' + arrnam1[i];

            document.getElementById(rp).disabled = true;

        }
        // }
        else {
            // var rp=arrpos1[i];
            var rp1 = parseInt(arrpos1[i]);
            var d = parseInt(d);

            if ((rp1 + d) < 71) {


                var rp = 'k' + arrnam1[i];

                document.getElementById(rp).disabled = false;
                document.getElementById(rp).style.boxShadow = "10px 20px 30px blue";
            }
            else {
                var rp = 'k' + arrnam1[i];

                document.getElementById(rp).disabled = true;

            }
        }
    }
    else {

        if (arrpos1[i][0] == 'b' || arrpos1[i][0] == 'h') {
            // var rp=arrpos1[i];
            var rp = 'k' + arrnam1[i];

            document.getElementById(rp).disabled = true;


        }
        else {
            // var rp=arrpos1[i];
            // var rp='k'+arrnam1[i];

            // document.getElementById(rp).disabled=false;
            // document.getElementById(rp).style.boxShadow = "10px 20px 30px blue";
            var rp1 = parseInt(arrpos1[i]);
            var d = parseInt(d);

            if ((rp1 + d) < 71) {


                var rp = 'k' + arrnam1[i];

                document.getElementById(rp).disabled = false;
                document.getElementById(rp).style.boxShadow = "10px 20px 30px blue";
            }
            else {
                var rp = 'k' + arrnam1[i];

                document.getElementById(rp).disabled = true;

            }
        }
    }

}



function checkyellow(i, d) {
    if (sid == 1) {
        // alert("hi");
        // if(arrpos1[i][0]=='r' || arrpos1[i][0]=='h' ){
        // alert("j");
        // console.log("rag");

        if (arrpos1[i][0] == 'y') {
            // alert("rag");
            console.log("rag2");
            var rp = 'k' + arrnam1[i];
            document.getElementById(rp).disabled = false;
            document.getElementById(rp).style.boxShadow = "10px 20px 30px blue";

        }
        else if (arrpos1[i][0] == 'h') {
            // var rp=arrpos1[i];
            var rp = 'k' + arrnam1[i];

            document.getElementById(rp).disabled = true;

        }
        // }
        else {
            // var rp=arrpos1[i];
            var rp1 = parseInt(arrpos1[i]);
            var d = parseInt(d);

            if ((rp1 + d) < 77) {


                var rp = 'k' + arrnam1[i];

                document.getElementById(rp).disabled = false;
                document.getElementById(rp).style.boxShadow = "10px 20px 30px blue";
            }
            else {
                var rp = 'k' + arrnam1[i];

                document.getElementById(rp).disabled = true;

            }
        }
    }
    else {

        if (arrpos1[i][0] == 'y' || arrpos1[i][0] == 'h') {
            // var rp=arrpos1[i];
            var rp = 'k' + arrnam1[i];

            document.getElementById(rp).disabled = true;


        }
        else {
            // var rp=arrpos1[i];
            // var rp='k'+arrnam1[i];

            // document.getElementById(rp).disabled=false;
            // document.getElementById(rp).style.boxShadow = "10px 20px 30px blue";
            var rp1 = parseInt(arrpos1[i]);
            var d = parseInt(d);

            if ((rp1 + d) < 77) {


                var rp = 'k' + arrnam1[i];

                document.getElementById(rp).disabled = false;
                document.getElementById(rp).style.boxShadow = "10px 20px 30px blue";
            }
            else {
                var rp = 'k' + arrnam1[i];

                document.getElementById(rp).disabled = true;

            }
        }
    }

}
// endgame();


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
    // }