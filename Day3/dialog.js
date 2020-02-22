function alertdialog(){
    let name='Sumit Raokhande';
    alert("Hi Welcome "+name);//alert is inbuild function supported for browser
}

function promptdialog(){
    var str=prompt("Enter the Name");//prompt is inbuild function supported for browser
    alert("Hi "+str);
}

function confirmdialog(){
    var res=confirm("Do You want install?");//confirm is inbuild function supported for browser
    console.log(res);

    if(res==true){
        alert("Your installation start within a second!!!");
    }else{
        alert("Thank For visit our Website");
    }


}