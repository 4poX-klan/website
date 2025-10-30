
function burgerMenuToggle() {
    document.querySelectorAll('[data-bm-state]').forEach(element => {
        const isInactive = element.dataset.bmState === "inactive";
        element.dataset.bmState = isInactive ? "active" : "inactive";
    });
}
const burgerMenuBtn = document.querySelector('.burger-menu__btn');
const burgerMenuList = document.querySelector('.burger-menu-list');
const burgerMenuOverlay = document.querySelector('.burger-menu-overlay');
burgerMenuBtn.addEventListener('click', burgerMenuToggle);
burgerMenuList.addEventListener('click', event => event.target === burgerMenuList && burgerMenuToggle());
burgerMenuOverlay.addEventListener('click', burgerMenuToggle);
