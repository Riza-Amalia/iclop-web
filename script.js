
document.addEventListener("DOMContentLoaded", function() {
const navLinks = document.querySelectorAll(".nav-link");
    navLinks.forEach(function(navLink) {
        navLink.addEventListener("click", function() {
        navLinks.forEach(function(link) {
            link.classList.remove("active");
        });
        this.classList.add("active");
        });
    });
});

const myModal = document.getElementById('myModal')
const myInput = document.getElementById('myInput')

myModal.addEventListener('shown.bs.modal', () => {
  myInput.focus()
})

