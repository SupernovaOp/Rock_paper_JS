let userScore=0;
let computerScore=0;
let Tie=0;
function playGame(playerChoice) 
{
const strings = ['Rock', 'Paper', 'Scissors'];
let randomIndex = Math.floor(Math.random() * strings.length);
let computerChoice = strings[randomIndex];

src='';
let result = '';
let score=''

if (playerChoice === computerChoice) 
{
  result = `You picked ${playerChoice}. Computer picked ${computerChoice}. It's a Tie.`;
  Tie+=1;
  score=`Wins: ${userScore},Loses: ${computerScore}, Tie: ${Tie}`
} 
else if((playerChoice === 'Rock' && computerChoice === 'Scissors') ||
  (playerChoice === 'Paper' && computerChoice === 'Rock') ||
  (playerChoice === 'Scissors' && computerChoice === 'Paper'))
 {
  result = `You picked ${playerChoice}. Computer picked ${computerChoice}. You Win!`;
  userScore+=1;
  score=`Wins: ${userScore},Loses: ${computerScore}, Tie: ${Tie}`
 }
else 
{
  result = `You picked ${playerChoice}. Computer picked ${computerChoice}. Computer Wins.`;
  computerScore+=1;
  score=`Wins: ${userScore},Loses: ${computerScore}, Tie: ${Tie}`
}

document.getElementById('result').textContent = result;
document.getElementById('score').textContent = score;
document.getElementById('you').textContent='You';
document.getElementById('userMove').src = playerChoice.toLowerCase()+'-emoji' + '.png';
document.getElementById('comp').textContent='Computer';
document.getElementById('computerMove').src = computerChoice.toLowerCase()+'-emoji' + '.png';

}
function reset()
{
userScore=0;
computerScore=0;
Tie=0;
score=`Wins: ${userScore},Loses: ${computerScore}, Tie: ${Tie}`
document.getElementById('score').textContent = score;
}