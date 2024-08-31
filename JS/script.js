/*============toggle icon section =============*/
let menuIcon = document.querySelector('#menu-icon');
let navber = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('fa-x');
    navber.classList.toggle('active');

};
/*============scroll section =============*/
let section = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    section.forEach(sec => {
        let top = window.scrollY; 
        let offset = sec.offsetTop - 150;
        let hight = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + hight) {
            navlinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id +  ']').classList.add('active');

            });

        };

    });

    /*============sticky navbar =============*/
    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);
    
    /*============ remove toggle icon section =============*/
    menuIcon.classList.remove('fa-x');
    navber.classList.remove('active');

};