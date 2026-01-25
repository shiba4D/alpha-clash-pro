// function play() {
//                // step-1: hide the home screen. to hide the screen add the class hidden to the home section
//                const homeSection = document.getElementById("home-screen");
//                homeSection.classList.add('hidden');
//                // show the play ground
//                const playGroundSection = document.getElementById('play-ground');
//                playGroundSection.classList.remove('hidden');
//                // console.log(playGroundSection.classList);
// }


function handleKeyboardKeyUpEvent(event){
  const playerPressed = event.key;
  console.log('player pressed', playerPressed);

  // stop the game if pressed 'Esc'
  if(playerPressed === 'Escape'){
     gameOver();
  }

  // expected alphabet
  const currentAlphabetElement = document.getElementById('current-alphabet');
  const currentAlphabet = currentAlphabetElement.innerText;
  const expectedAlphabet = currentAlphabet.toLowerCase();

  // check right or wrong key pressed
  if(playerPressed === expectedAlphabet){
    console.log('you got a point!');


    const currentScore = getTextElementValueById('current-score');
    const updatedScore = currentScore + 1;
    setTextElementValueById('current-score', updatedScore);





    //------------------------------------------------------------------------
    // update score:
    // // 1. get the current score
    // const currentScoreElement = document.getElementById('current-score');
    // const currentScoreText = currentScoreElement.innerText;
    // const currentScore = parseInt(currentScoreText);
    // console.log(currentScoreText);
    // const currentScore = getTextElementvalueById('current-score');

    // 2. increase the current score by 1
    const newScore = currentScore + 1;

    // 3. show the updeated score
    // currentScoreElement.innerText = newScore;

    // start a new round
    console.log('you have pressed correctly', expectedAlphabet);
    removeBackgroundColorById(expectedAlphabet);
    continueGame();
  }
  else {
    console.log('dhurr vaiya vb apu... right key press koro');


    const currentlife = getTextElementValueById('current-life');
    const updatedlife = currentlife - 1;
    setTextElementValueById('current-life', updatedlife);

    if(updatedlife === 0){
        gameOver();
    }

    // step-1: get the current life number
    // const currentlifeElement = document.getElementById('current-life');
    // const currentlifeText = currentlifeElement.innerText;
    // const currentlife = parseInt(currentlifeText);

    // // step-2: reduce the life count
    // const newlife = currentlife - 1;

    // // step-3: display the updated life count
    // currentlifeElement.innerText = newlife;
  }
}

document.addEventListener('keyup', handleKeyboardKeyUpEvent);

function continueGame(){
     // step -1: generate a random alphabet
     const alphabet = getARandomAlphabet();
     // console.log('your random alphabet', alphabet);

    // set randomly generated alphabet to the screen (show it)
    currentAlphabetElement = document.getElementById('current-alphabet');
    currentAlphabetElement.innerText = alphabet;

    // set background color
    setBackgroundColorById(alphabet);
}

function play() {
  // hide everything show only the playground
  hideElementById('home-screen');  
     hideElementById('final-score');
     showElementById('play-ground');

     // reset score and life
    setTextElementValueById('current-life', 5);
    setTextElementValueById('current-score', 0);

     continueGame();
}
// function setBackgroundColorById(elementId){
//   const element = document.getElementById(elementId);
//   element.classList.add('bg-orange-400');
// }

function gameOver(){
    hideElementById('play-ground');
    showElementById('final-score');
    // update final score
    // 1. get the final score
    const lastScore = getTextElementValueById('current-score');
    console.log(lastScore);
    setTextElementValueById('last-score', lastScore);

    // clear the last selected alphabet highlight
    const currentAlphabet = getElementTextById('current-alphabet');
    // console.log(currentAlphabet);
    removeBackgroundColorById(currentAlphabet);

}