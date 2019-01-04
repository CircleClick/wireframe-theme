
const nav_toggle_listener = () => {
    document.body.classList.toggle('navbar--toggled');
}
const nav_toggle = document.getElementById('nav_toggle');
nav_toggle.addEventListener('click', nav_toggle_listener);

console.log("hello world");