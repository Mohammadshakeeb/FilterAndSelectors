function myFunction(){
     var name=document.getElementById('name').value
     var mob=document.getElementById('mobile').value
     checkVal(name,mob);
     console.log(name,mob);
     if(name && mob){
         return true;
     }else{
         document.getElementById('name').style.borderColor="red";
         document.getElementById('mobile').style.borderColor="red";
         document.getElementById("output").innerHTML="enter the details";
     }
     
    }

function checkVal(name,mob){
    if (isNaN(mobile) || !isNaN(name)) {
        if (isNaN(mob)) {
            document.getElementById('mobile').style.borderColor="red";
            document.getElementById("output2").innerHTML="enter correct mobile number";
            document.getElementById("output2").style.color="red";
            
        }
        if (!isNaN(name)) {
            document.getElementById('name').style.borderColor="red";
            document.getElementById("output3").innerHTML="enter correct name";
            document.getElementById("output3").style.color="red";

        }
}
}


     
