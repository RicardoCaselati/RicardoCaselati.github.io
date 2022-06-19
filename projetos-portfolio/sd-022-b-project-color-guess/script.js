
function shuffleColor() {
  let painelColor = Array.from(document.getElementsByClassName("ball")).slice(0, 6);

  for (let colorBall of painelColor) {
    let r = parseInt(Math.random() * 255);
    let g = parseInt(Math.random() * 255);
    let b = parseInt(Math.random() * 255);

    colorBall.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
  }
} shuffleColor()

function selectRandomItem() {
  let selectedBall = Array.from(document.getElementsByClassName("ball")); //ideia para seleção de um item de forma randômica --> https://stackoverflow.com/questions/27296876/how-can-i-choose-one-random-item-from-an-array
  var item = selectedBall[Math.floor(Math.random() * selectedBall.length)];
  return item;
}

function printTextRGB() {
  let randomItem = selectRandomItem();
  let getProperty = randomItem.style['background-color'];
  let printText = document.getElementById("rgb-color");
  printText.innerText = getProperty;
} printTextRGB()

function makingScoreboard() {
  const board = document.getElementById("score");
  let scoreboard = document.createElement("div");
  scoreboard.setAttribute("id", "printScore");
  board.appendChild(scoreboard);
} makingScoreboard()

function NanToZero() {
  let nanItem = localStorage.getItem('score');
  let convertNan = parseInt(nanItem, 10);
  if (isNaN(convertNan)) {
    localStorage.setItem("score", 0);
  }
} NanToZero()

function onResetPage(){
  let inicialScore = 0;
  let scoreAtual = localStorage.getItem('score');  
  let numberZero = document.getElementById("printScore");
  numberZero.innerText = inicialScore += scoreAtual;
}onResetPage()

function selectingAnObject() {
  document.getElementById("six-balls").addEventListener('click', function (event) {
    let printedText = document.getElementById("rgb-color");
    const CSSObj = window.getComputedStyle(event.target, null);
    let bgColor = CSSObj.getPropertyValue("background-color");

    let printAnswer = document.getElementById("answer"); //ideia para o uso do session storage --> https://stackoverflow.com/questions/21755500/how-to-increase-value-stored-in-session-storage
    let score = onResetPage();
    let inputScore = document.getElementById("printScore");
    let currentScore = parseInt(localStorage.getItem("score"));

    if (bgColor === printedText.innerHTML) {
      printAnswer.innerText = "Acertou!";
      score = currentScore += 3;
      inputScore.innerHTML = currentScore;
      localStorage.setItem("score", score)
      setTimeout(function () {  //função para o uso do setTimeout --> https://stackoverflow.com/questions/33778384/how-to-refresh-a-page-after-some-seconds-with-jquery
        location.reload();
      }, 3000);
    } else {
      printAnswer.innerText = "Errou! Tente novamente!";
      setTimeout(function () {
        location.reload();
      }, 3000);
    }

  })
} selectingAnObject()



