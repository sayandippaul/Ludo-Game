// alert("hi");
//  tname=<?php echo json_encode($tname); ?>
    //  tpost=<?php echo json_encode($tpost); ?>
    var pathobj={};
    for(var i=1;i<=52;i++){
        pathobj[i] = {
            v:0,
            t:0,
            arg:[]
          };
        }
var postobj,postobj1,arrsol=[],posti,posti1,post;
function position(){
        $.ajax({
        type: "POST",
        url: "position.php",
        // data: {sid:id},
        
        success: function (result, status, xhr){
            $("#showproblem").html(result);
            
            sala();
            }
            
    });
}
function sala(){
    post=document.getElementById("showproblem").innerHTML;
    post=post.slice(0,-1);
    post="{"+post+"}";
    document.getElementById("showproblem").innerHTML=post;
    postobj=JSON.parse(post);
    // console.log(Object.values(postobj)[0]);
    // alert(postobj);
    for(i=0;i<16;i++){
        // alert(Object.values(postobj)[i]);
        var pro=Object.values(postobj)[i];
        // arrsol[i]=Object.values(postobj)[i]
        arrsol[i]=pro;
    }
    const count = {};

for (const element of arrsol) {
  if (count[element]) {
    count[element] += 1;
    
  } else {
    count[element] = 1;
  }
}
console.log(count);
// for(var i=0;i<Object.keys(count).length;i++){
//     var nor1=Object.values(count)[i];
//     var nor=Object.keys(count)[i];
//     // alert(nor);
//     // alert(nor1);

// console.log(nor1,nor);
//     if(nor[0]!='r' && nor[0]!='b' && nor[0]!='g'&& nor[0]!='y'){
//         // alert("h");
//         nor=parseInt(nor);
//         // alert(nor);
//         pathobj[nor].v=nor1;
//     }
// }
;
postobj1=Object.entries(postobj).sort((a,b) => b[1]-a[1]);
console.log(postobj1);
// setpos();
setTimeout(() => {setpos()
    
}, 1000);
  
   
    

}
setTimeout(sala(), 1000);
position();
function setpos(){
    // cleardiv();
    for(var i=0;i<16;i++){
        posti=Object.values(postobj)[i];
        posti1=Object.keys(postobj)[i];
       // console.log(posti);
       var t=posti1;
       var t1=parseInt( posti1);

       var creatediv="",temp="";
       
// console.log();
       if(  posti[0]!='r' && posti[0]!='b' && posti[0]!='g'&& posti[0]!='y' ){
           // for(var j=0;j<)
        //    alert("k");
        //    for(var i=0;i<2;i++){
        //        creatediv=creatediv+" 1fr ";
        //     //    pathobj[posti].arg[i]=posti1;

        //    }
        //    var cr='<div style="display:grid;grid-template-columns:'+creatediv+'">';
        //    for(var i=0;i<pathobj[posti].v;i++){
        //        temp=temp+'<div   onclick="ghuti(`'+pathobj[posti].arg[i]+'`)" style="margin: auto; height: 50%;width:50%;background-image: url('+pathobj[posti].arg[i]+'.jpeg);background-size: cover;border: 5px solid black;"></div>';
        //    }
        //    document.getElementById(posti).innerHTML=cr+temp;
        var div='<div   onclick="ghuti(`'+t +'`,'+ `'`+posti +`'`+')" style="margin: auto; height: 50%;width:50%;background-image: url('+posti1+'.jpeg);background-size: cover;border: 5px solid black;"></div>';

        document.getElementById(posti).innerHTML+=div;


       }
   
       else{

                   var div='<div   onclick="ghuti(`'+t +'`,'+ `'`+posti +`'`+')" style="margin: auto; height: 50%;width:50%;background-image: url('+posti1+'.jpeg);background-size: cover;border: 5px solid black;"></div>';
                    document.getElementById(posti).innerHTML+=div;
       }
   
        //    if(posti[0]!='r' && posti[0]!='b' && posti[0]!='g'&& posti[0]!='y' &&  pathobj[posti].v<1){

        //        pathobj[posti].v=1;
        //        pathobj[posti].t=posti1;
        //        pathobj[posti].arg[0]=posti1;

        //    }

       


    }
}
function ghuti(p,q){
    // alert(p);
    // console.log(p);
    // q=parseInt(q);
    
    cleardiv();
    // ghuti(p);
    
    if(pathobj[dun].v==1 ){
        // alert(pathobj[dun].t[0]);
        // alert(p[0]);

        if(pathobj[dun].t[0]==p[0]){
            alert("jo");
                pathobj[dun].v=1+pathobj[dun].v;
                // position();
                $.ajax({
                    type: "POST",
                    url: "dan.php",
                    data: {dan:dun,name:p},
                    
                    success: function (result, status, xhr){
                        $("#showproblem1").html(result);
                        if(q[0]!='r' && q[0]!='b' && q[0]!='g'&& q[0]!='y'){
                            
                            pathobj[q].v=(pathobj[q].v)-1; 
                            pathobj[q].t=0;
                            pathobj[q].arg=[];
                            document.getElementById(q).innerHTML=q;
                            
                            // position();
                            setpos();
                        }
                        else{
                            document.getElementById(q).innerHTML="";
                            setpos();
                            // position();
        
                        }
        
                        }
                        
                });
        

        }
        else{

        
        // alert("ji");
        $.ajax({
            type: "POST",
            url: "dancut.php",
            data: {dan:dun,name:p,cutname:pathobj[dun].t},
            
            success: function (result, status, xhr){
                $("#showproblem1").html(result);
                // alert(q[0]);
                if(q[0]!='r' && q[0]!='b' && q[0]!='g'&& q[0]!='y'){
                    
                    pathobj[q].v=(pathobj[q].v)-1; 
                    pathobj[q].t=0;
                    pathobj[q].arg=[];
                    
                }
                else{
                    document.getElementById(q).innerHTML="";
                }

                // position();
              
                }
                
        });
        $.ajax({
            type: "POST",
            url: "dan.php",
            data: {dan:dun,name:p},
            
            success: function (result, status, xhr){
                $("#showproblem1").html(result);
                setpos();
                
                }
                
        });
        // pathobj[dun].v=1;

        
    }

    }
    else{
        $.ajax({
            type: "POST",
            url: "dan.php",
            data: {dan:dun,name:p},
            
            success: function (result, status, xhr){
                $("#showproblem1").html(result);
                if(q[0]!='r' && q[0]!='b' && q[0]!='g'&& q[0]!='y'){
                    
                    pathobj[q].v=(pathobj[q].v)-1; 
                    pathobj[q].t=0;
                    pathobj[q].arg=[];
                    document.getElementById(q).innerHTML=q;
                    
                            setpos();
                            // position();
                }
                else{
                    document.getElementById(q).innerHTML="";
                    // position();
                    setpos();

                }

                }
                
        });
        
    }
    
    location.reload();
    // $("#divToReload").load(location.href+" #divToReload>*","");
    // $("#left").load(location.href + "#left");
    // alert(q);
    // s
    // cleardiv();

    // position();




    

    
    
    
}
function cleardiv(){
    for(var i=1;i<=52;i++){
        document.getElementById(i).innerHTML=i;
    }
    console.log(pathobj);


}
// setInterval(position,500);
// setInterval(cleardiv,5000);



    var dun;
    function dan(){
     dun=document.getElementById("num").value;
    }
    
// }