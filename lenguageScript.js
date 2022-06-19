const languageButton = document.getElementById("buttondiv");

languageButton.addEventListener('click', (event) => {
  collectedObject = event.target;

  if (collectedObject.id.includes('english')) {
    window.open("./index-eng.html")
  }
  if (collectedObject.id.includes('portuguese')) {
    window.open("./index.html")
  }
})
