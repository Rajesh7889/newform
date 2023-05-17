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
       let chk=/^[A-Za-z]+$/;
       if(name.match(chk) && name.length>2){
         error.innerHTML= '<br>';
         para[0].style.border='solid 2px green';
         submit.disabled=false;
       }else {
        error=document.querySelectorAll('.error')[0];
         error.innerHTML='*enter a valid name';
         return false;
       }
    }
   //password validation...
    function check2(){
        let name=para[1].value;
        let chk =/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#\$%\^&\*]).{8,}$/;
        if(name.match(chk)){
         error.innerHTML= '<br>';
         para[1].style.border='solid 2px green';
         submit.disabled=false; 
        }else {
          error=document.querySelectorAll('.error')[1];
           error.innerHTML='*atleast one of each[A-Z,a-z,0-9,a secial character(length>8)]..';
           return false;
        }
    }
    //email validation
    function check3(){
        let name=para[2].value;
        let chk=/[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;
        if(name.match(chk)){
         error.innerHTML= '<br>';
         para[2].style.border='solid 2px green';
         submit.disabled=false;
        }else {
         error=document.querySelectorAll('.error')[2];
           error.innerHTML='*enter a valid email..';
           return false;
        }
    }
    //address validation...
    function check4(){
      let name=para[3].value;
      if(name.length<10){
         error=document.querySelectorAll('.error')[3];
         error.innerHTML='*enter full address(length>10)..';
         return false;
      }else {
         error.innerHTML= '<br>';
         para[3].style.border='solid 2px green';
         submit.disabled=false;
      }
  } 
   //mobile number validation....
       function check5(){
          let name= para[4].value;
          if(isNaN(name)){
            error=document.querySelectorAll('.error')[4];
            error.innerHTML='*enter a numeric values..';
            return false;  
          }else if( name.length<10||name.length>10){
            error=document.querySelectorAll('.error')[4];
            error.innerHTML='*enter a10 digit number..';
              return false;
           }else {
             error.innerHTML= '<br>';
             para[4].style.border='solid 2px green';
             submit.disabled=false;
            }
         }
  
     //submiting the values...
       function submition(){
         let gen=document.querySelector('input[name="gender"]:checked');
            records={
                  Name:para[0].value,
                  password:para[1].value,
                  email:para[2].value,
                  address:para[3].value,
                  number:para[4].value,
                  gender:gen.value,
                  checked:para[5].value,
                    };
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
             para[4].value='';
             gen.value='';
             para[5].value=false;
     }
     //retriving the records from local storage...
     let retrived=JSON.parse(localStorage.getItem('details'));
    
        let display=document.querySelectorAll('#show');
        //by default sorts according to name ...
        function showdata(){
         console.log(retrived);
      retrived.sort(function(a,b){
         if(a.Name.toLowerCase()<b.Name.toLowerCase()) return -1;
         if(a.Name.toLowerCase()>b.Name.toLowerCase())return 1;
         console.log(retrived);
         return 0; 
      })
      showdatafn();
      }


      //sorts along passwords....
       function showdata1(){
         console.log(retrived);
      retrived.sort(function(a,b){
         if(a.password.toLowerCase()<b.password.toLowerCase()) return -1;
         if(a.password.toLowerCase()>b.password.toLowerCase())return 1;
         console.log(retrived);
         return 0; 
      })
      showdatafn();
      }

      //sorts according to emails...
       function showdata2(){
         console.log(retrived);
      retrived.sort(function(a,b){
         if(a.email.toLowerCase()<b.email.toLowerCase()) return -1;
         if(a.email.toLowerCase()>b.email.toLowerCase())return 1;
         console.log(retrived);
         return 0; 
      })
      showdatafn();
      }

      //sort according to address...
       function showdata3(){
         console.log(retrived);
      retrived.sort(function(a,b){
         if(a.address.toLowerCase()<b.address.toLowerCase()) return -1;
         if(a.address.toLowerCase()>b.address.toLowerCase())return 1;
         console.log(retrived);
         return 0; 
      })
      showdatafn();
      }
        //shows sorted data according to mobile number..
        function showdata4(){
         console.log(retrived);
      retrived.sort(function(a,b){ console.log(retrived);
        return a.number-b.number;
      })
      showdatafn();
        }

        //displaying data....
        function showdatafn(){
        let table=`<tr>
                      <th>Name <input type='button' value='sort' onclick='showdata()'></th>
                      <th>password <input type='button' value='sort' onclick='showdata1()'></th>
                      <th>email <input type='button' value='sort' onclick='showdata2()'></th>
                      <th>gender</th>
                      <th>address <input type='button' value='sort' onclick='showdata3()'></th>
                      <th>number <input type='button' value='sort' onclick='showdata4()'></th>
                       <th>checked</th>
                       <th>operation</th>`;
        display[0].innerHTML= table;
        for(let i = 0;i<retrived.length;i++){
           
           table+=`<tr>
            <td>${retrived[i]['Name']} </td>
            <td>${retrived[i]['password']}</td>
            <td>${retrived[i]['email']}</td>
            <td>${retrived[i]['gender']}</td>
            <td>${retrived[i]['address']}</td>
            <td>${retrived[i]['number']}</td>
            <td>${retrived[i]['checked']}</td>
            <td><input type="button" id="edit" onclick='updation(${i})'  value='edit'>
            <input type="button" id="delete" onclick='deletion(${i})' value='delete'></td>`;
            
           display[0].innerHTML=table;
        }
    }

        //search entery...
        
       let searchbar=document.getElementById('searchbar');
        function find(){
         searchbar.style.visibility='visible';
        }
        function search(){
            let regex=new RegExp(searchbar.value,'g');
             let table=`<tr>
                      <th>Name</th>
                      <th>password</th>
                      <th>email</th>
                      <th>gender</th>
                      <th>address</th>
                      <th>number</th>
                       <th>checked</th>
                       <th>operation</th>`;
        display[0].innerHTML= table;
        for(let i = 0;i<retrived.length;i++){
         if(retrived[i]['Name'].match(regex)){
           table+=`<tr>
            <td>${retrived[i]['Name']} </td>
            <td>${retrived[i]['password']}</td>
            <td>${retrived[i]['email']}</td>
            <td>${retrived[i]['gender']}</td>
            <td>${retrived[i]['address']}</td>
            <td>${retrived[i]['number']}</td>
            <td>${retrived[i]['checked']}</td>
            <td><input type="button" id="edit" onclick='updation(${i})'  value='edit'>
            <input type="button" id="delete" onclick='deletion(${i})' value='delete'></td>`;
            
            
         display[0].innerHTML=table;}
        }
          
         }
 
   //deletion .....
  function deletion(index){
          retrived.splice(index,1)
          localStorage.setItem("details",JSON.stringify(retrived));
          showdata();
  }
   //deletion .....
  function deleteall(){
   retrived=[];
   localStorage.setItem("details",JSON.stringify(retrived));
   showdata();
}

   //updation of records...
  
   let upate=document.getElementById('update');
   let display1=document.querySelectorAll('#edit1');
     function updation(index){
      show.style.visibility='hidden';
      edit1.style.visibility='visible';
      upate.style.visibility='visible';
     
      let table=`<tr>
                      <th>Name</th>
                      <th>password</th>
                      <th>email</th>
                      <th>gender</th>
                      <th>address</th>
                      <th>number</th>
                   </tr>`;
        display1[0].innerHTML= table;
       
        table+=`<tr>
        <td><input id='0' onkeyup='update(${index})' type='text'style='font-size:small;' value='${retrived[index]['Name']}'> </td>
        <td><input id='1' onkeyup='update(${index})'  type='text' style='font-size:small;' value='${retrived[index]['password']}'></td>
        <td><input id='2' onkeyup='update(${index})' type='text'style='font-size:small;' value='${retrived[index]['email']}'></td>
        <th><input id='3' onkeyup='update(${index})' type='text'style='font-size:small;' value='${retrived[index]['gender']}'></td>
        <td><input id='4' onkeyup='update(${index})' type='text'style='font-size:small;' value='${retrived[index]['address']}'></td>
        <td><input id='5' onkeyup='update(${index})' type='text'style='font-size:small;' value='${retrived[index]['number']}'></td></tr>`;
         display1[0].innerHTML=table;
        
        
       
     }
     //updating values in local storage...
      function update(index){
         
         retrived[index]['Name']=document.getElementById('0').value;
         retrived[index]['password']=document.getElementById('1').value;
         retrived[index]['email']=document.getElementById('2').value;
         retrived[index]['gender']=document.getElementById('3').value;
         retrived[index]['address']=document.getElementById('4').value;
         retrived[index]['number']=document.getElementById('5').value;
         
      }
     
     //displaying updated values on the screen...
      function updatte(){
      show.style.visibility='visible';
      edit1.style.visibility='hidden';
      upate.style.visibility='hidden';
      localStorage.setItem("details",JSON.stringify(retrived));
      showdata();
     }
     /*//deletion .....
  function deletion(index){
   console.log(index);
   let index=NaN;
    let regex=document.getElementById('searchbar').value;
    console.log(regex);
            for(let i = 0;i<retrived.length;i++){
            if(regex==''){
               exit;
            }else if(retrived[i]['Name']==regex){
                   index=i;
                  }
              
               retrived.splice(index,1)
               
               localStorage.setItem("details",JSON.stringify(retrived));
               showdata();
            }
         }*/ 