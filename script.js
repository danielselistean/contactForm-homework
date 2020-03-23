const fname = document.querySelector('#fname');
const lname = document.querySelector('#lname');
const button = document.querySelector('#button');
const msg = document.querySelector('#message');


button.addEventListener('click', function(event){
    event.preventDefault();

    let firstName = validateTextInput(fname);
    let lastName = validateTextInput(lname);
    let gender = validateRadioInput();
    let message = validateMessageInput(msg);

    if(firstName && lastName && gender){
        console.log("First Name: " + fname.value);
        console.log("Last Name: " + lname.value);
        console.log("Gender: " + gender);
        console.log("Message: " + msg.value);
    }
});

function validateTextInput(name){
    let letters = /^[A-Za-z]+$/;
    
    if (name.value == "" || name.length <= 2 || !name.value.match(letters)) {
        name.classList.add('error-red-border');
        return false;
    } else {
        name.classList.remove('error-red-border');
        return true;
    }
}

function validateRadioInput(){
    let radioButton = document.getElementsByName('gender');

    for( var i=0; i<radioButton.length; i++){
        if(radioButton[i].checked){
            return radioButton[i].value;
        }
    }
}

function validateMessageInput(msg){
    if(msg.value == ""){
        msg.classList.add('error-red-border');
        return false;
    }else{
        msg.classList.remove('error-red-border');
        return true;
    }
}