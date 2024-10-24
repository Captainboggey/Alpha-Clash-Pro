function hideElementById(elementId){
    const hideElement = document.getElementById(elementId);
    hideElement.classList.add('hidden')
}
function showElementById(elementId){
    const showElement =document.getElementById(elementId);
    showElement.classList.remove('hidden');
}
function setHightlightColorByid(elementId){
      const element =document.getElementById(elementId);
      element.classList.add('bg-orange-400')

}
function removeBackgroundColorById(elementId){
         const element =document.getElementById(elementId);
         element.classList.remove('bg-orange-400')
}

function getARandomAlphabet(){
    const alphabetString ='abcdefghijklmnopqrstuvwxyz';
    const alphabets = alphabetString.split('');
    console.log(alphabets)
    const randomNumber =Math.random()*25;
    const index =Math.round(randomNumber);
    
    const alphabet = alphabets[index];
    
    
    return alphabet;
    
}