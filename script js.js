
function filterButtons() {
    const searchInput = document.getElementById('search').value.toLowerCase();
    const buttons = document.querySelectorAll('.btn');
    
    buttons.forEach(button => {
        const buttonText = button.textContent.toLowerCase();
        if (buttonText.includes(searchInput)) {
            button.style.display = 'block';
        } else {
            button.style.display = 'none';
        }
    });
}
