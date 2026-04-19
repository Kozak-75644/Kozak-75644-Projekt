const themeBtn = document.getElementById('theme-btn');
const themeStyle = document.getElementById('theme-style');

themeBtn.addEventListener('click', function() {
    if (themeStyle.getAttribute('href') === 'red.css') {
        themeStyle.setAttribute('href', 'green.css');
        themeBtn.textContent = 'Zmień motyw na czerwony';
    } else {
        themeStyle.setAttribute('href', 'red.css');
        themeBtn.textContent = 'Zmień motyw na zielony';
    }
});

const toggleBtn = document.getElementById('toggle-section-btn');
const sectionToToggle = document.getElementById('projekty'); 

toggleBtn.addEventListener('click', function() {
    if (sectionToToggle.style.display === 'none') {
        sectionToToggle.style.display = 'block';
        toggleBtn.textContent = 'Ukryj sekcję Projekty';
    } else {
        sectionToToggle.style.display = 'none';
        toggleBtn.textContent = 'Pokaż sekcję Projekty';
    }
});

const formularz = document.getElementById('moj-formularz');

if (formularz) {
    formularz.addEventListener('submit', function(e) {
        e.preventDefault(); 

        let imie = document.getElementById('imie').value;
        let nazwisko = document.getElementById('nazwisko').value;
        let email = document.getElementById('email').value;
        let wiadomosc = document.getElementById('wiadomosc').value;

        let bladImie = document.getElementById('blad-imie');
        let bladNazwisko = document.getElementById('blad-nazwisko');
        let bladEmail = document.getElementById('blad-email');
        let bladWiadomosc = document.getElementById('blad-wiadomosc');
        let sukces = document.getElementById('sukces');

        bladImie.textContent = "";
        bladNazwisko.textContent = "";
        bladEmail.textContent = "";
        bladWiadomosc.textContent = "";
        sukces.style.display = "none";

        let ok = true;

        if (imie === "") {
            bladImie.textContent = "Podaj imię";
            ok = false;
        } else if (/[0-9]/.test(imie)) {
            bladImie.textContent = "Bez cyfr";
            ok = false;
        }

        if (nazwisko === "") {
            bladNazwisko.textContent = "Podaj nazwisko";
            ok = false;
        } else if (/[0-9]/.test(nazwisko)) {
            bladNazwisko.textContent = "Bez cyfr";
            ok = false;
        }

        if (email === "" || email.includes("@") === false || email.includes(".") === false) {
            bladEmail.textContent = "Błędny email";
            ok = false;
        }

        if (wiadomosc === "") {
            bladWiadomosc.textContent = "Napisz wiadomość";
            ok = false;
        }

        if (ok === true) {
            sukces.style.display = "block";
        }
    });
}
