/**Variables created in the Global scope*/
const theGame = () => {
    let playerScore =0;
    let compScore =0;
    /**The welcome page that starts the game*/
    const startG = () => {
        const startBtn = document.querySelector('.welcome button');
        const welcomeScreen = document.querySelector('.welcome');
        const gamePlay = document.querySelector('.game-play');

        startBtn.addEventListener('click', ()=> {
            welcomeScreen.classList.add('fadeOut'); 
            gamePlay.classList.add('fadeIn');
        });
    }; 
    //**Functions that makes the game play*/
    //*Declearing variables*//
    const playGame = () => {
        const choices = document.querySelectorAll('.choices button');
        const playHand = document.querySelector('.player-wave');
        const compHand = document.querySelector('.computer-wave');
        //**Computers random choices*/
        const compChoices = ['rock', 'paper', 'scissors'];
        choices.forEach(choice => {
            choice.addEventListener('click', function() {
                const randomComp = Math.floor(Math.random() * 3);
                const choiceComp = compChoices[randomComp]; 

                compareWeapons(this.textContent, choiceComp.trim());
                playHand.src = `../assets/images/${this.textContent.trim()}.webp`;
                compHand.src = `../assets/images/${choiceComp.trim()}.webp`;
            });
        });
    };

    const compareWeapons = (choicePlayer, choiceComp) =>{
        const winLose = document.querySelector('.winlose');

        if(choicePlayer === choiceComp){
            winLose.textContent = 'Oh, it is a tie';
            return;
        };

        if(choicePlayer === 'rock'){
            if(choiceComp === 'scissors'){
                winLose.textContent = 'Yeay, you win!'
                return;
            }else{
                winLose.textContent = 'Buuhu, you lost!';
                return;
            };
        };
        
        if(choicePlayer === 'paper'){
            if(choiceComp === 'scissors'){
                winLose.textContent = 'Buuhu, you lost!'
                return;
            }else{
                winLose.textContent = 'Yeay, you win!';
                return;
            };
        };

        if(choicePlayer === 'scissors'){
            if(choiceComp === 'rock'){
                winLose.textContent = 'Buuhu, you lost!'
                return;
            }else{
                winLose.textContent = 'Yeay, you win!';
                return;
            }
        }
      }
    
    //**Calls the functions for the game */
    startG();
    playGame();
};
//**Calls the Game */
theGame();