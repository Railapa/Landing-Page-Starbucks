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

    if (window.scrollY > 0) {
        header.style.boxShadow = '0 4px 10px rgba(0, 0, 0, 0.1)'
    } else {
        header.style.boxShadow = 'none'
    }
})

const detalhesProdutos = {
    "Avelã": {
        calorias: "350 kcal",
        ingredientes: ["Leite", "Café", "Xarope de Avelã", "Chantilly"],
        tamanhos: ["Pequeno", "Médio", "Grande"]
    },

    "Pistache": {
        calorias: "400 kcal",
        ingredientes: ["Leite", "Café", "Extrato de Pistache", "Grãos triturados"],
        tamanhos: ["Pequeno", "Médio", "Grande"]
    },

    "Morango": {
        calorias: "280 kcal",
        ingredientes: ["Leite", "Base de Creme", "Polpa de Morango", "Chantilly"],
        tamanhos: ["Pequeno", "Médio", "Grande"]
    }
}

const trending_card = [...document.querySelectorAll('.trending-card')]
const modal_overlay = document.querySelector('.modal-overlay')
const close_modal = document.querySelector('#close-modal')
const modal_title = document.querySelector('#modal-title')
const modal_calories = document.querySelector('#modal-calories')
const modal_img = document.querySelector('.modal-img')
const modal_ingredients = document.querySelector('#modal-ingredients')
const modal_tamanhos = document.querySelector('#modal-tamanhos')

trending_card.forEach((card) => {
    card.addEventListener('click', () => {

        const nomeProduto = card.dataset.product

        const info = detalhesProdutos[nomeProduto]
        modal_title.innerHTML = nomeProduto

        const infoCalorias = info.calorias
        modal_calories.innerHTML =  infoCalorias

        const infoIngredientes = info.ingredientes.join(', ')
        modal_ingredients.innerHTML = infoIngredientes

        const infoTamanhos = info.tamanhos.join(', ')
        modal_tamanhos.innerHTML = infoTamanhos

        modal_img.src = card.querySelector('img').src 

        modal_overlay.classList.add('modal-overlay-active')
    })
})

close_modal.addEventListener('click', () => {
    modal_overlay.classList.remove('modal-overlay-active')
})

window.addEventListener('keydown', (event) => {
    if(event.key === 'Escape'){
        modal_overlay.classList.remove('modal-overlay-active')
    }
})

modal_overlay.addEventListener('click', (event) => {
    if(event.target === modal_overlay){
        modal_overlay.classList.remove('modal-overlay-active')
    }
})