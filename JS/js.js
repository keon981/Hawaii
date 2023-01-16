let header = document.querySelector("header");
let navbar = document.querySelectorAll(".header_nav li a");
window.addEventListener("scroll",()=>{
    if(window.pageYOffset !=0){
        header.style="background:rgba(0,0,0,0.3);color:white";
        navbar.forEach(a =>{
            a.style.color = "white";
        })
    }else{
        header.style="";
        navbar.forEach(a =>{
            a.style.color = "";
        })
    }
})