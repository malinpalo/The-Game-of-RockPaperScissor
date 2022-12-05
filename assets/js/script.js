/**Function to start the game*/
const theGame = () => {
    /**Declaring global Variables to update the scoreboard */
    let playerScore = 0;
    let compScore = 0;
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

                compareWeapons(this.textContent.trim(), choiceComp);
                playHand.src = `../assets/images/${this.textContent.trim()}.webp`;
                compHand.src = `../assets/images/${choiceComp.trim()}.webp`;

                playHand.style.animation ='userShake 2s ease';
                compHand.style.animation ='compShake 2s ease';
           
            });
        });
    };
    /**Updates the scoreboard*/
    const score = () =>{
        const userScore = document.querySelector('.user-score p');
        const computerScore = document.querySelector('.comp-score p');
        userScore.textContent = playerScore;
        computerScore.textContent = compScore;
    }
    /**Compares player and computer hands and increments the options by one for each round played */
    const compareWeapons = (choicePlayer, choiceComp) =>{
        const winLose = document.querySelector('.winlose');

        if(choicePlayer === choiceComp){
            winLose.textContent = 'Oh, it is a tie';
            return;
        };

        if(choicePlayer === 'rock'){
            if(choiceComp === 'scissors'){
                winLose.textContent = 'Yeay, you win!'
                playerScore++;
                score();
                return;
            }else{
                winLose.textContent = 'Buuhu, you lost!';
                compScore++;
                score();
                return;
            };
        };
        
        if(choicePlayer === 'paper'){
            if(choiceComp === 'scissors'){
                winLose.textContent = 'Buuhu, you lost!'
                compScore++;
                score();
                return;
            }else{
                winLose.textContent = 'Yeay, you win!';
                playerScore++;
                score();
                return;
            };
        };

        if(choicePlayer === 'scissors'){
            if(choiceComp === 'rock'){
                winLose.textContent = 'Buuhu, you lost!'
                compScore++;
                score();
                return;
            }else{
                winLose.textContent = 'Yeay, you win!';
                playerScore++;
                score();
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