//without argument without return type
add();//call the function

function add(){ // Function Definition
  let num1=2;
  let num2=3;
  console.log("Addition is "+(num1+num2));  
}

//with argument without return

function add1(num1,num2){
    console.log("Addition is "+(num1+num2));
}

add1(20,30);

//Without Argument but with return

function add2(){
    return (5+6);
}

var res=add2();
console.log("Result is "+res);

//With argument with return type

function add3(num1,num2){
    return (num1+num2);
}
var res1=add3(40,40);
console.log("Func has with return & with argument "+res1);