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
            let daneFormularza = {
                imie: imie,
                nazwisko: nazwisko,
                email: email,
                wiadomosc: wiadomosc
            };

            fetch("https://formspree.io/f/mjglpnpa", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(daneFormularza)
            })
            .then(function(odpowiedz) {
                if (odpowiedz.ok) {
                    sukces.style.display = "block";
                    sukces.textContent = "Dane zostały pomyślnie wysłane na serwer!";
                }
            });
        }
    });
}
fetch('dane.json')
    .then(function(odpowiedz) {
        return odpowiedz.json();
    })
    .then(function(dane) {
        let ulUmiejetnosci = document.getElementById('lista-umiejetnosci');
        if (ulUmiejetnosci) {
            for (let i = 0; i < dane.umiejetnosci.length; i++) {
                let li = document.createElement('li');
                li.textContent = dane.umiejetnosci[i];
                ulUmiejetnosci.appendChild(li);
            }
        }

        let ulProjekty = document.getElementById('lista-projekty');
        if (ulProjekty) {
            for (let i = 0; i < dane.projekty.length; i++) {
                let li = document.createElement('li');
                li.innerHTML = dane.projekty[i]; 
                ulProjekty.appendChild(li);
            }
        }
    });

const inputNotatka = document.getElementById('nowa-notatka');
const btnDodaj = document.getElementById('btn-dodaj');
const listaNotatek = document.getElementById('lista-notatek');

if (inputNotatka && btnDodaj && listaNotatek) {
    function odswiezListe() {
        listaNotatek.innerHTML = "";
        let dane = localStorage.getItem('moje_notatki');
        let tablica = [];
        
        if (dane) {
            tablica = JSON.parse(dane);
        }

        for (let i = 0; i < tablica.length; i++) {
            let li = document.createElement('li');
            li.textContent = tablica[i] + " ";

            let btnUsun = document.createElement('button');
            btnUsun.textContent = "Usuń";
            
            btnUsun.addEventListener('click', function() {
                tablica.splice(i, 1);
                localStorage.setItem('moje_notatki', JSON.stringify(tablica));
                odswiezListe();
            });

            li.appendChild(btnUsun);
            listaNotatek.appendChild(li);
        }
    }

    btnDodaj.addEventListener('click', function() {
        let tekst = inputNotatka.value;
        if (tekst !== "") {
            let dane = localStorage.getItem('moje_notatki');
            let tablica = [];
            
            if (dane) {
                tablica = JSON.parse(dane);
            }
            
            tablica.push(tekst);
            localStorage.setItem('moje_notatki', JSON.stringify(tablica));
            
            inputNotatka.value = "";
            odswiezListe();
        }
    });

    odswiezListe();
}
