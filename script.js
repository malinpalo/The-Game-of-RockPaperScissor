
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
    //**Functions that makes the game play*/
    //*Declearing variables*//
    const playGame = () => {
        const choices = document.querySelectorAll('.choices button');
        const plahand = document.querySelector('.player-wave');
        const comphand = document.querySelector('.computer-wave');
        //**Computers random choices*/
        const compchoices = ['rock', 'paper', 'scissors'];
        
        choices.forEach(choice=>{
            choice.addEventListener('click', function() {

                const randomComp = Math.floor(Math.random() * 3);
                const choiceComp = compchoices[randomComp];

            });
        });
    };

    const compareWeapons = (choisePlayer, choiseComp) =>{
        const winlose = document.querySelector('.winlose');

        if(choisePlayer === choiseComp){
            winlose.textContent = 'Oh, it is a tie';
            return;
        }
        
        if(choisePlayer === 'rock'){
            if(chiceComp === 'scissors'){
                winlose.textContent = 'Yeay, you win!'
                return;
            }else{
                winlose.textContentxt = 'Buuhu, you lost!';
                return;
            }
        }
        
        if(choisePlayer === 'paper'){
            if(chiceComp === 'scissors'){
                winlose.textContent = 'Buuhu, you lost!'
                return;
            }else{
                winlose.textContentxt = 'Yeay, you win!';
                return;
            }
        }

        if(choisePlayer === 'scissors'){
            if(choiceComp === 'rock'){
                winlose.textContent = 'Buuhu, you lost!'
                return;
            }else{
                winlose.textContentxt.Content = 'Yeay, you win!';
                return;
            }
        }
      }
    //**Calls the functions for the game */
    startG();
    playGame();
    
};

theGame();