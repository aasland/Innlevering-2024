const openModalImages = document.querySelectorAll('[data-modal-target]')
const closeModalButtons = document.querySelectorAll('[data-close-button]')
const overlay = document.getElementById('overlay')

openModalImages.forEach(image => {
    image.addEventListener('click', () => {
        const modal = document.querySelector(image.dataset.modalTarget)
        openModal(modal)
    })
})

closeModalButtons.forEach(button => {
    button.addEventListener('click', () => {
        const modal = button.closest('.modal')
        closeModal(modal)
    })
})

function openModal(modal) {
    if (!modal) return
    modal.classList.add('active')
    overlay.classList.add('active')
}

function closeModal(modal) {
    if (!modal) return
    modal.classList.remove('active')
    overlay.classList.remove('active')
}
