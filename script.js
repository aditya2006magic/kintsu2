var toggle = document.getElementById('darkToggle');

toggle.addEventListener('click', function () {
    document.body.classList.toggle('dark');
    if (document.body.classList.contains('dark')) {
        toggle.textContent = '☀️';
    } else {
        toggle.textContent = '🌙';
    }
});
