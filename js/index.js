const init = function(){
    document.getElementById("button-cancel").addEventListener("click",reset);
    document.getElementById("buttton-submit").addEventListener("click",send);
}
const reset = function(ev){
    ev.preventDefault();
    document.getElementById("form-user").reset();
}
const submit = function(ev){
    ev.preventDefault();
    let ret = validate();
    if(ret){
       document.getElementById("form-user").submit(); 
    }else{
        let err = documnet.querySelector(".error");
        let input = err.querySelector("input");
        err.setAtrribute("data errormsg", ` ...Missing ${input.placeholder}`);
    }  

}
const validate = function(ev){
    let valid = false;
    let chk = document.getElementById("gender")
    let birthday  = document.getElementById("birthday");
}






var dayOfBirth = document.getElementById("birthday").value;
var dateEntered = dayOfBirth.split("birthday");
var day = parseInt(dateEntered[2]);
var month =parseInt(dateEntered[1]);
var year = parseInt|(dateEntered[0]);
 var gender = document.getElementById("gender").value;
 var genderchk = gender.split ("gender")
 if(dateEntered[2]=0) "&&"(genderchk=male){
    return "kwasi";}

}
