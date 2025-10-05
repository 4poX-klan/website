function burgerMenu() {
    const burgerMenuOpen = document.getElementById('burger-menu-open')
    const burgerMenuClose = document.getElementById('burger-menu-close')
    burgerMenuOpen.classList.toggle('disp-none')
    burgerMenuClose.classList.toggle('disp-flex')
    const burgerMenu = document.getElementById('burger-menu')
    burgerMenu.classList.toggle('menu-on')
    const burgerMenuOverlay = document.getElementById('burger-menu-overlay')
    burgerMenuOverlay.classList.toggle('disp-block')
}