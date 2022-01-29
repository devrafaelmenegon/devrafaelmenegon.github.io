let btnHome = document.getElementById('btn-home'),
    btnServices = document.getElementById('btn-services'),
    btnPortfolio = document.getElementById('btn-portfolio'),
    btnContact = document.getElementById('btn-contact'),
    svgHome = document.getElementById('svg-home-internal'),
    svgServices = document.getElementById('svg-services-internal'),
    svgPortfolio = document.getElementById('svg-portfolio-internal'),
    svgContact = document.getElementById('svg-contact-internal'),
    navbarMobileBottom = document.getElementById('navbar-mobile-bottom');

btnHome.addEventListener('click', function(e){
    svgHome.setAttribute("fill", "var(--on)");
    svgServices.setAttribute("fill", "var(--off)");
    svgPortfolio.setAttribute("fill", "var(--off)");
    svgContact.setAttribute("fill", "var(--off)");
});

btnServices.addEventListener('click', function(e){
    svgHome.setAttribute("fill", "var(--off)");
    svgServices.setAttribute("fill", "var(--on)");
    svgPortfolio.setAttribute("fill", "var(--off)");
    svgContact.setAttribute("fill", "var(--off)");
});

btnPortfolio.addEventListener('click', function(e){
    svgHome.setAttribute("fill", "var(--off)");
    svgServices.setAttribute("fill", "var(--off)");
    svgPortfolio.setAttribute("fill", "var(--on)");
    svgContact.setAttribute("fill", "var(--off)");
});

btnContact.addEventListener('click', function(e){
    svgHome.setAttribute("fill", "var(--off)");
    svgServices.setAttribute("fill", "var(--off)");
    svgPortfolio.setAttribute("fill", "var(--off)");
    svgContact.setAttribute("fill", "var(--on)");
});