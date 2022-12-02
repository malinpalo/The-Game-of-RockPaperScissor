const match = () => {
    let playerScore =0;
    let compScore =0;

    const playGame = () => {
        const startBtn = document.querySelector('.welcome button');
        const welcomeScreen = document.querySelector('.welcome');
        const gamePlay = document.querySelector('.game-play');

        startBtn.addEventListener('click', ()=> {
            welcomeScreen.classList.add('fadeOut'); 
        });
    }; 

    startGame();
};

game();