const mobileBtn = document.querySelector('#btn_mobile')
const navLinks = document.querySelector('#nav_links')
const icon = document.querySelector('.btn_mobile i')

mobileBtn.addEventListener('click', () => {
    navLinks.classList.toggle('show')
    icon.classList.toggle('fa-times')
    icon.classList.toggle('fa-bars')
})

window.addEventListener('scroll', () => {
    const header = document.querySelector('#header')

    if(window.scrollY > 0){
       header.style.boxShadow = '0 4px 10px rgba(0, 0, 0, 0.1)'
    } else {
        header.style.boxShadow = 'none'
    }
})