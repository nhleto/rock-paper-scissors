let playerScore=0;
let computerScore=0;       
const rock_button=document.getElementById('rock');
const paper_button=document.getElementById('paper');
const scissors_button=document.getElementById('scissors');
const player_Score=document.getElementById('User-Score');
const computer_Score=document.getElementById('Computer-Score');
const winner=document.getElementById('winner');
const comp_rock=document.getElementById('comp-rock');
const comp_paper=document.getElementById('comp-paper');
const comp_scissors=document.getElementById('comp-scissors');

function fadeSelectionOut(){
    rock_button.style.opacity=1;
}

function fadeSelectionIn(){
    rock_button.style.opacity=1;
}

function fadeInPS(){
    paper_button.style.opacity=1;
    scissors_button.style.opacity=1;
}

function fadeInRS(){
    rock_button.style.opacity=1;
    scissors_button.style.opacity=1;
}

function fadeInRP(){
    rock_button.style.opacity=1;
    paper_button.style.opacity=1;
}

function fadeOut(){
    winner.style.opacity=0;
}

function fadeIn(){
    winner.style.opacity=1;
}

function changeInnerHtmlLose(playerSelection,computerSelection){
    winner.innerHTML='You LOSE. '+ computerSelection+ ' beats '+ playerSelection + '.';
    console.log('fired LOSE')
}

function changeInnerHtmlWin(playerSelection,computerSelection){
    winner.innerHTML='You WIN! '+ playerSelection + ' beats '+  computerSelection + "!";
    console.log('fired');
}

function changeTextWin(playerSelection,computerSelection){
    fadeOut();
    setTimeout(changeInnerHtmlWin(playerSelection,computerSelection),500);
    setTimeout(fadeIn, 1000);
    player_Score.innerText= playerScore;
}

function changeTextLose(playerSelection,computerSelection){
    fadeOut();
    setTimeout(changeInnerHtmlLose(playerSelection,computerSelection),500);
    setTimeout(fadeIn, 1000);
    computer_Score.innerText=computerScore;
}
function tie(){
    fadeOut();
    winner.innerText='TIE';
    setTimeout(fadeIn, 1000);
}

function compFadeInPS(){
    comp_paper.style.opacity=1;
    comp_scissors.style.opacity=1;
}

function compRockFadeIn(){
    comp_rock.style.scale=2;
}

function compRockFadeOut(){
    comp_rock.style.scale=1;
}

function compPaperFadeIn(){
    comp_paper.style.scale=2;
}

function compPaperFadeOut(){
    comp_paper.style.scale=1;
}

function compFadeInRS(){
    comp_rock.style.opacity=1;
    comp_scissors.style.opacity=1;
}

function compScissorsFadeIn(){
    comp_scissors.style.scale=2;
}

function compScissorsFadeOut(){
    comp_scissors.style.scale=1;
}

function compFadeInRP(){
    comp_rock.style.opacity=1;
    comp_paper.style.opacity=1;
}

function computerChoice(){
    let RockPaperScissors=['Rock','Paper','Scissors'];
    let computerPlay=RockPaperScissors[Math.floor(Math.random()*RockPaperScissors.length)];
    if (computerPlay==='Rock'){
        compRockFadeIn();
        setTimeout(compRockFadeOut, 1000)
        comp_scissors.style.opacity=0;
        comp_paper.style.opacity=0;
        setTimeout(compFadeInPS, 1000)
    }
    if (computerPlay==='Paper'){
        compPaperFadeIn();
        setTimeout(compPaperFadeOut, 1000);
        comp_rock.style.opacity=0;
        comp_scissors.style.opacity=0;
        setTimeout(compFadeInRS, 1000);
    }
    if (computerPlay==='Scissors'){
        compScissorsFadeIn();
        setTimeout(compScissorsFadeOut, 1000);
        comp_rock.style.opacity=0;
        comp_paper.style.opacity=0;
        setTimeout(compFadeInRP, 1000)
    }
    return computerPlay;
}

    function playRound(playerSelection){
        const computerSelection=computerChoice();
        if (playerSelection=='Rock'){
            if (computerSelection=='Paper'){
                computerScore++;
                console.log ('loss, paper beats rock');
                changeTextLose(playerSelection,computerSelection);
                }
            }
        if (playerSelection=='Rock'){
            if (computerSelection=='Scissors'){
                playerScore++;
                console.log ('win, rock beats scissors');
                changeTextWin(playerSelection,computerSelection);
            }
        }
            if (playerSelection=='Paper') {
                if (computerSelection=='Rock'){
                    playerScore++;
                    console.log ('win, paper beats rock');
                    changeTextWin(playerSelection,computerSelection);
                }
            }
            if (playerSelection=='Scissors'){
                if (computerSelection=='Paper'){
                    playerScore++;
                    console.log('win, scissors beat paper');
                    changeTextWin(playerSelection,computerSelection);
                   }
                }
            if (playerSelection=='Scissors'){
                if (computerSelection=='Rock'){
                    computerScore++;
                    console.log('loss, rock beats scissors');
                    changeTextLose(playerSelection,computerSelection);
                   }
                }   
            if (playerSelection=='Paper'){
                if (computerSelection=='Scissors'){
                    computerScore++;
                    console.log('loss,scissors beats paper');
                    changeTextLose(playerSelection,computerSelection);
                }
            }if (playerSelection===computerSelection){
                console.log ('tie');
                tie()                    
            }
    }


function main(){
    rock_button.addEventListener('click', function(){
        playRound('Rock');
        scissors_button.style.opacity=0;
        paper_button.style.opacity=0;
        setTimeout(fadeInPS, 1000)
        
    })
    paper_button.addEventListener('click', function(){
        playRound('Paper');
        rock_button.style.opacity=0;
        scissors_button.style.opacity=0;
        setTimeout(fadeInRS, 1000)

    })
    scissors_button.addEventListener('click', function(){
        playRound('Scissors');
        rock_button.style.opacity=0;
        paper_button.style.opacity=0;
        setTimeout(fadeInRP, 1000)
    })
}

main();