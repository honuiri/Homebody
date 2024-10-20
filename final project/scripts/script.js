// hamburger menu function

// function hamburger(){
//     var menu = document.getElementById("mobile_nav_bar");
//     var logo = document.getElementById("logo-container");
//     if (menu.style.display === "none" && logo.style.display === "flex"){ 
//         menu.style.display = "block";
//         menu.style.zIndex = "100"
//         logo.style.display = "none";

//         document.addEventListener('click', outsideClickListener);
//     } else {
//         menu.style.display = "none";
//         logo.style.display = "flex";
        
//         document.addEventListener('click', outsideClickListener);
//     }
// }

// function outsideClickListener(event) {
//     var menu = document.getElementById("mobile_nav_bar");
//     var hamburgerIcon = document.querySelector('.menu-icon');

    
//     if (!menu.contains(event.target) && !hamburgerIcon.contains(event.target)) {
//         menu.style.display = "none";
//         document.getElementById("header__container").style.display = "flex";  
//         document.removeEventListener('click', outsideClickListener);  
//     }
// }

// function toggleMenu(){
//     var menu=document.getElementById("menu-links");
//     var logo= document.getElementById("logo-container");
//     if(menu.style.display === "block" && logo.style.display === "none"){
//         menu.style.display = "none";
//         logo.style.display = "block";
//     }
//     else{
//         menu.style.display = "block";
//         logo.style.display = "none";

//     }
// }

function toggleMenu() {
    const menu = document.getElementById('mobile-menu-links');
    menu.classList.toggle('active');
}
