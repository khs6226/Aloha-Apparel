document.addEventListener("DOMContentLoaded", function() {
    
    const navLinks = document.querySelectorAll('.navBar ul li a');
 
    navLinks.forEach(function(event) {
        event.addEventListener('click', function(click) {
            click.preventDefault();
            document.querySelector(click.target.hash).scrollIntoView({behavior:"smooth"});
        });
    });

    var elem = document.querySelector('.main-carousel');
    var flkty = new Flickity( elem, {
     // options
     cellAlign: 'left',
     contain: true,
     prevNextButtons: false,
     autoPlay: 2000
    });

    let submit = document.getElementById('submit');
    submit.addEventListener('click', /* function ValidateEmail(mail) {
     if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(subscribeForm.email.value))
      {
        alert("Thank you for subscribing!");
        return (true);
      }
    else {
       alert("Please enter a valid email address!");
       return (false);
       }
    } */
    
    
    
    function validateForm(s) {
        s.preventDefault();
        let x = document.getElementById('email');
        if(x.value === "") {
            alert('Please enter your email address');
            x.focus();
            return false;
        }
        else {
        alert('Thank you for subscribing!');
        return true;
        };
    });
    
});
            






