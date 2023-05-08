function validate(){
    let error1=document.getElementById('error1');
    let error2=document.getElementById('error2');
    let name=document.getElementById('name');
    let password=document.getElementById('password');

    if(name.value.trim()==''){
        error1.style.visibility='visible';
        error1.innerHTML='*please enter name';
        name.style.border='solid 2px red';
        return false;
    }else {
        error1.innerHTML= '<br>';
        error1.style.visibility='disable';
        name.style.border='solid 2px green';
    }
    if(password.value.trim()=='') {
        error2.style.visibility='visible';
        error2.innerHTML='*please enter password';
        password.style.border='solid 2px red';
        return false;
    }else if(password.value.length<5){
        error2.innerHTML='*length of password must be greater than 5';
        password.style.border='solid 2px red';
        return false;
    }else{
        error2.innerHTML='<br>';
        error2.style.visibility='disable';
        password.style.border='solid 2px green';
        return true;
    }
}