function hideElementById(elementId){
    const hideElement = document.getElementById(elementId);
    hideElement.classList.add('hidden')
}
function showElementById(elementId){
    const showElement =document.getElementById(elementId);
    showElement.classList.remove('hidden');
}