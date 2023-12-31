document.addEventListener('DOMContentLoaded', function () {

    // quiz page start button --> issue DOM Content Loading
    const startButton = document.getElementById('start-btn');
    const existingFooter = document.getElementById('existing-quiz-footer');
    const newFooter = document.getElementById('new-quiz-footer');
    startButton.addEventListener('click', function (event) {
        event.preventDefault();
        existingFooter.style.display = 'none';
        newFooter.style.display = 'block';
    })




});

document.addEventListener('DOMContentLoaded', function () {



    // search item by using main-input box
    const fitnessItems = [
        'Protein', 'Multivitamin', 'Creatine', 'Mass Gainer', 'Max Strength',
        'Whey', 'Isolate', 'cuts', 'Testosterone', 'Weight Loss', 'Speed Roller',
        'Massage Gun', 'Yoga Block', 'Fish Oil', 'Peanut Butter'
    ];

    const searchInput = document.querySelector('#search-input');
    const suggestionList = document.querySelector('.suggestion-list');
    const searchSuggestions = document.querySelector('.search-suggestions');

    function updateSuggestions() {
        const searchTerm = searchInput.value.toLowerCase();

        suggestionList.innerHTML = '';
        if (!searchTerm) {
            searchSuggestions.style.display = 'none';
            return;
        }

        const filteredItems = fitnessItems.filter(item => item.toLowerCase().includes(searchTerm));

        if (filteredItems.length > 0) {
            filteredItems.forEach(item => {
                const li = document.createElement('li');
                li.textContent = item;
                suggestionList.appendChild(li);
            });

            searchSuggestions.style.display = 'block';
        } else {
            searchSuggestions.style.display = 'none';
        }
    }

    searchInput.addEventListener('input', updateSuggestions);

    searchInput.addEventListener('keydown', function (event) {
        if (event.key === 'Enter') {
            event.preventDefault();
            const selectedItem = suggestionList.querySelector('li');
            if (selectedItem) {
                searchInput.value = selectedItem.textContent;
                searchSuggestions.style.display = 'none';

                if (searchInput.value.toLowerCase() === 'multivitamin') {
                    window.location.href = 'mutlivitamin.html';
                    searchInput.value = "";
                }
                else if (searchInput.value.toLowerCase() === 'protein') {
                    window.location.href = 'protein_page.html';
                    searchInput.value = "";
                }
                else if (searchInput.value.toLowerCase() === 'creatine') {
                    window.location.href = "creatine.html";
                    searchInput.value = "";
                }
                else if (searchInput.value.toLowerCase() === 'mass gainer') {
                    window.location.href = "gainer.html";
                    searchInput.value = "";
                }
                else if (searchInput.value.toLowerCase() === 'max strength') {
                    window.location.href = " max-strength.html";
                    searchInput.value = "";
                }
                else if (searchInput.value.toLowerCase() === 'whey') {
                    window.location.href = "whey.html";
                    searchInput.value = "";
                }
                else if (searchInput.value.toLowerCase() === 'isolate') {
                    window.location.href = "isolate.html";
                    searchInput.value = "";
                }
                else if (searchInput.value.toLowerCase() === 'cuts') {
                    window.location.href = "cuts.html";
                    searchInput.value = "";
                }
                else if (searchInput.value.toLowerCase() === 'testosterone') {
                    window.location.href = "test.html";
                    searchInput.value = "";
                }
                else if (searchInput.value.toLowerCase() === 'weight loss') {
                    window.location.href = "weight.html";
                    searchInput.value = "";
                }
                else if (searchInput.value.toLowerCase() === 'massage gun') {
                    window.location.href = "massage.html";
                    searchInput.value = "";
                }
                else if (searchInput.value.toLowerCase() === 'fish oil') {
                    window.location.href = "fish.html";
                    searchInput.value = "";
                }
                else if (searchInput.value.toLowerCase() === 'peanut butter') {
                    window.location.href = "peanut.html ";
                    searchInput.value = "";
                }
                else if (searchInput.value.toLowerCase() === 'yoga block') {
                    window.location.href = "yoga.html";
                    searchInput.value = "";
                }
                else if (searchInput.value.toLowerCase() === 'speed roller') {
                    window.location.href = "speed.html";
                    searchInput.value = "";
                }









            }
        }
    });
    function handleSuggestionClick(event) {
        if (event.target && event.target.tagName === 'LI') {
            searchInput.value = event.target.textContent;
            searchSuggestions.style.display = 'none';
            if (searchInput.value.toLowerCase() === 'multivitamin') {
                window.location.href = 'mutlivitamin.html';
                searchInput.value = "";
            } else if (searchInput.value.toLowerCase() === 'protein') {
                window.location.href = 'protein_page.html';
                searchInput.value = "";
            }
            else if (searchInput.value.toLowerCase() === 'creatine') {
                window.location.href = "creatine.html";
                searchInput.value = "";
            }
            else if (searchInput.value.toLowerCase() === 'mass gainer') {
                window.location.href = "gainer.html";
                searchInput.value = "";
            }
            else if (searchInput.value.toLowerCase() === 'max strength') {
                window.location.href = " max-strength.html";
                searchInput.value = "";
            }
            else if (searchInput.value.toLowerCase() === 'whey') {
                window.location.href = "whey.html";
                searchInput.value = "";
            }
            else if (searchInput.value.toLowerCase() === 'isolate') {
                window.location.href = "isolate.html";
                searchInput.value = "";
            }
            else if (searchInput.value.toLowerCase() === 'cuts') {
                window.location.href = "cuts.html";
                searchInput.value = "";
            }
            else if (searchInput.value.toLowerCase() === 'testosterone') {
                window.location.href = "test.html";
                searchInput.value = "";
            }
            else if (searchInput.value.toLowerCase() === 'weight loss') {
                window.location.href = "weight.html";
                searchInput.value = "";
            }
            else if (searchInput.value.toLowerCase() === 'massage gun') {
                window.location.href = "massage.html";
                searchInput.value = "";
            }
            else if (searchInput.value.toLowerCase() === 'fish oil') {
                window.location.href = "fish.html";
                searchInput.value = "";
            }
            else if (searchInput.value.toLowerCase() === 'peanut butter') {
                window.location.href = "peanut.html ";
                searchInput.value = "";
            }
            else if (searchInput.value.toLowerCase() === 'yoga block') {
                window.location.href = "yoga.html";
                searchInput.value = "";
            }
            else if (searchInput.value.toLowerCase() === 'speed roller') {
                window.location.href = "speed.html";
                searchInput.value = "";
            }

        }
    }

    // js for hamburger menu
    suggestionList.addEventListener('click', handleSuggestionClick);
    const offcanvasMenu = document.querySelector('.offcanvas-menu');
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const navPoints = document.querySelector('.nav-point');

    hamburgerMenu.addEventListener('click', function () {
        offcanvasMenu.classList.toggle('show');
    });

    const searchIcon = document.querySelector('.btn');

    searchIcon.addEventListener('click', function () {
        searchInput.classList.toggle('show');

        if (window.innerWidth < 768) {
            hamburgerMenu.style.display = searchInput.classList.contains('show') ? 'none' : 'flex';
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

// js for home page sign up
document.addEventListener('DOMContentLoaded', function () {
    const signUp = document.querySelector('.signup');
    const signupEmail = document.querySelector('.main-email');
    const notValidMessage = document.querySelector('.main-notValid');


    signupEmail.addEventListener('keypress', function (event) {
        if (event.key === 'Enter') {
            event.preventDefault();
            const enteredEmail = signupEmail.value.trim();
            if (isValidEmail(enteredEmail)) {

                console.log(signupEmail.value)
                signupEmail.value = "";
                notValidMessage.style.display = 'none';
                window.location.href = "sign-in-newPage.html";
            }
            else {
                notValidMessage.style.display = 'block';

            }


        }
    })
    signUp.addEventListener('click', function (event) {
        const enteredEmail = signupEmail.value.trim();
        if (isValidEmail(enteredEmail)) {
            event.preventDefault();
            console.log(signupEmail.value)
            signupEmail.value = "";
            notValidMessage.style.display = 'none';
            window.location.href = "sign-in-newPage.html";
        }
        else {
            notValidMessage.style.display = 'block';

        }


    })
    signupEmail.addEventListener('input', function () {
        notValidMessage.style.display = "none";
    });
    function isValidEmail(email) {
        const emailPattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        return emailPattern.test(email);
    }


    // js for small screen navigation

    function closeOffCanvasMenu() {
        const offcanvasMenu = document.querySelector('.offcanvas-menu');
        offcanvasMenu.classList.remove('show');
    }

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






})

// js for sign In page

document.addEventListener('DOMContentLoaded', function () {

    const signInEmail = document.querySelector('.signIn-email');
    const signInBtn = document.querySelector('.signIn-btn');
    const signInHomeLinks = document.querySelectorAll('.signIn-home-link');
    const notValidMessage = document.querySelector('.notvalid');
    signInBtn.addEventListener('click', function (event) {
        const enteredEmail = signInEmail.value.trim();
        if (isValidEmail(enteredEmail)) {
            event.preventDefault();
            console.log(signInEmail.value)

            signInEmail.value = "";
            notValidMessage.style.display = 'none';
            window.location.href = "sign-in-newPage.html";
        }
        else {
            notValidMessage.style.display = 'block';
            event.preventDefault();
        }
    })

    signInEmail.addEventListener('keypress', function (event) {

        if (event.key === 'Enter') {
            event.preventDefault();
            const enteredEmail = signInEmail.value.trim();
            if (isValidEmail(enteredEmail)) {
                console.log(signInEmail.value)

                signInEmail.value = "";
                notValidMessage.style.display = 'none';
                window.location.href = "sign-in-newPage.html";
            }
            else {
                notValidMessage.style.display = 'block';

            }

        }
    });
    signInEmail.addEventListener('input', function () {
        notValidMessage.style.display = "none";
    });
    function isValidEmail(email) {
        const emailPattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        return emailPattern.test(email);
    }



    signInHomeLinks.forEach(link => {
        link.addEventListener('click', function () {

            window.location.href = "index.html";
        });
    });




});
// js for Subscribe page


document.addEventListener('DOMContentLoaded', function () {
    const jumpToBlogPage = document.querySelector('.jumpToBlog');
    const jumpToQuizPage = document.querySelector('.jumpToQuiz')
    jumpToBlogPage.addEventListener('click', function (event) {
        event.preventDefault();
        window.location.href = "blog.html";
    })

    jumpToQuizPage.addEventListener('click', function (event) {
        event.preventDefault();
        window.location.href = "quiz.html";
    })




});

// js for coaching page


document.addEventListener('DOMContentLoaded', function () {
    const coaching3Texts = document.querySelectorAll('.coaching3-text');
    const coaching3HiddenTexts = document.querySelectorAll('.coaching3-hidden-text');

    coaching3Texts.forEach(function (text, index) {
        text.addEventListener('click', function (event) {
            event.preventDefault();
            const clickedTextHiddenText = coaching3HiddenTexts[index];
            toggleHiddenText(clickedTextHiddenText);
        });
    });

    function toggleHiddenText(hiddenText) {
        if (hiddenText.style.display === 'none' || hiddenText.style.display === '') {
            hiddenText.style.display = 'block';
        } else {
            hiddenText.style.display = 'none';
        }
    }
});

