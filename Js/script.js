// ======================== scroll sections avtive Link ============================ //
let menuIcon = document.querySelector('#menu-icon');
let navbar  = document.querySelector('.navbar');
menuIcon.onclick = () =>{
    menuIcon.classList.toggle('bx-x')
    navbar.classList.toggle('active')
};
// ======================== scroll sections avtive Link ============================ //

let sections = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header nav a')
window.onscroll = () =>{
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id  = sec.getAttribute('id');

        if (top >= offset && top < offset + height){
            navlinks.forEach(links=> {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };

    });
// ======================== stickly navbar ============================ //
    let header = document.querySelector('header');
        
    header.classList.toggle('stickly', window.scrollY > 100);
// ======================== stickly navbar ============================ //

    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');

};
// ======================== stickly navbar ============================ //
ScrollReveal({
    // reset: true,
    distance:'80px',
    duration:2000,
    delay:200
});

ScrollReveal().reveal('.home-content, .heading', { origin:'top'});
ScrollReveal().reveal('.home-img, .services-container,.portfolio-box,.contact form', { origin:'bottom'});
ScrollReveal().reveal('.home-content h1, .about', { origin:'left'});
ScrollReveal().reveal('.home-content p, .about-img,h3,.btn', { origin:'right'});




// ========================  typed js ============================ //
const typed = new Typed('.multiple-text',{
    strings:['Python Developer','Web developer','Mobile Developer','Telegram Bot Developer'],
    typeSpeed:100,
    backSpeed:100,
    backDelay:1000,
    loop:true
});


// ========================= CIRCLE SKILLS ===================
const circles = document.querySelectorAll('.circle');

circles.forEach(elem=>{
    var dots = elem.getAttribute("data-dots");
    var marked = elem.getAttribute("data-percent");
    var percent = Math.floor((dots*marked)/100);
    var points = "";
    var rotate = 360 / dots;

    for (let i = 0; i < dots ; i++){
        points += `<div class="points" style="--i:${i}; --rot:${rotate}deg"></div>`;
    }

    elem.innerHTML = points;

    const pointsMarked = elem.querySelectorAll('.points');
    for(let i = 0; i < percent; i++) {
        pointsMarked[i].classList.add('marked');
    }
});
// preloader

