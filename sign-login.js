const fnameDesc = document.getElementById("first");
const surnameDesc = document.getElementById("surnm");
const gmailDesc = document.getElementById("gml");
const passDesc = document.getElementById("pswrd");

const firstname = document.getElementById("Name");
const lastname = document.getElementById("Surname");
const email = document.getElementById("Email");
const pass = document.getElementById("password");
const form = document.getElementById("Sign-up");

let arr;

if (localStorage.getItem('users')) {
     arr = JSON.parse(localStorage.getItem('users'));
} else {
     arr = [];
}

form.addEventListener('submit', function (e) {
     e.preventDefault();

     const obj = {
          fname: firstname.value,
          lname: lastname.value,
          email: email.value,
          pass: pass.value
     };

     arr.push(obj);

     let jsonArr = JSON.stringify(arr);

     localStorage.setItem('users', jsonArr);

     window.location.assign("log.html");
});