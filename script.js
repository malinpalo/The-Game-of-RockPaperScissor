const theGame = () => {
    let playerScore =0;
    let compScore =0;

    const startG = () => {
        const startBtn = document.querySelector('.welcome button');
        const welcomeScreen = document.querySelector('.welcome');
        const gamePlay = document.querySelector('.game-play');

        startBtn.addEventListener('click', ()=> {
            welcomeScreen.classList.add('fadeOut'); 
            gamePlay.classList.add('fadeIn');
        });
    }; 

    const playGame = () => {
        const choices = document.querySelectorAll('.choices button');
        const plahand = document.querySelector('.player-wave');
        const comphand = document.querySelector('.computer-wave');

        //**Computers random choices*/
        const compchoices = ['rock', 'paper', 'scissors'];

        choices.forEach(choice=>{
            choice.addEventListener('click', function() {

                const randomComp = Math.floor(Math.random() * 3);
                const choiseComp = compchoices[randomComp];
            });
        });


        
        
        };

    startG();
    playGame();
    
};

theGame();