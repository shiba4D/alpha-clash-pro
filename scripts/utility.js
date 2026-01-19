function hideElementById(getElementById){
   const element = document.getElementById(getElementById)
   element.classList.add('hidden');            
}

function showElementById(elementId){
     const element = document.getElementById(elementId);
     element.classList.remove('hidden');          
}