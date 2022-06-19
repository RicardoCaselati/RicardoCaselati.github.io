const getFormsParameter = document.forms['evaluation-form'];
const btn = document.getElementById('submit-btn');
const getChecked = document.getElementById('agreement'); // https://flexiple.com/disable-button-javascript/
const testChecked = getChecked.checked;

const button = document.querySelector('.button');
const elementTextarea = document.getElementById('textarea');

function texto() {
  const mail = document.querySelector('#email');
  const senha = document.querySelector('#senha');
  console.log(mail);
  console.log(senha);
  if (!mail.value && !senha.value) {
    alert('Email ou senha inválidos.');
  } else {
    alert('Olá, Tryber!');
  }
}
button.addEventListener('click', texto);

btn.disabled = true;

function eventFunction() {
  if (testChecked === false) {
    btn.disabled = false;
  } else {
    btn.disabled = true;
  }
}
getChecked.addEventListener('click', eventFunction);

function counterLetter() {
  const elementCounter = document.getElementById('counter');
  const elementTextareaWithLength = document.getElementById('textarea').value.length;
  const chars = document.getElementById('textarea').maxLength;

  if (elementTextareaWithLength === 0) { // ideia pega no artigo  //https://codingstatus.com/how-to-count-textarea-characters-using-javascript/
    elementCounter.innerHTML = chars;
  } else {
    elementCounter.innerHTML = chars - elementTextareaWithLength;
  }
}
elementTextarea.addEventListener('keyup', counterLetter);
counterLetter();

const getName = () => {
  const userName = document.getElementById('input-name').value;
  const lastName = document.getElementById('input-lastname').value;
  const completName = `${userName} ${lastName}`;
  return completName;
};

const getEmail = () => {
  const email = document.getElementById('input-email').value;
  return email;
};

const getHouse = () => {
  const selectedHouse = getFormsParameter.wichYourHouse.value; // este código veio deste artigo https://contactmentor.com/get-selected-option-value-javascript/
  return selectedHouse;
};

const getFamily = () => {
  const selectedFamily = getFormsParameter.family.value;
  return selectedFamily;
};

function getSubject() {
  const elementSubject = document.getElementsByClassName('subject');
  const arrayOfElementes = [];

  for (let elementsTrue = 0; elementsTrue < elementSubject.length; elementsTrue += 1) {
    if (elementSubject[elementsTrue].checked === true) {
      const elementSelected = elementSubject[elementsTrue].value;
      arrayOfElementes.push(elementSelected);
    }
  }
  return arrayOfElementes.join(', ');
}
// const subjectSelected = getSubject();

const getRate = () => {
  const trybewartsRate = getFormsParameter.rate.value;
  return trybewartsRate;
};

const getTextarea = () => {
  const textarea = document.getElementById('textarea').value;
  return textarea;
};

function construcObject() {
  const objToPrint = {
    Nome: getName(),
    Email: getEmail(),
    Casa: getHouse(),
    Família: getFamily(),
    Matérias: getSubject(),
    Avaliação: getRate(),
    Observações: getTextarea(),
  };
  return objToPrint;
}

function printToUser() {
  const {
    Nome,
    Email,
    Casa,
    Família,
    Matérias,
    Avaliação,
    Observações,
  } = construcObject();
  // essa ideia veio deste artigo https://anjandutta.com/extract-data-from-arrays-and-objects-in-javascript/
  const form = `Nome: ${Nome} 
                Email: ${Email}
                Casa: ${Casa}
                Família: ${Família}
                Matérias: ${Matérias}
                Avaliação: ${Avaliação}
                Observações: ${Observações}`;
  const print = document.getElementById('evaluation-form').innerText = form;
  document.getElementById('evaluation-form').className = 'bg';
}

btn.addEventListener('click', printToUser);
