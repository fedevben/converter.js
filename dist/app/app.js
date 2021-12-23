let pxVl = document.querySelector(".px")
let remVl = document.querySelector(".rm")
const menuClick = document.querySelector(".menu")
const navMenu = document.querySelector(".navigation-menu")

function pixelEl() {
    let output = (parseFloat(pxVl.value) * 1/16);
    remVl.value = parseFloat(output.toFixed(3))
}

menuClick.addEventListener("click", ()=>{
    navMenu.classList.toggle("openNav")
})