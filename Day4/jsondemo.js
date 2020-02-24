// json= javascript object notation
//json store the value is key & value format 
var myjson={
    fname:"Sumit",
    lname:"Raokhande",
    rollno:1
}

console.log(myjson.fname);
console.log(myjson.lname);
console.log(myjson.rollno);
var myjson1={
    fname:"Sumit",
    lname:"Raokhande",
    rollno:1,
    fullname:(a1,a2)=>{
        return (a1+" "+a2);
    }
}
//console.log("Full name is "+myjson1.fullname(myjson1.fname,myjson1.lname));

//array of object
var myjson2=[
    {
        fname:"Sumit",
        lname:"Raokhande",
        id:1
    },
    {
        fname:"Kiran",
        lname:"Raokhande",
        id:2
    },
    {
        fname:"Spruha",
        lname:"Raokhande",
        id:3
    }
];

// console.log("First name "+myjson2[1].fname);
// console.log("Last  name "+myjson2[1].lname);
// console.log("ID "+myjson2[1].id);
// console.log("------------------List of data--------------------------");
// for(let i=0;i<myjson2.length;i++){
//     console.log("First name "+myjson2[i].fname);
//     console.log("Last name "+myjson2[i].lname);
//     console.log("id name "+myjson2[i].id);
//     console.log("================================");
// }
//for each loop
// console.log("==========Using For Each Loop ======================");
// myjson2.forEach((item)=>{
//     console.log("First name "+item.fname);
//     console.log("Last name "+item.lname);
//     console.log("id name "+item.id);
//     console.log("================================");
// });

//industry json
var indusjson={
    success:"ok",
    data:[
        {
            prodname:"Perfume",
            quantity:5,
            price:120,
            description:"Product is aswsome!!!!"
        },
        {
            prodname:"Perfume2",
            quantity:2,
            price:120,
            description:"Product is good!!!!"
        },
        {
            prodname:"Perfume3",
            quantity:15,
            price:220,
            description:"Product is Mast!!!!"
        }
    ],
    error:"Data is not present"
}

console.log("Success is "+indusjson.success);
console.log("Success is "+indusjson.error);
console.log("==================================");
indusjson.data.forEach((item)=>{
    console.log("Product name "+item.prodname);
    console.log("Product Quantity "+item.quantity);
    console.log("Product price "+item.price);
    console.log("Product Description "+item.description);
    console.log("==================================");
});

var myjson2={
    sucess:"ok",
    data:{
        fname:"Sumit",
        lname:"Raokhande",
        id:1
    }
}
console.log("--------------------------------------");
console.log("First name is "+myjson2.data.fname);