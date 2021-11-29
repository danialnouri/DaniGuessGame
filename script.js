'use strict';

const secretNumber = Math.trunc( Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
const displayMessage = function (message) {
    document.querySelector('.message').textContent = message;
}


document.querySelector('.check').addEventListener('click' , function () { const guess = Number (document.querySelector('.guess').value);

    if (!guess) {
       displayMessage('⛔️ no number!');
    }else if (guess === secretNumber){
        displayMessage('🎉 Correct Number');
        document.querySelector('.number').textContent = secretNumber;
        document.querySelector('body').style.backgroundColor = '#60b347' ;
        if (highscore > score){
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }

    }else if (guess !== secretNumber){
        if (score > 1){
            // document.querySelector('.message').textContent = guess > secretNumber ? '📈 Too High!' : '📉 Too Low!';
            displayMessage(guess > secretNumber ? '📈 Too High!' : '📉 Too Low!'); 
            score --;
            document.querySelector('.score').textContent = score;
            } else {
                // document.querySelector('.message').textContent = '💥 You Lost The Game!';
                displayMessage('💥 You Lost The Game!');
                document.querySelector('.score').textContent = 0 ;
            }
        }
    
    });
    // }else if (guess > secretNumber) {
    //     if (score > 1){
    //     document.querySelector('.message').textContent = '📈 Too High!';
    //     score --;
    //     document.querySelector('.score').textContent = score;
    //     } else {
    //         document.querySelector('.message').textContent = '💥 You Lost The Game!';
    //         document.querySelector('.score').textContent = 0 ;
    //     }
    // }else if (guess < secretNumber){
    //     if (score > 1){
    //     document.querySelector('.message').textContent = '📉 Too Low!';
    //     score --;
    //     document.querySelector('.score').textContent = score;
    //     }else {
    //         document.querySelector('.message').textContent = '💥 You Lost The Game!';
    //         document.querySelector('.score').textContent = 0 ;
    //     }
    // }
    // })

document.querySelector('.again').addEventListener('click' , function () {
    score = 20;
    const secretNumber = Math.trunc( Math.random() * 20) + 1;
    // document.querySelector('.message').textContent = 'Start guessing...';
    displayMessage('Start guessing...');
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';
    document.querySelector('body').style.backgroundColor = '#222';

    
});