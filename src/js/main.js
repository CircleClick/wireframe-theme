
const nav_toggle_listener = () => {
    document.body.classList.toggle('navbar--toggled');
}
const nav_toggle = document.getElementById('nav_toggle');
nav_toggle.addEventListener('click', nav_toggle_listener);


const toggleSubMenu = (submenu) => {
    if (submenu.offsetHeight === 0) {
        submenu.style.height = submenu.children.length*(submenu.querySelector('li').offsetHeight)+'px';
    } else {
        submenu.style.height = '0px';
    }
}

const subMenuLinkListener = (e) => {
    e.preventDefault();
    e.target.parentElement.classList.toggle('navbar__menu-item--active');
    toggleSubMenu(e.target.parentElement.querySelector('.sub-menu'));
}
const subMenuIconListener = (e) => {
    e.preventDefault();
    e.target.parentElement.parentElement.classList.toggle('navbar__menu-item--active');
    toggleSubMenu(e.target.parentElement.parentElement.querySelector('.sub-menu'));
}

const linksWithDropdown = document.querySelectorAll('.navbar__menu .menu-item-has-children > a');
for (let index = 0; index < linksWithDropdown.length; index++) {
    const element = linksWithDropdown[index];
    element.addEventListener('click', subMenuLinkListener, {bubbles: false});

    const icon = document.createElement('i');
    icon.className = 'fa fa-angle-down';
    icon.setAttribute('aria-hidden', 'true');
    icon.addEventListener('click', subMenuIconListener, {bubbles: false});
    element.appendChild(icon);
}