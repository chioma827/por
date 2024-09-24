// const menu = document.querySelector("menu");  
const nav = document.querySelector(".links");  

menu.onclick = () => {  
    const isActive = nav.classList.toggle("active");  
    menu.setAttribute("aria-expanded", isActive); // Add ARIA attribute  
    menu.classList.toggle("bx-bx"); // Corrected method  
};  