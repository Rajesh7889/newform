function validate(){
    let name=document.getElementById('name');
    let password=document.getElementById('password');
    if(name.value.trim()==''||password.value.trim()==''){
        alert('no blank values allowed');
        return false;
    }else {
      true;
    }
}