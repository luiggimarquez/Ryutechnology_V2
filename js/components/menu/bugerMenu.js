// Menu de navegación responsive para Header,  para <768px de resolución

const burger = document.querySelector(".burger");
const menuNav = document.querySelector(".menuNav");

burger.addEventListener("click", () => {

    burger.classList.toggle("active")
    menuNav.classList.toggle("active")

})

document.querySelectorAll(".menuNav").forEach(n => n.addEventListener("click",() =>{

    burger.classList.remove("active")
    menuNav.classList.remove("active")
}))


// Menu de navegación responsive para footer,  para <768px de resolución

const burgerFooter = document.querySelector(".burgerFooter");
const menuNavFooter = document.querySelector(".menuNavFooter");

burgerFooter.addEventListener("click", () => {

    burgerFooter.classList.toggle("active")
    menuNavFooter.classList.toggle("active")
    
})

document.querySelectorAll(".menuNavFooter").forEach(n => n.addEventListener("click",() =>{

    burgerFooter.classList.remove("active");
    menuNavFooter.classList.remove("active");
}))