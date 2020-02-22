var arr=[10,20,30,40];
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);    
}

console.log(arr);
console.log(arr.join('@'));
console.log(arr.join(" "));
console.log(arr.join());

var arrstr=['Angular 7','MEAN Stack','React js','Vue js','Ember js'];
console.log(arrstr);

var arr1=[10,'Sumit Raokhande',true];
console.log(arr1.join("  "));

var arr3=[];
console.log(arr3);
arr3.push(100);
arr3.push(200);
arr3.push(300);
console.log(arr3);

let val=arr3.pop();
console.log("Array valie is "+arr3);
console.log("Poped value is "+val);

var arr4=[];

console.log("--------------------------------------------------");
arr4.splice(0,0,10,20,30);
console.log(arr4.join(" "));
arr4.splice(1,0,40,50,60);
console.log(arr4.join(" "));
arr4.splice(3,1);
console.log(arr4.join(" "));
arr4.splice(2,1,90);
console.log(arr4.join(" "));
arr4.splice(3,1,200,300,400,500);
console.log(arr4.join(" "));


