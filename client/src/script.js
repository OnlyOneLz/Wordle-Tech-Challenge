const app = () => {

// Query Selectors

const startBtn = document.querySelector('.load-page-button')
const loadPageModal = document.querySelector('.load-page')
const homePage = document.querySelector('.home-page')
const homeContainer = document.querySelector('.home-container')
const gridContainer = document.querySelector('.grid-container');

// Variables

const numRows = 6;
const numCols = 5;

// Functions

const createWordleGrid = () => {
    for (let i = 0; i < numRows; i++) {
        for (let j = 0; j < numCols; j++) {
          const gridItem = document.createElement('div');
          gridItem.classList.add('grid-item');
          gridContainer.appendChild(gridItem);
        }
      }
}

const startGame = () => {
    loadPageModal.style.display = 'none'
    homePage.style.backgroundColor = 'rgba(227, 219, 219, 1)'
    homeContainer.style.display = 'flex'
    createWordleGrid()
}



// Event Listenrs

startBtn.addEventListener('click', function () {
    startGame()
})

}

app()