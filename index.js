document.addEventListener('DOMContentLoaded', function () {
    const offcanvasMenu = document.querySelector('.offcanvas-menu');
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const searchIcon = document.querySelector('.btn');
    const searchInput = document.querySelector('#search-input');
    const navPoints = document.querySelector('.nav-point');

    hamburgerMenu.addEventListener('click', function () {
        offcanvasMenu.classList.toggle('show');
    });

    searchIcon.addEventListener('click', function () {
        searchInput.classList.toggle('show');

        if (window.innerWidth < 768) {
            hamburgerMenu.style.display = searchInput.classList.contains('show') ? 'none' : 'flex';
            searchInput.style.display = 'block'; 
        }

        if (window.innerWidth >= 768) {
            if (searchInput.classList.contains('show')) {
                navPoints.style.display = 'none';
                hamburgerMenu.style.display = 'none';
                searchInput.style.display = 'block'; 
            } else {
                navPoints.style.display = 'flex';
                hamburgerMenu.style.display = 'none';
                searchInput.style.display = 'none'; 
            }
        }
    });


    window.addEventListener('resize', function () {
        if (window.innerWidth >= 768) {
            hamburgerMenu.style.display = 'none';

            if (searchInput.classList.contains('show')) {
                navPoints.style.display = 'none';
            } else {
                navPoints.style.display = 'flex';
            }
        } else {
            navPoints.style.display = 'none';
        }
    });

    if (window.innerWidth >= 768) {
        hamburgerMenu.style.display = 'none';
    }
});
