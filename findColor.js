document.querySelector(".ok").addEventListener("click",function(){
const a=new Array();
for(var i=0;i<18;i++)
{  let v=i;
      a[i]=(Math.floor(Math.random()*256));
}
var k=`rgb(`;
var l=`)`
var fst1=document.querySelector(".first");
fst1.style.backgroundColor=k + a[0] + ',' + a[1] + ',' + a[2] + l;
var fst2=document.querySelector(".second");
fst2.style.backgroundColor=k + a[3] + ',' + a[4] + ',' + a[5] + l;
var fst3=document.querySelector(".third");
fst3.style.backgroundColor=k + a[6] + ',' + a[7] + ',' + a[8] + l;
var fst4=document.querySelector(".fourth");
fst4.style.backgroundColor=k + a[9] + ',' + a[10] + ',' + a[11] + l;
var fst5=document.querySelector(".fifth");
fst5.style.backgroundColor=k + a[12] + ',' + a[13] + ',' + a[14] + l;
var fst6=document.querySelector(".sixth");
fst6.style.backgroundColor=k + a[15] + ',' + a[16] + ',' + a[17] + l;
var m=(Math.floor(Math.random()*6))*3;
 var n=document.querySelector(".n");
 n.innerHTML=k + a[m] + ", " + a[m+1] + ", " + a[m+2] + l;
 console.log(n.innerHTML);
 console.log(document.querySelectorAll(".a")[0].style.backgroundColor);
for(var j=0;j<document.querySelectorAll(".a").length;j++)
{
      let v=j;
      document.querySelectorAll(".a")[v].addEventListener("click",function(){
             if(document.querySelectorAll(".a")[v].style.backgroundColor==n.innerHTML)
             {
                   document.querySelector(".m").innerHTML='YOUR GUESS IS ABSOLUTELY RIGHT!';
             }
      });
}

});