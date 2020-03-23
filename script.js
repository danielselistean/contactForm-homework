const fname = document.querySelector('#fname');
const lname = document.querySelector('#lname');
const button = document.querySelector('#button');


button.addEventListener('click', function(event){
    event.preventDefault();

    let firstName = validateTextInput(fname);
    let lastName = validateTextInput(lname);
    let gender = validateRadioInput();

    if(firstName && lastName){
        console.log("First Name: " + fname.value);
        console.log("Last Name: " + lname.value);
        console.log("Gender: " + gender);
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
