function hideElementById(getElementById){
   const element = document.getElementById(getElementById)
   element.classList.add('hidden');            
}

function showElementById(elementId){
     const element = document.getElementById(elementId);
     element.classList.remove('hidden');          
}

function setBackgroundColorById(elementId){
               const element = document.getElementById(elementId);
               element.classList.add('bg-orange-400');
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

  
