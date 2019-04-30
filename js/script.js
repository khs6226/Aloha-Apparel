document.addEventListener("DOMContentLoaded", function() {


    /***********Fixed Navigation Bar at the top*************/


    /* let header = document.getElementById('header');
    let fix = header.offsetTop;
    window.onscroll = function() {
        if (window.pageYOffset > fix) {
            header.classList.add("stayTop");
        }
        else {
            header.classList.remove("stayTop");
        }
    }; */
    

    /***********Smooth scrolling navigation*************/


    const navLinks = document.querySelectorAll('.navBar ul li a');
    navLinks.forEach(function(event) {
        event.addEventListener('click', function(click) {
            click.preventDefault();
            document.querySelector(click.target.hash).scrollIntoView({behavior:"smooth"});
        });
    });


    /***********Flickity*************/


    var elem = document.querySelector('.main-carousel');
    var flkty = new Flickity( elem, {
     // options
     cellAlign: 'left',
     contain: true,
     prevNextButtons: false,
     autoPlay: 2000
    });


    /***********Add-to-Cart click event*************/


    const addBtn = document.querySelectorAll('.carousel-cell input');
    let number = 0;
    addBtn.forEach(function(e) {
        e.addEventListener('click', function(){
            number++;
            document.getElementById('three').innerHTML = number;
        })
    })
   

    /***********Validating Email Address*************/


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
            






