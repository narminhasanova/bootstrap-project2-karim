const logout = document.querySelector(".outlog");
const username = document.querySelector(".username");
const userlabel = document.querySelector(".user-data");

if(localStorage.getItem("currentUser")){
   let user = localStorage.getItem("currentUser");
   username.innerText = user;
}
logout.addEventListener("click",function () {
   this.classlist.add("d-none");      
   userlabel.classList.add("d-none");     
});