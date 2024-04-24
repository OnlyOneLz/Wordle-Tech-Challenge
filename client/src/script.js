const app = () => {

// Query Selectors

const startBtn = document.querySelector('.load-page-button')
const loadPageModal = document.querySelector('.load-page')
const homePage = document.querySelector('.home-page')
const homeContainer = document.querySelector('.home-container')

// Functions

const startGame = () => {
    loadPageModal.style.display = 'none'
    homePage.style.backgroundColor = 'rgba(227, 219, 219, 1)'
    homeContainer.style.display = 'flex'
}

// Event Listenrs

startBtn.addEventListener('click', function () {
    startGame()
})

}

app()