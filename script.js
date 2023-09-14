const requiredInputs = document.querySelectorAll('.required');
const button = document.querySelector(`button[type='submit']`);
const passwords = document.querySelectorAll(`input[type='password']`);
const invalid = document.querySelector('#invalid');


button.addEventListener('click', function(){
    requiredInputs.forEach((input) => input.setAttribute('required', ''));

    if (passwords[0].value !== passwords[1].value){

        passwords[0].setCustomValidity(" ");
        passwords[1].setCustomValidity("Password does not match");
             
        invalid.textContent = '*Password does not match';
    }
    else{
        passwords[0].setCustomValidity("");
        passwords[1].setCustomValidity("");
        invalid.textContent = ""
    } 
})


