function net(e,spanid) {
    console.log(e);
    if (e.value=="") {
        document.getElementById(spanid).style.color="red";
        document.getElementById(spanid).innerHTML="this field require";
    }
}
function emailcheck(e,spanid) {
    let email="^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$";
    if (email.test(e.value)) {
        document.getElementById(spanid).innerHTML=""; 
    }
    else{
        document.getElementById(spanid).style.color="red";
        document.getElementById(spanid).innerHTML="please write correct email";
    }
    
}