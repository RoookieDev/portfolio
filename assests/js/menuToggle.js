var btn = document.querySelector("#tglBtn");
btn.addEventListener("click", function(){
    var menu = document.querySelector(".menu ul");
    menu.classList.toggle("activeMenu");
});