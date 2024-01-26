let sidenavbar_btn = document.querySelector(".navbar-toggle")
let sidenavbar=document.querySelector(".side-nav-bar")
let sidenavbar_close=document.querySelector(".x-icon i")



sidenavbar_btn.addEventListener("click",()=>{
    sidenavbar.style.left="0%"
})
sidenavbar_close.addEventListener("click",()=>{
    sidenavbar.style.left="-50%"
})
