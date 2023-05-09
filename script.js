    let submit=document.getElementById('submit');
    let form=document.getElementById('form');
    let para=document.querySelectorAll('.values');
    let error= document.querySelectorAll('.error');
    let records={};
     //perventing default submition..
  //empty fields check....
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
  //name validation...
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
   //password validation...
    function check2(){
        let name=para[1].value;
        if(name.length<5){
           error=document.querySelectorAll('.error')[1];
           error.innerHTML='*password length must be <5..';
           return false;
        }else {
           error.innerHTML= '<br>';
           para[1].style.border='solid 2px green';
           submit.disabled=false;
        }
    }
    //email validation
    function check3(){
        let name=para[2].value;
        if(name.length<5){
           error=document.querySelectorAll('.error')[2];
           error.innerHTML='*enter a valid email..';
           return false;
        }else {
           error.innerHTML= '<br>';
           para[2].style.border='solid 2px green';
           submit.disabled=false;
        }
    }
    function check4(){
      let name=para[3].value;
      if(name.length<5){
         error=document.querySelectorAll('.error')[3];
         error.innerHTML='*enter a valid email..';
         return false;
      }else {
         error.innerHTML= '<br>';
         para[3].style.border='solid 2px green';
         submit.disabled=false;
      }
  }
     //submiting the values...
       function submition(){
            records={
                  Name:para[0].value,
                  password:para[1].value,
                  email:para[2].value,
                  address:para[3].value,
                 
                    }
           let webtask = localStorage.getItem("details");
             if(webtask == null){
                 taskobj = [];
             }else {
                 taskobj = JSON.parse(webtask);
             }
             taskobj.push(records);
             console.log(taskobj);
             localStorage.setItem("details",JSON.stringify(taskobj));
             alert('Your information saved successfully');
             para[0].value='';
             para[1].value='';
             para[2].value='';
             para[3].value='';
            
     }
     //retriving the records from local storage...
     let retrived=JSON.parse(localStorage.getItem('details'));
        let display=document.querySelectorAll('#show');
     function showdata(){
        let table=`<tr>
                      <th>Name</th>
                      <th>passowd</th>
                      <th>email</th>
                      <th>address</th>`;
        display[0].innerHTML= table;
        for(let i = 0;i<retrived.length;i++){
           console.log(retrived[i]['Name']);
           table+=`<tr>
            <td>${retrived[i]['Name']} </td>
            <td>${retrived[i]['password']}</td>
            <td>${retrived[i]['email']}</td>
            <td>${retrived[i]['address']}</td>`;
            /*<td>${retrived[i]['gender']}</td>
            <td>${retrived[i]['number']}</td>
            <td>${retrived[i]['language']}</td>
            </tr>`;/*`Firstname : ${New.fname} <br>
         Lastname : ${New.lname} <br> Gender : ${New.gender}<br>Email:${New.email}<br>
         Password:${New.password}<br> mobile-number:${New.number}$Address:${New.address}<br> Language:${New.language}`;
         */display[0].innerHTML=table;
        }
    }

        //search entery...
        
       let searchbar=document.getElementById('searchbar');
        function find(){
         searchbar.style.visibility='visible';
        }
        function search(){
            let regex=new RegExp(searchbar.value,'gi');
            let table=`<tr>
                      <th>Name</th>
                      <th>passowd</th>
                      <th>email</th>
                      <th>address</th>`;
            display[0].innerHTML= table;
            for(let i = 0;i<retrived.length;i++){
               if(retrived[i]['Name'].match(regex)){
                      if(retrived[i]['Name']==regex){
                        alert('hello');
                      }
                       table+=`<tr>
                       <td>${retrived[i]['Name']} </td>
                       <td>${retrived[i]['password']}</td>
                       <td>${retrived[i]['email']}</td>
                       <th>${retrived[i]['address']}</td>`;
                        display[0].innerHTML=table;
               }
            }
         }
  //deletion .....
  function deletion(){
   let index='';
    let regex=document.getElementById('searchbar').value;
    console.log(regex);
            for(let i = 0;i<retrived.length;i++){
             //  if(retrived[i]['Name'].match(regex)){
                   if(retrived[i]['Name']==regex){
                  
                  index=i;
                    retrived.splice(index,1);}
              // }
               
               localStorage.setItem("details",JSON.stringify(retrived));
               showdata();
            }
  
      
   }
   //updation of records...
   function update(){
        
      let index='';
      let regex=document.getElementById('searchbar').value;
      console.log(regex);
              for(let i = 0;i<retrived.length;i++){
               //  if(retrived[i]['Name'].match(regex)){
                     if(retrived[i]['Name']==regex){
                    
                    index=i;
                      retrived.splice(index,1);}
                // }
                 
                 localStorage.setItem("details",JSON.stringify(retrived));
                 showdata();
              }
   }