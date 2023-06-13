function valid() {

    /* First Name */
    let f_nm = document.getElementById("f_nm").value;

    //check empty
    if (f_nm == "") {
        document.getElementById("f_msg").innerHTML = "<i>Please enter your first name</i>";
        document.getElementById("f_nm").style.border="solid 1px red";
        return false;
    }

    flag = 0;
    for (i = 0; i <= f_nm.length; i++) {
        if (f_nm.charCodeAt(i) >= 65 && f_nm.charCodeAt(i) <= 90) {
            flag = 1;
        }

        else if(f_nm.charCodeAt(i)>=97 && f_nm.charCodeAt(i)<=122){
            flag=1;
        }
        if (f_nm.charCodeAt(i) == 32) {
            flag = 0;
            break;
        }
        
    }

    // check only space and first name valid only
    if (flag == 0) {
        document.getElementById("f_msg").innerHTML = "<i>Please enter valid name</i>"
        document.getElementById("f_nm").style.border="solid 1px red";
        return false;
    }
    //check length
    else if (f_nm.length < 3 || f_nm.length > 16) {
        document.getElementById("f_msg").innerHTML = "<i>up to 16 characters allowed</i>";
        document.getElementById("f_nm").style.border="solid 1px red";
        return false;
    }
    else {
        document.getElementById("f_msg").innerHTML = ""
        document.getElementById("f_nm").style.border="solid 1px lightgray";
    }



    /* Last Name */
    let l_nm = document.getElementById("l_nm").value;

    //check empty
    if (l_nm == "") {
        document.getElementById("l_msg").innerHTML = "<i>Please enter your last name</i>";
        document.getElementById("l_nm").style.border="solid 1px red";
        return false;
    }

    flag = 0;
    for (i = 0; i <= l_nm.length; i++) {
        if (l_nm.charCodeAt(i) >= 65 && l_nm.charCodeAt(i) <= 90) {
            flag = 1;
        }

        else if(l_nm.charCodeAt(i)>=97 && l_nm.charCodeAt(i)<=122){
            flag=1;
        }
        if (l_nm.charCodeAt(i) == 32) {
            flag = 0;
            break;
        }
        
    }

    // check only space and last name valid only
    if (flag == 0) {
        document.getElementById("l_msg").innerHTML = "<i>Please enter valid name</i>"
        document.getElementById("l_nm").style.border="solid 1px red";
        return false;
    }
    //check length
    else if (l_nm.length < 3 || l_nm.length > 16) {
        document.getElementById("l_msg").innerHTML = "<i>up to 16 characters allowed</i>";
        document.getElementById("l_nm").style.border="solid 1px red";
        return false;
    }
    else {
        document.getElementById("l_msg").innerHTML = ""
        document.getElementById("l_nm").style.border="solid 1px lightgray";
    }



    /* Email */
    let email = document.getElementById("email").value;

    //check empty
    if (email == "") {

        document.getElementById("mail_msg").innerHTML = "<i>Please enter your e-mail id</i>";
        document.getElementById("email").style.border = "solid 1px red";
        return false;
    }
    // check valid extention
     if(email.charAt(email.length-4)!="." && email.charAt(email.length-3)!="."){

        document.getElementById("mail_msg").innerHTML="<i>Please use valid extention</i>";
        document.getElementById("email").style.border="solid 1px red";
        return false;
    }

    flag = 1;
    e1=1;
    for (i = 0; i <= email.length; i++) {

        if (email.charCodeAt(i) == 32) {
            flag = 0;
            
        }
        else if(email.charCodeAt(i)==64){
            e1=0
        }
        
    }
    // check space , @ symbol
    if (flag == 0 || e1==1) {
        document.getElementById("mail_msg").innerHTML = "<i>Please enter valid email</i>";
        document.getElementById("email").style.border="solid 1px red";
        return false;
    }
    else {
        document.getElementById("mail_msg").innerHTML = ""
        document.getElementById("email").style.border="solid 1px lightgray";
    }


    /* Contact number */

    // check empty
    let ph_no=document.getElementById("ph_no").value;
    if(ph_no==""){
        document.getElementById("ph_msg").innerHTML = "<i>Please enter mobile number</i>";
        document.getElementById("ph_no").style.border="solid 1px red";
        return false;
    }

    // starts with 6,7,8,9

    let p1=0;

        if(ph_no.charAt(0)=="6" || ph_no.charAt(0)=="7" || ph_no.charAt(0)=="8" || ph_no.charAt(0)=="9"){
        p1=1;
        }
         
    if(p1==0){

        document.getElementById("ph_msg").innerHTML="<i>mobile number starts with 6,7,8 or 9</i>";
        document.getElementById("ph_no").style.border="solid 1px red";
        return false;
        }


    else{

        document.getElementById("ph_msg").innerHTML="";
        document.getElementById("ph_no").style.border="solid 1px lightgray";
    }

    // check length
    if(ph_no.length<10 ||ph_no.length>10){
        document.getElementById("ph_msg").innerHTML = "<i>Please enter 10 digit mobile number</i>";
        document.getElementById("ph_no").style.border="solid 1px red";
        return false;
    }

    /* Age */

    let age=document.getElementById("age").value;
    if(age==""){
        document.getElementById("age_msg").innerHTML="<i>Please enter age</i>";
        document.getElementById("age").style.border="solid 1px red";
        return false;
    }
    else if(age<1 || age>100){
        document.getElementById("age_msg").innerHTML="<i>Please enter valid age</i>";
        document.getElementById("age").style.border="solid 1px red";
        return false;
    }

    else{
        document.getElementById("age_msg").innerHTML="";
        document.getElementById("age").style.border="solid 1px lightgray";
    }




    /* Gender*/

    if(document.getElementsByClassName("gender")[0].checked==false && document.getElementsByClassName("gender")[1].checked==false){

        document.getElementById("g_msg").innerHTML="<i>Please select gender</i>";
        return false;
    }
    
    else{
    
        document.getElementById("g_msg").innerHTML="";
    }

    /* subject */
    let sub=document.getElementById("sub").value;
    if(sub=="" || sub==" "){
        document.getElementById("sub_msg").innerHTML="<i>Please enter subject</i>"
        return false;
    }

    else{
        document.getElementById("sub_msg").innerHTML="";
    }

    /* Message */
    let msg=document.getElementById("msg").value;
    if(msg=="" || msg==" "){
        document.getElementById("msg_msg").innerHTML="<i>Please enter message</i>"
        return false;
    }   

    else{
        document.getElementById("msg_msg").innerHTML=""
    }
}

// function border_des(){
//     let inpt=document.getElementsByTagName("input");

//     border: 5px solid rgb(141, 180, 196);
// }