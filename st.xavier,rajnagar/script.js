const toggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".navbar ul");

toggle.addEventListener("click", () => {
  nav.classList.toggle("active");
});

function validateForm() {
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;

  if(name=="" || email==""){
    alert("Please fill all fields");
    return false;
  }
}