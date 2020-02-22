function Myclick(){
    var num1=document.getElementById("num1");
    var num2=document.getElementById("num2");
    var res=parseInt(num1.value) + parseInt (num2.value);
   // document.write("Addition is "+res);

   var result=document.getElementById("res");
   result.value=res;
   num1.style.background="green";
var reslabel=document.getElementById("reslabel");

reslabel.innerHTML=res;

var mydiv=document.getElementById("mydiv");
mydiv.innerHTML=res;

}