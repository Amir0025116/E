const burger = document.querySelector('.burger'),
    links = document.querySelector('.header-nav-links')

burger.addEventListener('click', function () {
    this.classList.toggle('active')
    links.classList.toggle('open')
})
 