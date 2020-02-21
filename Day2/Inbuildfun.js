// var num1=16.6;
// console.log(Math.floor(num1));

// var num2=16.3;
// console.log(Math.floor(num2));

// var num3=-16.3;
// console.log(Math.floor(num3));
// var num4=-1.3;
// console.log(Math.floor(num4));
// var num5=-1;
// console.log(Math.floor(num5));
// var num6=16;
// console.log(Math.floor(num6));
//ceil

// var mynum1=16.6;
// console.log(Math.ceil(mynum1));
// var mynum2=16.4;
// console.log(Math.ceil(mynum2));
// var mynum3=-16.4;
// console.log(Math.ceil(mynum3));

//String Function

var str='Hello JavaScript Hello';
console.log(str.indexOf("Hello"));
console.log(str.lastIndexOf("Hello"));
console.log(str.charAt(3));
console.log("Ascii Value of character "+str.charCodeAt(3));

var str1="Aa";
console.log("Ascii value of A "+str1.charCodeAt(0));
console.log("Ascii value of a "+str1.charCodeAt(1));
var str2="Welcome";

console.log(str.concat(" "+str2));

var str3="Hopes so you are not Sleep!!!! ";
var str4=str3.slice(7,11);
console.log("Slice method return string "+str4);
var str5=str3.slice(7,-1);
console.log("Slice method return string with -1end index "+str5);
var str6=str3.slice(7);
console.log("Slice Method without giving end index "+str6);
var str7=str3.slice();
console.log("Without Any parameter "+str7);

