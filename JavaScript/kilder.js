document.getElementById('toggle-button').addEventListener('click', function () {
    const extraInfo = document.getElementById('kilder');
    if (kilder.style.display === 'none') {
        kilder.style.display = 'block';
        document.getElementById('toggle-button').textContent = 'Skjul';
    } else {
        extraInfo.style.display = 'none';
        document.getElementById('toggle-button').textContent = 'Kilder';
    }
});