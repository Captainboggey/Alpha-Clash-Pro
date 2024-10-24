// function play(){
//    const homeSection=document.getElementById('home-screen');
// //    console.log(homeSection.classList);
// homeSection.classList.add('hidden')
// const playGroundSection =document.getElementById('play-ground');
// // console.log(playGroundSection.classList);
// playGroundSection.classList.remove('hidden');

// }
function handleKeyboardKeyUpEvent(event) {
  const playerPressed = event.key;
  console.log("player pressed", playerPressed);
  const currentAlphabet = document.getElementById("current-alphabet");
  // console.log(currentAlphabet.innerText);
  const currentAlphabet2 = currentAlphabet.innerText;
  const expectedAlphabet = currentAlphabet2.toLowerCase();
  console.log(playerPressed, expectedAlphabet);
  if (playerPressed === expectedAlphabet) {
    console.log("you get a point");
    const currentScoreElement =document.getElementById('current-score')
    const currentScoreText = currentScoreElement.innerText;
    console.log(currentScoreText);
    const currentScore =parseInt(currentScoreText);
    const newScore = currentScore+1;
    currentScoreElement.innerText =newScore;






    removeBackgroundColorById(expectedAlphabet);
    
    continueGame();
    
  } else {
    console.log("you missed you lost a point and a life");
    const currentLifeElement = document.getElementById('current-life');
    const currentLifeText = currentLifeElement.innerText;
    const currentlife = parseInt(currentLifeText);
    const newLife = currentlife-1;
    currentLifeElement.innerText = newLife;
    
  }
}

document.addEventListener("keyup", handleKeyboardKeyUpEvent);

function continueGame() {
  const alphabet = getARandomAlphabet();

  //    set randomly genarate alphabet in the screen
  const currentAlphabet = document.getElementById("current-alphabet");
  currentAlphabet.innerText = alphabet;

  setHightlightColorByid(alphabet);
}

function play() {
  hideElementById("home-screen");
  showElementById("play-ground");
  continueGame();
}
