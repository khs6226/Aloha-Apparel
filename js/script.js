document.addEventListener("DOMContentLoaded", function() {
    
    const navLinks = document.querySelectorAll('.navBar ul li a');
 
    navLinks.forEach(function(event) {
        event.addEventListener('click', function(click) {
            click.preventDefault();
            document.querySelector(click.target.hash).scrollIntoView({behavior:"smooth"});
        });
    });
});
            






