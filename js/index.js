// Toggle button functionaliity
const togglebtn = ()=>{
    let menu = document.getElementById("menuId");
    let icon = document.getElementById("iconId");

    menu.classList.toggle("hidden");
    icon.classList.toggle("fa-xmark");
}

window.addEventListener("resize", () => {
    let menu = document.getElementById("menuId");
    let icon = document.getElementById("iconId");

    if (window.innerWidth >= 1024) {
        menu.classList.add("hidden");
        icon.classList.remove("fa-xmark");
    }
});

// Typing Functionality

const typed = new Typed('#autoType', {
    strings: ['Designer', "Developer"],
    typeSpeed: 100,
    backSpeed: 50,
    loop:true,
});

