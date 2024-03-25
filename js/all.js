document.getElementById('showHidenAbout').addEventListener('click',function(){
    document.getElementById('hidenAbout').style.display="block";
});
// const contents=['ussd','mobile'];
function showHidenContent(content) {

    // if (content=='ussd') {
    
    document.getElementById(content).style.display="block";
        
    // } 
    // else {
        
    // }
    // document.getElementById('hidenContent').style.display="block";
    
}
document.addEventListener("DOMContentLoaded", function() {
    // Get all the navigation links
    const navLinks = document.querySelectorAll(".nav-link");

    // Add click event listeners to each navigation link
    navLinks.forEach(function(link) {
        link.addEventListener("click", function(e) {
            e.preventDefault();

            // Get the target section ID from the link's href attribute
            const targetId = link.getAttribute("href");

            // Scroll smoothly to the target section
            document.querySelector(targetId).scrollIntoView({
                behavior: "smooth"
            });
        });
    });
});
