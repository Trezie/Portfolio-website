// add class navbarDark on navbar scroll
const header = document.querySelector('.navbar');

window.onscroll = function() {
    var top = window.scrollY;
    if(top >=100) {
        header.classList.add('navbarDark');
    }
    else {
        header.classList.remove('navbarDark');
    }
}


const navs = document.querySelector('.collapse-navbar-collapse');
    
document.querySelector('#menu-close').onclick = () =>{
    navs.classList.toggle('active'); 
}



$('#menu-btn').click(function() {
    $('nav .collapse-navbar-collapse ul').addClass('active')
});
$('#menu-close').click(function() {
    $('nav .collapse-navbar-collapse ul').removeClass('active')
});
