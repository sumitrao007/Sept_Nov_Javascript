var arr1=[1,2,3,4];
var resarr = arr1.map( (value)=>{
    return (value*value);
}
);
console.log("Result is "+resarr.join(" "));

var arr2=[2,3,4,5];
var resarr2=arr2.map((myvalue)=>{
    return (myvalue*myvalue*myvalue);
});
console.log("Cube of number "+resarr2.join(" "));

var resarr3=arr2.map((value,i)=>{
    if(i==1 || i==2){
        return (value*value*value);
    }

});
console.log("Particular value cube is "+resarr3.join("  "));

var resarr4=arr2.slice(1,3).map((value)=>{
    return (value*value);
});
console.log("square using Slice Method with map func "+resarr4);

var mystr=["z a","a x","f m","b g","q t"];
console.log("Original Data is "+mystr);
console.log(mystr.sort().join("  "));
console.log("Desending the array "+mystr.reverse().join("  "));

var arr3=[95,9,-1,15,37,64,24,420,0];
console.log(""+arr3.join(" "));
var temparr=arr3.slice();
console.log(temparr.sort(
    (a,b)=>{
    return (a-b);
}
)
);

var temparr2=arr3.slice();
console.log(""+arr3.join(" "));
console.log(temparr2.sort((a1,b1)=>{
    return (b1-a1);
}));
