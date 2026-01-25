// hide any element by id
function hideElementById(elementId) {
  const element = document.getElementById(elementId);
  if (element) {
    element.classList.add('hidden');
  }
}

// show any element by id
function showElementById(elementId) {
  const element = document.getElementById(elementId);
  if (element) {
    element.classList.remove('hidden');
  }
}

// add background color to an element
function setBackgroundColorById(elementId) {
  const element = document.getElementById(elementId);
  if (element) {
    element.classList.add('bg-orange-400');
  }
}

function removeBackgroundColorById(elementId) {
  const element = document.getElementById(elementId);
  if (element) {
    element.classList.remove('bg-orange-400');
  }
}

function getTextElementValueById(elementId){
    const element = document.getElementById(elementId);
    const elementValueText = element.innerText;
    const value = parseInt(elementValueText);
    return value;
}

function setTextElementValueById(elementId, value){
    const element = document.getElementById(elementId);
    element.innerText = value;
}


function getElementTextById(elementId){
    const element = document.getElementById(elementId);
    const text = element.innerText;
    return text;
}

function getARandomAlphabet(){
    const alphabetString = 'abcdefghijklmnopqrstuvwxyz';
    const alphabets = alphabetString.split('');
    
    const randomNumber = Math.random()*25;
    const index = Math.round(randomNumber);

    const alphabet = alphabets[index];
    return alphabet;
}


// function getARandomAlphabet(){
//     // get or create an alphabet array           
//     return 'abcdefghijklmnopqrstuvwxyz';

//     // get a random index between 0 to 25

//     const randomNumber = Math.random() * 25;
//     const index = Math.round(randomNumber);
    

//     const alphabet = alphabets[index];
//     console.log(index, alphabets);
//     return alphabet;
// }

// const alphabet = getARandomAlphabet().split('');
// console.log(alphabet);

  
