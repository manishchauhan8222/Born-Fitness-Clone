document.addEventListener('DOMContentLoaded', function () {
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


document.addEventListener('DOMContentLoaded', function () {
    const signUp = document.querySelector('.signup');
    const signupEmail = document.getElementById('email');
    signupEmail.addEventListener('keypress', function (event) {
        if (event.key === 'Enter') {
            event.preventDefault(); 
            signupEmail.value = "";
        }
    })
    signUp.addEventListener('click',function(event){
        event.preventDefault(); 
        signupEmail.value="";
    })

})