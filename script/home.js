var hours=document.getElementById("hours");
var minutes=document.getElementById("minutes");
var seconds=document.getElementById("seconds");
window.setInterval(()=>{
    var d=new Date();
    // console.log(d);
    var h=d.getHours();
    var m=d.getMinutes();
    var s=d.getSeconds();
    h=setBackground(h);
    hours.innerHTML=format(h);
    minutes.innerHTML=format(m);
    seconds.innerHTML=format(s);
},1000);
function format(n){
    if(n<10)
        n="0"+n;
    return n;
}
function setBackground(n){
    if(n>=18 || n<=6)
    document.body.style["background-color"]="rgba(39, 42, 44,0.5)";
    else
    document.body.style["background-color"]="aliceblue";
    if(n>12){
        n-=12;
    }

    return n;
}