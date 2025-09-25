function burgerMenu() {
    const burgerMenuOpen = document.getElementById('burger-menu-open')
    const burgerMenuClose = document.getElementById('burger-menu-close')
    const burgerMenu = document.getElementById('burger-menu')
    const bugerMenuOverlay = document.getElementById('burger-menu-overlay')
    burgerMenuOpen.classList.toggle('off')
    burgerMenuClose.classList.toggle('on')
    burgerMenu.classList.toggle('on')
    bugerMenuOverlay.classList.toggle('on')
}