const submitted = localStorage['newsletterpopup--submitted'];

const close_listener = () => {
    const popup = document.querySelector('.newsletterpopup__container');
    if (!popup) return;

    localStorage['newsletterpopup--submitted'] = true;

    popup.classList.remove('newsletterpopup--visible');
    setTimeout(()=>{
        popup.classList.remove('newsletterpopup--active');
    },750)
}

const scroll_listener = () => {
    const popup = document.querySelector('.newsletterpopup__container');
    setTimeout(()=>{
        popup.classList.add('newsletterpopup--active');
        window.requestAnimationFrame(()=>{
            window.requestAnimationFrame(()=>{
                popup.classList.add('newsletterpopup--visible');
            });
        });
    },1000)
}

const DOM_listener = () => {
    const popup = document.querySelector('.newsletterpopup__container');
    if (!popup || submitted != undefined) return;

    window.addEventListener('scroll', scroll_listener, {once: true});

    const close = document.querySelector('.newsletterpopup__close');
    close.addEventListener('click', close_listener);
}

window.addEventListener('DOMContentLoaded', DOM_listener);

module.exports = close_listener;