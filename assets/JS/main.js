// barra de busqueda
document.addEventListener('DOMContentLoaded', () => {
    const searchForm = document.querySelector('.header__search-form');
    const searchInput = document.getElementById('search-input');
    const cards = document.querySelectorAll('.card__grid');

    searchForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const searchValue = searchInput.value.toLowerCase().trim();

        cards.forEach((card) => {
            const title = card.querySelector('.card__title').textContent.toLowerCase();
            if (title.includes(searchValue)) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        })
    })
})

// menu lateral

let showMenu = false;

const handleMenu = () => {
    const menu = document.getElementById('mobile__menu');
    if (showMenu) {
        menu.className = menu.className.replace('-visible', '');
    } else {
        menu.className = menu.className.concat('-visible');
    }
    showMenu = !showMenu;
}


