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
