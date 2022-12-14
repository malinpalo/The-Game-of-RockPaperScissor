/**Function to start the game*/
const theGame = () => {
    /**Declaring global Variables to update the scoreboard */
    let playerScore = 0;
    let compScore = 0;
    let rounds = 0;
    
    /**The welcome page that starts the game and fades out into the game area*/
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
        const choices = document.querySelectorAll('.player-choices button');
        const playHand = document.querySelector('.player-wave');
        const compHand = document.querySelector('.computer-wave');
        const weapons = document.querySelectorAll('.weapons img');

        weapons.forEach(weapon => {
            weapon.addEventListener('animationend', function(){
                this.style.animation = '';
            });
        })
        //**Function that sets the computers choices, rounds left, and time delay */
        const compChoices = ['rock', 'paper', 'scissors'];
        choices.forEach(choice => {
            choice.addEventListener('click', function() {
                const roundsLeft = document.querySelector('.rounds-left'); 
                rounds++;
                roundsLeft.innerText = `Rounds Left: ${5-rounds}`;
                //**Computers random choise */
                const randomComp = Math.floor(Math.random() * 3);
                const choiceComp = compChoices[randomComp]; 
                //**Sets delay on compare Weapons */
                setTimeout(() =>{ 
                    compareWeapons(this.textContent.trim(), choiceComp);
                    playHand.src = `../assets/images/${this.textContent.trim()}.webp`;
                    compHand.src = `../assets/images/${choiceComp.trim()}.webp`;
                }, 2000);

                playHand.style.animation ='userShake 2s ease';
                compHand.style.animation ='compShake 2s ease';
                
               
                
                
                //**The game ends after 5 rounds */
                if(rounds === 5) {
                    gameOver(choices, roundsLeft);
                  }
           
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
      };
      /**
 * Runs when game is over
 */
    const gameOver = (choices, roundsLeft) => {


      const chooseRound = document.querySelector('.round');
      const playagainButton = document.querySelector('.play-again');
      const winLose = document.querySelector('.winlose');
      const weapons = document.querySelectorAll('.weapons img');
      
      choices.forEach(choice => {
        choice.style.display = 'none';
      });
    
      chooseRound.textContent = 'Game over!';
      roundsLeft.style.display = 'none';
      weapons.style.display = 'none';

    
      if (playerScore > compScore) {
        winLose.style.fontSize = '2rem';
        winLose.textContent = 'Tjohoo!! You won!';
        winLose.style.color = '#B534D2';
        
      } else if (playerScore < compScore) {
        winLose.style.fontSize = '2rem';
        winLose.textContent = 'To bad, you lost!';
        winLose.style.color = '#B534D2';
      } else {
        winLose.style.fontSize = '2rem';
        winLose.textContent = 'Tie';
        winLose.style.color = '#B534D2';
      }
      playagainButton.texContent = 'Play again?';
      playagainButton.style.display ='flex';
      playagainButton.addEventListener('click', () => {
        window.location.reload();
      });
  };
    
    //**Calls the functions for the game */
    startG();
    playGame();
};
//**Calls the Game */
theGame();