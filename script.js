const burger = document.querySelector('.burger'),
    links = document.querySelector('.header-nav-links'),
    body = document.querySelector('body')
burger.addEventListener('click', function () {
    this.classList.toggle('active')
    links.classList.toggle('open')
    body.classList.toggle('bodyActive')
})
 
function scrollTo(element) {
    window.scroll({
        left: 0,
        top: element.offsetTop,
        behavior:'smooth'
    })
}
var button = document.querySelector('.buttonScroll')
var scrolling = document.querySelector('.sub')

button.addEventListener('click', () => {
    scrollTo(scrolling);
})
