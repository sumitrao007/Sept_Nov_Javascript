function validation(){
    var gender=document.getElementsByName("gender");

    var Checkbox=document.getElementsByName("Checkbox");
    var cnt=0;
var city=document.getElementById("city").value;

    for(let i=0;i<Checkbox.length;i++){
        if(Checkbox[i].checked==true){
            cnt++;
        }
    }


    if(gender[0].checked==false && gender[1].checked==false){
     //   alert("Please Select Gender");
    }else{
     //   alert("Thank You For Gender Selection!!!!");
    }

    if(cnt==0){
      //  alert("Please Select at least one CheckBox!!!");
    }else{
       // alert("Thank for Technology Selection");
    }

    if(city==="selectcity"){
        alert("Please Select one option from drop down box!!!");
    }else{
        alert("Thank you form city Selection");
    }


}