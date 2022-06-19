// const button = document.getElementById("generate-board");

function searchSelected() {
  let colorItem = document.getElementsByClassName("color")[0];
  if (colorItem.classList.contains("color")) {
    if (colorItem.classList.contains("selected")) {
      const CSSObj = window.getComputedStyle(colorItem, null);
      let bgColor = CSSObj.getPropertyValue("background-color");

      return printColorSelected(bgColor)

    }
  }
}
searchSelected()

function slectedColor() {
  document.addEventListener('click', function (event) {
    if (event.target.classList.contains("color")) {
      if (event.target.classList.contains("selected")) {
        const CSSObj = window.getComputedStyle(event.target, null);
        let bgColor = CSSObj.getPropertyValue("background-color");

        return printColorSelected(bgColor)

      } else {

        let selectedItem = document.getElementsByClassName("selected")[0];
        selectedItem.classList.remove("selected");
        event.target.classList.add("selected");

        const CSSObj = window.getComputedStyle(event.target);
        let bgColor = CSSObj.getPropertyValue("background-color");

        return printColorSelected(bgColor)
      }
    }
  }, false);
}
slectedColor()

function printColorSelected(param) {
  document.addEventListener('click', function (printColor) {
    if (printColor.target.classList.contains("pixel")) {
      printColor.target.style.backgroundColor = param;
    }
  }, false);
}

// Esta função de cores aleatórias eu peguei deste artigo https://wallacemaxters.com.br/blog/48/como-gerar-cores-aleatorias-no-javascript

function shuffleColor1() {
  let painelColor1 = document.getElementsByClassName("shuffle")[0];
  let r = parseInt(Math.random() * 255);
  let g = parseInt(Math.random() * 255);
  let b = parseInt(Math.random() * 255);

  painelColor1.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
}
shuffleColor1()

function shuffleColor2() {
  let painelColor2 = document.getElementsByClassName("shuffle")[1];
  let r = parseInt(Math.random() * 255);
  let g = parseInt(Math.random() * 255);
  let b = parseInt(Math.random() * 255);

  painelColor2.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
}
shuffleColor2()

function shuffleColor3() {
  let painelColor3 = document.getElementsByClassName("shuffle")[2];
  let r = parseInt(Math.random() * 255);
  let g = parseInt(Math.random() * 255);
  let b = parseInt(Math.random() * 255);

  painelColor3.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
}
shuffleColor3()

function getInputValue() {
  const anInput = document.getElementById("board-size").value;
  let inputNumber = parseInt(anInput);

  if(isNaN(inputNumber)){
    alert("Board inválido!")
  }

  validateInput(inputNumber);
}

function validateInput(input) {
  if (input >= 5 && input <= 50) {
    return removeBoard(input);
  } else if (input < 5) {
    console.log("estou na linha 96: ", input)
    return removeBoard(5);
  } else if (input > 50) {
    return removeBoard(50);
  }
}

function removeBoard(param) {
  console.log("estou na linha 105: ", param)
  let pixelConteinerObject = document.getElementById("pixel-board");
  pixelConteinerObject.remove();

  replicatePixel(param)
}

function createNewPixel() {
  let createPixels = document.createElement("div");
  createPixels.classList.add("pixel");
  return createPixels;
}

function replicatePixel(param) {
  let linhas = [param];
  let colunas = [param];

  let createSection = document.createElement("SECTION");
  createSection.setAttribute("id", "pixel-board");
  document.body.appendChild(createSection);

for (let linha = 0; linha < linhas; linha += 1) {
  if (linha < linhas) {
    let pixelForConteiner = document.getElementById("pixel-board");

    let fivePixels = document.createElement("div");
    fivePixels.classList.add("container");
    fivePixels.classList.add("d-flex");
    fivePixels.classList.add("flex-row");
    fivePixels.classList.add("justify-content-center");
    pixelForConteiner.appendChild(fivePixels);
    for (let coluna = 0; coluna < colunas; coluna += 1) {
      if (coluna < colunas) {
        let oldPixel = createNewPixel();
        fivePixels.appendChild(oldPixel);
      }
    }
  }
}
}
replicatePixel(5)


//   for (let linha = 0; linha < linhas; linha += 1) {
//     if (linha < linhas) {
//       const pixelForConteiner = document.getElementById('pixel-board');
      
//       let fivePixels = document.createElement("div");
//       fivePixels.classList.add("conteiner-pixels");
//       fivePixels.classList.add("d-flex");
//       fivePixels.classList.add("flex-row");
//       fivePixels.classList.add("justify-content-center");
//       pixelForConteiner.appendChild(fivePixels);
//       for (let coluna = 0; coluna < colunas; coluna += 1) {
//         if (coluna < colunas) {
//           let oldPixel = createNewPixel();
//           fivePixels.appendChild(oldPixel);
//         }
//       }
//     }
//   }
// }
// replicatePixel(5)