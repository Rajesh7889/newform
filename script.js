   let submit=document.getElementById('submit');
      /*function validate(){
    let error1=document.getElementById('error1');
    let error2=document.getElementById('error2');
    let name=document.getElementById('name');
    let password=document.getElementById('password');
   
    
    
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
        submit.disabled=false;
        return true;
    }}*/
    letform=document.getElementById('form');
     form.addEventListener('submit',(e)=>{
    e.preventDefault();
})
   let para=document.querySelectorAll('.values');
   let error= document.querySelectorAll('.error');
   function check(){
    for(let i=0;i<para.length;i++){
       if(para[i].value.trim()==''){
         error= document.querySelectorAll('.error')[i];
        para[i].style.border='solid 2px red';
     error.innerHTML='*please fill details';
     submit.disabled=true;
    }
   }
}
   function check1(){
    let name=para[0].value;
   if(name.length<2){
     error=document.querySelectorAll('.error')[0];
    error.innerHTML='*enter a valid name';
    return false;
}else {
    error.innerHTML= '<br>';
    para[0].style.border='solid 2px green';
    submit.disabled=false;
   }
}