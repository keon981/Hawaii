let header = document.querySelector("header");
let navbar = document.querySelectorAll(".header_nav li a");
window.addEventListener("scroll",()=>{
    if(window.pageYOffset !=0){
        header.style="background:black;color:white";
        navbar.forEach(a=>{
            a.style.color="while"
        })
    }else{
        header.style="";
    }
})