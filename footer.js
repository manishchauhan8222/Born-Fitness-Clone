// footer.js
document.addEventListener('DOMContentLoaded', function () {

    const subSearch = document.querySelector('.item-search');
    const subIcon = document.querySelector('.sub-search .fa-sharp');
    subSearch.addEventListener('keypress', function (event) {
        if (event.key === 'Enter') { 
            event.preventDefault();
            if (subSearch.value.toLowerCase() === 'protein') {
               
                window.location.href = "protein_page.html";
                subSearch.value = "";
            }


            else if (subSearch.value.toLowerCase() === 'multivitamin') {
                window.location.href = "mutlivitamin.html";
                event.preventDefault();
                subSearch.value = "";
            }
            else if (subSearch.value.toLowerCase() === 'creatine') {
            
                window.location.href = "creatine.html";
                event.preventDefault();
                subSearch.value = "";
            }
            else if (subSearch.value.toLowerCase() === 'gainer') {
                window.location.href = "gainer.html";
                event.preventDefault();
                subSearch.value = "";
            }
            else if (subSearch.value.toLowerCase() === 'mass') {
                window.location.href = "gainer.html";
                event.preventDefault();
                subSearch.value = "";
            }
            else if (subSearch.value.toLowerCase() === 'strength') {
                window.location.href = " max-strength.html";
                event.preventDefault();
                subSearch.value = "";
            }
            else if (subSearch.value.toLowerCase() === 'whey') {
                window.location.href = "whey.html";
                event.preventDefault();
                subSearch.value = "";
            }
            else if (subSearch.value.toLowerCase() === 'isolate') {
                window.location.href = "isolate.html";
                event.preventDefault();
                subSearch.value = "";
            }
            else if (subSearch.value.toLowerCase() === 'cuts') {
                window.location.href = "cuts.html";
                event.preventDefault();
                subSearch.value = "";
            }
            else if (subSearch.value.toLowerCase() === 'testosterone') {
                window.location.href = "test.html";
                event.preventDefault();
                subSearch.value = "";
            }
            else if (subSearch.value.toLowerCase() === 'weight loss') {
                window.location.href = "weight.html";
                event.preventDefault();
                subSearch.value = "";
            }
            else if (subSearch.value.toLowerCase() === 'massage gun') {
                window.location.href = "massage.html";
                event.preventDefault();
                subSearch.value = "";
            }
            else if (subSearch.value.toLowerCase() === 'fish oil') {
                window.location.href = "fish.html";
                event.preventDefault();
                subSearch.value = "";

            }
            else if (subSearch.value.toLowerCase() === 'peanut butter') {
                window.location.href = "peanut.html ";
                subSearch.value = "";

            }
            else if (subSearch.value.toLowerCase() === 'yoga block') {
                window.location.href = "yoga.html";
                subSearch.value = "";

            }
            else if (subSearch.value.toLowerCase() === 'speed roller') {
                window.location.href = "speed.html";
                subSearch.value = "";

            }

        }
    })
    subIcon.addEventListener('click', function () {
        if (subSearch.value.toLowerCase() === 'protein') {
            window.location.href = "protein_page.html";
            subSearch.value = "";
        }

        else if (subSearch.value.toLowerCase() === 'multivitamin') {
            window.location.href = "mutlivitamin.html";
            subSearch.value = "";
        }
        else if (subSearch.value.toLowerCase() === 'creatine') {
            console.log('erroe')
            window.location.href = "creatine.html";
            subSearch.value = "";
        }
        else if (subSearch.value.toLowerCase() === 'gainer') {
            window.location.href = "gainer.html";
            subSearch.value = "";
        }
        else if (subSearch.value.toLowerCase() === 'mass') {
            window.location.href = "gainer.html";
            subSearch.value = "";
        }
        else if (subSearch.value.toLowerCase() === 'strength') {
            window.location.href = " max-strength.html";
            subSearch.value = "";
        }
        else if (subSearch.value.toLowerCase() === 'max') {
            window.location.href = " max-strength.html";
            subSearch.value = "";
        }
        else if (subSearch.value.toLowerCase() === 'whey') {
            window.location.href = "whey.html";
            subSearch.value = "";
        }
        else if (subSearch.value.toLowerCase() === 'isolate') {
            window.location.href = "isolate.html";
            subSearch.value = "";
        }
        else if (subSearch.value.toLowerCase() === 'cuts') {
            window.location.href = "cuts.html";
            subSearch.value = "";
        }
        else if (subSearch.value.toLowerCase() === 'testosterone') {
            window.location.href = "test.html";
            subSearch.value = "";
        }
        else if (subSearch.value.toLowerCase() === 'weight loss') {
            window.location.href = "weight.html";
            subSearch.value = "";
        }
        else if (subSearch.value.toLowerCase() === 'massage gun') {
            window.location.href = "massage.html";
            subSearch.value = "";
        }
        else if (subSearch.value.toLowerCase() === 'fish oil') {
            window.location.href = "fish.html";
            subSearch.value = "";

        }
        else if (subSearch.value.toLowerCase() === 'peanut butter') {
            window.location.href = "peanut.html ";
            subSearch.value = "";

        }
        else if (subSearch.value.toLowerCase() === 'yoga block') {
            window.location.href = "yoga.html";
            subSearch.value = "";

        }
        else if (subSearch.value.toLowerCase() === 'speed roller') {
            window.location.href = "speed.html";
            subSearch.value = "";

        }
    })

});


