const fname = document.querySelector('#fname');
const button = document.querySelector('#button');

button.addEventListener('click', function(event){
    event.preventDefault();
    let name = validateTextInput(fname);
    if(name){
        console.log("First Name: " + fname.value);
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
