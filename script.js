const form=document.getElementById('form');
const username=document.getElementById('username');
const email=document.getElementById('email');
const password=document.getElementById('password');
const password2=document.getElementById('password2');


// Email Validation
const checkEmail = (input) => {
    const re=/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(re.test(input.value.trim())){
        showSuccess(input);
    }else{
        showError(input,'Email is not valid')
    }
  };

function showError(input, message){
    const formControl= input.parentElement;
    formControl.className='form-control error';
    const small=formControl.querySelector('small');
    small.innerText = message;

}

function showSuccess(input, message){
    const  formControl=input.parentElement;
    formControl.className='form-control success';
  
}

// Check required fields
function checkRequired(inputArr){
inputArr.forEach(function(input){
    console.log(input.value);
    if(input.value.trim()===''){
        showError(input,`${getFieldName(input)} is required`);

    }else{
        showSuccess(input);
    }
});
}

// Check passwords match
function checkPassword(input1,input2){
    if(input1.value!==input2.value){
      
        showError(input2,'Password did not match')
    }else{
        showSuccess(input1,input2);
    }
}


//check input length
function checkLength(input, min, max){
    if(input.value.length<min){
        showError(input,`${getFieldName(input)} must be at least ${min} characters`);
    }else if(input.value.length>max){
        showError(input,`${getFieldName(input)} must be less than ${max} characters`);
    }else{
        showSuccess(input);
    }
}

function getFieldName(input){
    return input.id.charAt(0).toUpperCase()+input.id.slice(1);
}

// Events Listeners
form.addEventListener('submit', function(e){
   e.preventDefault();
    checkRequired([username, email, password, password2]);
    checkLength(username,3, 15);
    checkLength(password, 6,25);
    checkEmail(email);
    checkPassword(password,password2)
   });




   // core method


   //    if(username.value==='')
//    {
//     showError(username,'username is required');

//    }
//    else{
//     showSuccess(username);
//    }
//    if(email.value==='')
//    {
//     showError(email,'email is required');

//    }
//  else if (!isValidEmail(email.value)) {
//     showError(email,'email is not valid');
//   } 
//  else{
//     showSuccess(email);
//   }
//    if(password.value==='')
//    {
//     showError(password,'password is required');

//    }
//    else{
//     showSuccess(password);
//    }
//    if(password2.value==='')
//    {
//     showError(password2,'password is required');

//    }
//    else if(password2.value!==password.value)
//    {
//     showError(password2,'password did not match');

//    }
//    else{
//     showSuccess(password2);
//    }
   // console.log(username.value);