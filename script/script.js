const mobileBtn = document.querySelector('#btn_mobile')
const navLinks = document.querySelector('#nav_links')
const icon = document.querySelector('.btn_mobile i')

mobileBtn.addEventListener('click', () => {
    navLinks.classList.toggle('show')
    icon.classList.toggle('fa-times')
    icon.classList.toggle('fa-bars')
})