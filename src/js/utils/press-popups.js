function pressOutsideClick (e) {
    if (!e.target.parentElement.classList.contains("press__logos") &&
        !e.target.parentElement.parentElement.classList.contains("press__logos")) {
        activePressLink.children[1].style.opacity = "0";
        activePressLink.classList.remove("active");
        document.body.removeEventListener("click", pressOutsideClick);
    }
}
var activePressLink = null;

function pressclick (e) {
    if (!this.classList.contains("active") && window.innerWidth>=1300) {
        e.preventDefault();
        const activelogos = document.body.querySelectorAll('.press__logos > a.active');
        for (let i = 0; i < activelogos.length; i++) {
            activelogos[i].classList.remove("active");
            activelogos[i].style.opacity = "";
        } 

        const element = this;
        activePressLink = this;
        element.classList.add("active");
        window.requestAnimationFrame(()=>{element.children[1].style.opacity = "1";});
        window.addEventListener("scroll", ()=>{
            element.children[1].style.opacity = "0";
            setTimeout(()=>{element.classList.remove("active");},1000);
        }, {once: true})
        document.body.addEventListener("click", pressOutsideClick)
    }

}
module.exports = function () {
    var presslogos = document.body.querySelectorAll(".press__logos > a");
    for (let i = 0; i < presslogos.length; i++) {
        const element = presslogos[i];
        
        element.addEventListener("click", pressclick);
    }
}