
function getFormValues(){
let firstName = document.getElementById("fname").value;
let lastName = document.getElementById("lname").value;
let email = document.getElementById("email").value;
let occupation = document.getElementById("occupation").value;

console.log(`
Firstname: ${firstName} \n
lastName:  ${lastName} \n
email: ${email} \n
occupation: ${occupation}
`);
    
}
