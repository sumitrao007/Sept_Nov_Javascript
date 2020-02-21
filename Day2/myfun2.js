//anonymous Function

var temp=function (num1,num2){
    console.log("Multiplication is "+(num1*num2));
}

temp(10,20);
var temp1=function (num1,num2){
    return (num1*num2);
}

console.log("With return & with argument "+temp1(3,2));


//Arrow Function/ Fat arrow Function

var temp2=()=>{
    console.log("Hello U are in fat Arrow Function");
}

temp2();

var temp3=str=>console.log("My String is===== "+str);

temp3("Fat Arrow Function Called");

var temp4=(num1,num2)=>{
    let res=num1*num2;
    return res;
}

var result=temp4(10,20);
console.log("Result is "+result);