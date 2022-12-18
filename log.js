const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const loginForm = document.getElementById("login");

let arr;

if (localStorage.getItem('users')) {
   arr = JSON.parse(localStorage.getItem("users"));
} else {
   arr = [];
}

loginForm.addEventListener('submit', function (i) {
   i.preventDefault();
   let istifadeci = true;

   for (let i = 0; i < arr.length; i++) {
      if (emailInput.value == arr[i].email) {
         istifadeci = false;
         if (passwordInput.value == arr[i].pass) {
            alert("Hesab Dogrulandi");
            localStorage.setItem("currentUser", arr[i].fname);
            window.location.assign("index.html");
         } else {
            alert("Parol Yanlishdir");
         }
      }
   }
   if (istifadeci) {
      alert("Bele Bir Hesab Yoxdur");
   };
});