var cvs=document.getElementById("canva").getContext("2d");
var sposx=80;
var sposy=80;
var nposx=0;
var nposy=0;


window.onload = function (){
    document.addEventListener("keydown",inputcontrol);
setInterval(main,500);
}

function main(){
    var cl;

    sposx+=nposx;
    sposy+=nposy;



cvs.fillStyle="black";
cvs.fillRect(0,0,400,400);

for(cl=0;cl<400;cl+=20){
    cvs.moveTo(cl,0);
    cvs.lineTo(cl,400);
}
for(cl=0;cl<400;cl+=20){
    cvs.moveTo(0,cl);
    cvs.lineTo(400,cl);

}
cvs.strokeStyle="white"
cvs.stroke();


cvs.fillStyle="green";
cvs.fillRect(sposx,sposy,20,20);

cvs.fillStyle="red";
cvs.fillRect(120,120,20,20);



}
function inputcontrol(e){
    console.log(e.keyCode);
    if(e.keyCode==38){
        nposy-=20;
        nposx=0;

    }
    else if(e.keyCode==40){
        nposy+=20;
        nposx=0;
    }
    else if(e.keyCode==39){
        nposx+=20;
        nposy=0;
    }
    else if(e.keyCode==37){
        nposx-=20;
        nposy=0;

    }

}