document.addEventListener('DOMContentLoaded', function () {

    const signInLink = document.querySelector('.offcanvas-menu .signInPage');
    signInLink.addEventListener('click', function () {

        window.location.href = "signIn.html";
        closeOffCanvasMenu();

    });
    const signInLink1 = document.querySelector('.nav-point .signInPage');
    signInLink1.addEventListener('click', function () {

        window.location.href = "signIn.html";
        closeOffCanvasMenu();
    });

    const offCanvasLinks = document.querySelectorAll('.offcanvas-menu a');
    offCanvasLinks.forEach(link => {
        link.addEventListener('click', closeOffCanvasMenu);

    });
});
document.addEventListener('DOMContentLoaded', function () {

    const homeLink = document.querySelector('.offcanvas-menu .homePage');
    homeLink.addEventListener('click', function () {

        window.location.href = "index.html";
        closeOffCanvasMenu();

    });
    const homeLink1 = document.querySelector('.nav-point .homePage');
    homeLink1.addEventListener('click', function () {

        window.location.href = "index.html";
        closeOffCanvasMenu();
    });

    const offCanvasLinks = document.querySelectorAll('.offcanvas-menu a');
    offCanvasLinks.forEach(link => {
        link.addEventListener('click', closeOffCanvasMenu);

    });
});

document.addEventListener('DOMContentLoaded', function () {
    const newsLetterLink = document.querySelector('.offcanvas-menu .newsLetterPage');
    newsLetterLink.addEventListener('click', function () {

        window.location.href = "newsletter.html";
        closeOffCanvasMenu();

    });
    const newsletterLink1 = document.querySelector('.nav-point .newsLetterPage');
    newsletterLink1.addEventListener('click', function () {

        window.location.href = "newsletter.html";
        closeOffCanvasMenu();
    });

    const offCanvasLinks = document.querySelectorAll('.offcanvas-menu a');
    offCanvasLinks.forEach(link => {
        link.addEventListener('click', closeOffCanvasMenu);

    });
});
document.addEventListener('DOMContentLoaded', function () {
    const blogLink = document.querySelector('.offcanvas-menu .blogPage');
    blogLink.addEventListener('click', function () {

        window.location.href = "blog.html";
        closeOffCanvasMenu();

    });
    const blogLink1 = document.querySelector('.nav-point .blogPage');
    blogLink1.addEventListener('click', function () {

        window.location.href = "blog.html";
        closeOffCanvasMenu();
    });

    const offCanvasLinks = document.querySelectorAll('.offcanvas-menu a');
    offCanvasLinks.forEach(link => {
        link.addEventListener('click', closeOffCanvasMenu);

    });
});
document.addEventListener('DOMContentLoaded', function () {
    const storeLink = document.querySelector('.offcanvas-menu .storePage');
    storeLink.addEventListener('click', function () {

        window.location.href = "store.html";
        closeOffCanvasMenu();

    });
    const storeLink1 = document.querySelector('.nav-point .storePage');
    storeLink1.addEventListener('click', function () {

        window.location.href = "store.html";
        closeOffCanvasMenu();
    });

    const offCanvasLinks = document.querySelectorAll('.offcanvas-menu a');
    offCanvasLinks.forEach(link => {
        link.addEventListener('click', closeOffCanvasMenu);

    });
});
document.addEventListener('DOMContentLoaded', function () {
    const coachingLink = document.querySelector('.offcanvas-menu .coachingPage');
    coachingLink.addEventListener('click', function () {

        window.location.href = "coaching.html";
        closeOffCanvasMenu();

    });
    const coachingLink1 = document.querySelector('.nav-point .coachingPage');
    coachingLink1.addEventListener('click', function () {

        window.location.href = "coaching.html";
        closeOffCanvasMenu();
    });

    const offCanvasLinks = document.querySelectorAll('.offcanvas-menu a');
    offCanvasLinks.forEach(link => {
        link.addEventListener('click', closeOffCanvasMenu);

    });
});


document.addEventListener('DOMContentLoaded', function () {
    const subInput = document.querySelector('.sub-input');
    const subButton = document.querySelector('.sub-buttton');



    subInput.addEventListener('keypress', function (event) {
        if (event.key === 'Enter') {

            event.preventDefault();
            console.log(subInput.value)
            subInput.value = "";
            notValidMessage.style.display = 'none';
        }
        else {
            notValidMessage.style.display = 'block';
            event.preventDefault();

        }

    })
    subButton.addEventListener('click', function (event) {

        event.preventDefault();
        console.log(subInput.value)
        subInput.value = "";
        notValidMessage.style.display = 'none';

    })

});
document.addEventListener('DOMContentLoaded', function () {
    const searchIconFooter = document.querySelector('.footer-search');
    const footerEmailInput = document.getElementById('comment-box');

    if (searchIconFooter && footerEmailInput) {
        searchIconFooter.addEventListener('click', function (event) {
            event.preventDefault();
            console.log(footerEmailInput.value)
            footerEmailInput.value = '';
        });

        footerEmailInput.addEventListener('keypress', function (event) {
            if (event.key === 'Enter') {
                event.preventDefault();
                console.log(footerEmailInput.value)
                footerEmailInput.value = '';
            }
        });
    } else {
        console.error('Element not found. Check the class or ID used for selection.');
    }
});
